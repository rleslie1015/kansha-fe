import React, { useState, useEffect } from 'react';
import OrganizationEmployeesTable from './OrganizationEmployeesTable';

const CreateTeam = ({ employees, checked, setChecked }) => {
	const [teamMemberArray, setTeamMemberArray] = useState([]);

	console.log(teamMemberArray, 'new team array');

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
					id="teamname"
					name="teamname"
					placeholder="Team Name"
				/>
				<div className="create-team-picked"></div>
			</div>
			<div>{teamMemberArray.map(team => {})}</div>
		</div>
	);
};

export default CreateTeam;
