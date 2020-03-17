import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useSelector } from 'react-redux';

import TeamsEmployee from './TeamsEmployee';

const OrganizationTeams = () => {
	const [employees, setEmployees] = useState([]);

	const { profile } = useSelector(({ user }) => ({
		...user,
	}));

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
			<div className="header">
				<h1>Organization</h1>
				<div className="add-team-container">
					<button>Create a Team</button>
				</div>
				<h2>Employees {`(${EmployeeCount})`}</h2>
			</div>

			<div className="employee-filter-container">
				<h3>Filter:</h3>
				<button className="btn-filter">Employees</button>
				<button className="btn-filter">Teams</button>
				<button className="btn-filter">Hidden</button>
				<div className="employee-search-container">
					<input
						type="text"
						id="search"
						name="search"
						placeholder="Search"
					/>
				</div>
			</div>
			<div className="select-add-members">
				<h3 className="select-all">Select All</h3>
				<h3>+ Add more members</h3>
			</div>
			<table className="employees-table">
				{employees.map(data => {
					return (
						<TeamsEmployee
							profile={data}
							data={data}
							key={data.id}
						/>
					);
				})}
			</table>
		</div>
	);
};

export default OrganizationTeams;
