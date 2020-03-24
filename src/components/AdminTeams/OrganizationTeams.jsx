import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const OrganizationTeams = () => {
	const [teams, setTeams] = useState([]);
	const [teamCount, setTeamCount] = useState(null);

	useEffect(() => {
		axiosWithAuth()
			.get('/teams')
			.then(res => {
				console.log(res);
				setTeams(res.data);
			});
	}, []);

	if (teams.length > 1) {
		return teams.map(team => {
			return (
				<div>
					<h1>{team.name}</h1>
				</div>
			);
		});
	} else if (teams.length === 0) {
		return (
			<div className="org-team-container">
				<h1>You currently have no teams to view.</h1>
				<button>Create a Team</button>
			</div>
		);
	}
};

export default OrganizationTeams;
