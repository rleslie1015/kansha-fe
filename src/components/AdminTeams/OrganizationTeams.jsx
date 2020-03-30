import React, { useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

// Component imports
import Team from './Team';

const OrganizationTeams = ({ teams, setTeams, setCreateTeamsBtn }) => {
	useEffect(() => {
		axiosWithAuth()
			.get('/teams/')
			.then(res => {
				setTeams(res.data);
			});
	}, [setTeams, setCreateTeamsBtn]);

	return (
		<table className="org-team-container">
			<tbody>
				{teams ? (
					teams.map(team => {
						return (
							<Team
								key={team.id}
								id={team.id}
								name={team.name}
								managers={team.teamManagers}
								count={team.count}
								setTeams={setTeams}
								profile={team}
							/>
						);
					})
				) : (
					<div>
						<h1>You currently have no teams to view.</h1>
						<button className="org-team-button">
							Create a Team
						</button>
					</div>
				)}
			</tbody>
		</table>
	);
};

export default OrganizationTeams;
