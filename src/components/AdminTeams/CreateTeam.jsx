import React, { useState } from 'react';
import OrganizationEmployeesTable from './OrganizationEmployeesTable';

const CreateTeam = ({
	employees,
	checked,
	setChecked,
	teamMemberArray,
	setTeamMemberArray,
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
					employees={employees}
					teamMemberArray={teamMemberArray}
					setTeamMemberArray={setTeamMemberArray}
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
					return <h1>{team.first_name}</h1>;
				})}
			</div>
		</div>
	);
};

export default CreateTeam;
