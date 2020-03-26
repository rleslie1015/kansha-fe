import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

// Component imports
import Team from './Team';

const OrganizationTeams = ({ teams, setTeams }) => {
	useEffect(() => {
		axiosWithAuth()
			.get('/teams/')
			.then(res => {
				setTeams(res.data);
			});
	}, [teams]);

	return (
		<table className="org-team-container">
			<tbody>
				{teams ? (
					teams.map(team => (
						<Team
							key={team.id}
							id={team.id}
							name={team.name}
							managers={team.managers}
							count={team.count}
							setTeams={setTeams}
						/>
					))
				) : (
					<div>
						<h1>You currently have no teams to view.</h1>
						<button>Create a Team</button>
					</div>
				)}
			</tbody>
		</table>
	);
};

export default OrganizationTeams;
