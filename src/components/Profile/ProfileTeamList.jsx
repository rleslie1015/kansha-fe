import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
//component should render list of employees from one team
import Member from '../AdminTeams/Member';
import Dropdown from '../Onboarding/DropDown';
import { useSelector } from 'react-redux';
import OrgEmployees from '../AdminTeams/OrgEmployees';
// Icon Imports
import { ReactComponent as EmptyTeams } from '../../assets/emptyTeams.svg';

// Modal imports

function ProfileTeamList({ myProfile }) {
	const [modal, setModal] = useState(false);
	const [teamDetails, setTeamDetails] = useState();
	const [loadingState, setLoadingState] = useState();
	const [organizationMembers, setOrganizationMembers] = useState([]);

	useSelector(state => console.log(state));

	const { profile } = useSelector(({ user }) => ({
		...user,
	}));

	console.log(profile, 'profile');

	// function useForceUpdate() {
	// 	const [value, setValue] = useState(0); // integer state
	// 	return () => setValue(value => ++value); // update the state to force render
	// }

	const [teamList, setTeamList] = useState(
		profile.teams && profile.teams.length > 0 ? profile.teams : null,
	);

	const [selectedTeam, setSelectedTeam] = useState(
		teamList ? teamList[0].team_id : null,
	);
	console.log(selectedTeam, 'selectedTeam');
	useEffect(() => {
		const fetchData = async () => {
			const teamData = await axiosWithAuth().get(
				`/teams/${selectedTeam}`,
			);
			setTeamDetails(teamData);
		};
		fetchData();
	}, [selectedTeam, profile, teamList]);

	const handleName = id => {
		setSelectedTeam(id);
	};
	useEffect(() => {
		const fetchData = async () => {
			const orgData = await axiosWithAuth().get(
				`/employees/organizations`,
			);
			setOrganizationMembers(orgData.data.employees);
		};

		// setSelectedTeam(teamList ? teamList[0] : null);
		handleName(selectedTeam?.id);
		fetchData();
	}, []);

	if (loadingState === true) {
		return <div>'Loading...'</div>;
	} else {
		return (
			<section className="teams-dashboard">
				<h2 className="teams-dashboard-title">
					{teamList ? 'Teams' : `${profile.org_name} Members`}
				</h2>
				<div className="dropdown-time-div">
					{teamList ? (
						<Dropdown
							classNombre="custom-select dashboard"
							setSelection={handleName}>
							{teamList?.map(team => {
								return (
									<option value={team.team_id}>
										{team.name}
									</option>
								);
							})}
						</Dropdown>
					) : null}
				</div>
				<div className="employee-filter-container">
					<h3>Filter:</h3>
					<button className="btn-filter">Members</button>
					<div className="employee-search-container">
						<input
							// value={filter}
							// onChange={event => setFilter(event.target.value)}
							type="text"
							id="search"
							name="search"
							placeholder="Search"
						/>
					</div>
				</div>
				{teamList ? (
					<table className="team-member-table">
						<tbody>
							{teamDetails?.data.team_members?.map(member => {
								return (
									<Member
										key={member.id}
										member={member}
										modal={modal}
										setModal={setModal}
										profile={member}
										teamDetails={teamDetails}
										setTeamDetails={setTeamDetails}
										myProfile={myProfile}
									/>
								);
							})}
						</tbody>
					</table>
				) : (
					<table className="team-member-table">
						<tbody>
							{organizationMembers.map(member => {
								return (
									<OrgEmployees
										key={member.id}
										id={member.id}
										employee={member}
										onDashboard={true}
									/>
								);
							})}
						</tbody>
					</table>
				)}
			</section>
		);
	}
}

export default ProfileTeamList;
