import React, { useState, useEffect } from 'react';
import OrganizationEmployeesTable from './OrganizationEmployeesTable';

const CreateTeam = ({ employees, checked, setChecked }) => {
	const [teamMemberArray, setTeamMemberArray] = useState([]);
	const [teamName, setTeamName] = useState('');

	console.log(teamMemberArray, 'new team array');

	const handleChange = event => {
		setTeamName(event.target.value);
	};

	const handleSubmit = () => {
		console.log(teamName);
	};

	return (
		<div className="create-team-container">
			<div className="create-team-employees-list">
				<OrganizationEmployeesTable
					setChecked={setChecked}
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
			<div>{teamMemberArray.map(team => {})}</div>
		</div>
	);
};

export default CreateTeam;
