import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { finishLogin } from '../../store/actions/user-actions';
import { useDispatch } from 'react-redux';
// Component imports

import OrganizationEmployeesTable from './OrganizationEmployeesTable';
import OrganizationTeams from './OrganizationTeams';
import CreateTeam from './CreateTeam';

const OrganizationHome = () => {
	const titleArr = ['Employees', 'Teams'];
	// Button states
	const [empButton, setEmpButton] = useState(true);
	const [createTeamsBtn, setCreateTeamsBtn] = useState(false);
	const [teamsBtn, setTeamsBtn] = useState(false);
	// Query states
	const [filter, setFilter] = useState('');
	const [limit, setLimit] = useState(20);
	const [page, setPage] = useState(1);
	// Counts
	const [empCount, setEmpCount] = useState(0);
	// employees state
	const [title, setTitle] = useState(titleArr[0]);
	const [employees, setEmployees] = useState([]);
	const [teamMemberArray, setTeamMemberArray] = useState([]);
	const [role, setRole] = useState('');
	// Teams state
	const [teams, setTeams] = useState([]);
	const [teamName, setTeamName] = useState('');

	const history = useHistory();

	let teamCount = teams.length;

	const dispatch = useDispatch();

	const handleSubmit = () => {
		let newTeam = {
			name: teamName,
			newMembersArray: teamMemberArray,
		};

		axiosWithAuth()
			.post('/teams', newTeam)
			.then((res) => {
				setTeamsBtn(true);
				setCreateTeamsBtn(false);
				history.push(`/teams/${res.data.id}`);

				finishLogin(dispatch);
				/* I added this "finishLogin(dispatch)" here because I needed the state to refresh before a user checks their profile.
				However, it's hacky. I highly recommend updating the store instead so that other components will update without refresh */
			})
			.catch((error) => console.log(error.response));
	};

	// Grab Employees for a user's organization and set to state
	useEffect(() => {
		axiosWithAuth()
			.get(
				`/employees/organizations?search=${filter}&limit=${limit}&page=${page}`,
			)
			.then((res) => {
				setEmployees(res.data.employees);
				setEmpCount(res.data.count);
			});
	}, [filter, limit, page]);

	// Ordering employees array alphabetically
	employees.sort((a, b) => a.first_name.localeCompare(b.first_name));

	// Ordering teams in organization alphabetically
	teams.sort((a, b) => a.name.localeCompare(b.name));

	// Function to add a team member to array in create team component
	const addTeamMember = (e, param) => {
		e.preventDefault();
		let checkbox = e.target.previousSibling;
		if (!checkbox) {
			checkbox = e.target;
		}

		const emp = employees.find((em) => em.id === param);
		const alreadyAdded = teamMemberArray.find((tm) => tm.id === param);
		if (alreadyAdded) {
			setTeamMemberArray(teamMemberArray.filter((tm) => tm.id !== param));
			checkbox.checked = false;
		} else {
			setTeamMemberArray([
				...teamMemberArray,
				{ ...emp, user_id: emp.id, team_role: 'member' },
			]);
			checkbox.checked = true;
		}
	};

	const handleAddUserClick = () => {
		history.push('/add-user');
	};

	// Dynamically rendering component based on which filter button is selected
	let table;
	if (empButton) {
		table = (
			<OrganizationEmployeesTable
				empButton={empButton}
				employees={employees}
				setLimit={setLimit}
				setPage={setPage}
				limit={limit}
				page={page}
				setEmployees={setEmployees}
				createTeamsBtn={createTeamsBtn}
			/>
		);
	} else if (createTeamsBtn) {
		table = (
			<CreateTeam
				setTeamMemberArray={setTeamMemberArray}
				teamMemberArray={teamMemberArray}
				employees={employees}
				addTeamMember={addTeamMember}
				teams={teams}
				teamName={teamName}
				setTeamName={setTeamName}
				role={role}
				setRole={setRole}
			/>
		);
	} else if (teamsBtn) {
		table = (
			<OrganizationTeams
				teams={teams}
				setTeams={setTeams}
				setCreateTeamsBtn={setCreateTeamsBtn}
				setTitle={setTitle}
				titleArr={titleArr}
				setTeamsBtn={setTeamsBtn}
			/>
		);
	}

	let createButton;
	if (createTeamsBtn) {
		createButton = <button onClick={handleSubmit}>Save</button>;
	} else if (!createTeamsBtn) {
		createButton = (
			<button
				onClick={() => {
					setCreateTeamsBtn(true);
					setEmpButton(false);
					setTitle(titleArr[0]);
				}}>
				Create a Team
			</button>
		);
	}

	return (
		<div className="teams-dashboard">
			<div className="header">
				<h1>Organization</h1>
				<div className="add-team-container">{createButton}</div>
				<h2 className="members-number">
					{title}{' '}
					{empButton
						? `(${empCount})`
						: `(${teamCount})` && createTeamsBtn
						? `(${empCount})`
						: `(${teamCount})`}
				</h2>
			</div>
			<div className="employee-filter-container">
				<h3>Filter:</h3>
				<button
					onClick={() => {
						setEmpButton(true);
						setTitle(titleArr[0]);
						setCreateTeamsBtn(false);
						setTeamsBtn(false);
					}}
					className="btn-filter">
					Employees
				</button>
				<button
					onClick={() => {
						setEmpButton(false);
						setCreateTeamsBtn(false);
						setTeamsBtn(true);
						setTitle(titleArr[1]);
					}}
					className="btn-filter">
					Teams
				</button>
				<button className="btn-filter" style={{ opacity: 0 }}>
					Hidden
				</button>
				<div className="employee-search-container">
					<input
						style={
							teamsBtn
								? { visibility: 'hidden' }
								: { display: 'block' }
						}
						value={filter}
						onChange={(event) => setFilter(event.target.value)}
						type="text"
						id="search"
						name="search"
						placeholder="Search"
					/>
				</div>
			</div>
			<div className="select-add-members">
				<h3
					style={
						teamsBtn
							? { visibility: 'hidden' }
							: { display: 'block' }
					}
					onClick={handleAddUserClick}>
					+ Add more members
				</h3>
			</div>
			{table}
		</div>
	);
};

export default OrganizationHome;
