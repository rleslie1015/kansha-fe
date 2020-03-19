import React, { useState, useEffect } from 'react';

const OrganizationTeams = () => {
	// const [teams, setTeams] = useState(null);
	// const [teamCount, setTeamCount] = useState(null);

	// useEffect(() => {
	// 	axiosWithAuth()
	// 		.get(`/employees/organizations?search=${filter}&limit=${empCount}`)
	// 		.then(res => {
	// 			console.log(res);
	// 			// setTeams(res.data.teams)
	// 			setEmployees(res.data.employees);
	// 			setEmpCount(res.data.count);
	// 			setTeamCount(0);
	// 		});
	// }, [filter, empCount]);

	return (
		<div className="org-team-container">
			<h1>You currently have no teams to view.</h1>
			<button>Create a Team</button>
		</div>
	);
};

export default OrganizationTeams;
