import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import TeamsEmployee from './TeamsEmployee';

const OrganizationTeams = () => {
	const [employees, setEmployees] = useState([]);

	useEffect(() => {
		axiosWithAuth()
			.get('/employees/organizations')
			.then(res => {
				console.log(res);
				setEmployees(res.data.employees);
			});
	}, []);
	console.log(employees, 'Employees Array');

	const EmployeeCount = employees.length;

	return (
		<div className="teams-dashboard">
			<h1>Organization</h1>
			<h2>Employees {`(${EmployeeCount})`}</h2>
			{employees.map(data => {
				return <TeamsEmployee data={data} key={data.id} />;
			})}
		</div>
	);
};

export default OrganizationTeams;
