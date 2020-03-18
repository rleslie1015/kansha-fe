import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import OrganizationEmployeesTable from './OrganizationEmployeesTable';
import OrganizationTeams from './OrganizationTeams';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const OrganizationHome = () => {
	const titleArr = ['Employees', 'Teams'];

	const [employees, setEmployees] = useState([]);
	const [filter, setFilter] = useState('');
	const [empCount, setEmpCount] = useState(null);
	const [checked, setChecked] = useState(false);
	const [empButton, setEmpButton] = useState(true);
	const [title, setTitle] = useState(titleArr[0]);

	useEffect(() => {
		axiosWithAuth()
			.get(`/employees/organizations?search=${filter}&limit=${empCount}`)
			.then(res => {
				console.log(res);
				setEmployees(res.data.employees);
				setEmpCount(res.data.count);
			});
	}, [filter, empCount]);

	const history = useHistory();

	const handleAddUserClick = () => {
		history.push('/add-user');
	};

	employees.sort((a, b) => a.first_name.localeCompare(b.first_name));

	// console.log(employees, 'Employees Array');

	let table;
	if (empButton) {
		table = (
			<OrganizationEmployeesTable
				employees={employees}
				checked={checked}
			/>
		);
	} else {
		table = <OrganizationTeams />;
	}

	return (
		<div className="teams-dashboard">
			<div className="header">
				<h1>Organization</h1>
				<div className="add-team-container">
					<button>Create a Team</button>
				</div>
				<h2>
					{title} {`(${empCount})`}
				</h2>
			</div>

			<div className="employee-filter-container">
				<h3>Filter:</h3>
				<button
					onClick={() => {
						setEmpButton(true);
						setTitle(titleArr[0]);
					}}
					className="btn-filter">
					Employees
				</button>
				<button
					onClick={() => {
						setEmpButton(false);
						setTitle(titleArr[1]);
					}}
					className="btn-filter">
					Teams
				</button>
				<button className="btn-filter">Hidden</button>
				<div className="employee-search-container">
					<input
						value={filter}
						onChange={event => setFilter(event.target.value)}
						type="text"
						id="search"
						name="search"
						placeholder="Search"
					/>
				</div>
			</div>
			<div className="select-add-members">
				<h3 className="select-all">Select All</h3>
				<h3 onClick={handleAddUserClick}>+ Add more members</h3>
			</div>
			{table}
		</div>
	);
};

export default OrganizationHome;
