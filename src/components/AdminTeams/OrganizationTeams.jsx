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
			<div className="employee-filter-container">
				<h3>Filter:</h3>
				<button className="btn-filter">Employees</button>
				<button className="btn-filter">Teams</button>
				<button className="btn-filter">Hidden</button>
				<input
					type="text"
					id="search"
					name="search"
					placeholder="Search"
				/>
			</div>
			<div className="select-add-members">
				<h3 className="select-all">Select All</h3>
				<h3>+ Add more members</h3>
			</div>
			<table className="employees-table">
				{employees.map(data => {
					return <TeamsEmployee data={data} key={data.id} />;
				})}
			</table>
		</div>
	);
};

export default OrganizationTeams;
