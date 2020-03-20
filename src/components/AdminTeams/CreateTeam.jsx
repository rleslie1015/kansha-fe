import React, { useState, useEffect } from 'react';
import OrganizationEmployeesTable from './OrganizationEmployeesTable';
import { Link } from 'react-router-dom';

const CreateTeam = ({
	employees,
	checked,
	setChecked,
	teamMemberArray,
	setTeamMemberArray,
	addTeamMember,
}) => {
	const [teamName, setTeamName] = useState('');

	const handleChange = event => {
		setTeamName(event.target.value);
	};

	const handleSubmit = () => {
		console.log(teamName);
	};

	console.log(teamMemberArray, 'team member array');
	console.log(setTeamMemberArray, 'setter function');

	return (
		<div className="create-team-container">
			<div className="create-team-employees-list">
				<OrganizationEmployeesTable
					checked={checked}
					setChecked={setChecked}
					employees={employees}
					teamMemberArray={teamMemberArray}
					setTeamMemberArray={setTeamMemberArray}
					addTeamMember={addTeamMember}
				/>
			</div>
			<div className="create-team">
				<input
					type="text"
					id="save-team"
					name="teamname"
					placeholder="Team Name"
					onChange={event => handleChange(event)}
				/>
				<button
					type="submit"
					form="save-team"
					onSubmit={() => handleSubmit()}>
					save team
				</button>
				<div className="create-team-picked"></div>
			</div>
			<div>
				{teamMemberArray.map(team => {
					return (
						<Link to={`/profile/${team.id}`}>
							<div className="teams-employee-info">
								<img
									src={team.profile_picture}
									alt="profile img"
									className="teams-profile-picture"
								/>
								<h3>
									{team.first_name} {team.last_name}
								</h3>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default CreateTeam;
