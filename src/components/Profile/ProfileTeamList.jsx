import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
//component should render list of employees from one team
import Member from '../AdminTeams/Member';
import Dropdown from '../Onboarding/DropDown';
import { useSelector } from 'react-redux';
import OrgEmployees from '../AdminTeams/OrgEmployees';
// Icon Imports

function ProfileTeamList({ myProfile }) {
	const [modal, setModal] = useState(false);
	const [teamDetails, setTeamDetails] = useState();
	const [loadingState] = useState();
	const [organizationMembers, setOrganizationMembers] = useState([]);
	const [filter, setFilter] = useState('');

	const { profile } = useSelector(({ user }) => ({
		...user,
	}));

	const [teamList] = useState(
		profile.teams && profile.teams.length > 0 ? profile.teams : null,
	);

	const [selectedTeam, setSelectedTeam] = useState(
		teamList ? teamList[0].team_id : null,
	);

	useEffect(() => {
		const fetchData = async () => {
			const teamData = await axiosWithAuth().get(
				`/teams/${selectedTeam}`,
			);
			setTeamDetails(teamData);
		};
		fetchData();
	}, [selectedTeam, profile, teamList, filter]);

	const handleName = (id) => {
		setSelectedTeam(id);
	};
	useEffect(() => {
		const fetchData = async () => {
			const orgData = await axiosWithAuth().get(
				`/employees/organizations?search=${filter}`,
			);
			setOrganizationMembers(orgData.data.employees);
		};

		handleName(selectedTeam?.id);
		fetchData();
	}, [filter, selectedTeam]);

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
							placeholder={profile.teams[0].name}
							classNombre="custom-select dashboard"
							setSelection={handleName}>
							{teamList?.map((team) => {
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
							style={
								profile.teams
									? { display: 'none' }
									: { display: 'block' }
							}
							value={filter}
							onChange={(event) => setFilter(event.target.value)}
							type="text"
							id="search"
							name="search"
							placeholder="Search for member"
						/>
					</div>
				</div>
				{teamList ? (
					<table className="team-member-table">
						<tbody>
							{teamDetails?.data.team_members?.map((member) => {
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
							{organizationMembers.map((member) => {
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
