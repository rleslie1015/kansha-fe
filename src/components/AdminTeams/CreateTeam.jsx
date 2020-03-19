import React, { useState, useEffect } from 'react';
import OrganizationEmployeesTable from './OrganizationEmployeesTable';

const CreateTeam = ({ employees }) => {
	return (
		<div className="create-team-container">
			<div className="create-team-employees-list">
				<OrganizationEmployeesTable employees={employees} />
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
		</div>
	);
};

export default CreateTeam;
