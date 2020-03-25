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
	return (
		<div className="org-team-container">
			<h1>You currently have no teams to view.</h1>
			<button>Create a Team</button>
		</div>
	);
};

export default OrganizationTeams;
