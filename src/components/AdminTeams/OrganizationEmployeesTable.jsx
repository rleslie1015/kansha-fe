import React from 'react';
import OrgEmployees from './OrgEmployees';

const OrganizationEmployeesTable = ({ checked, setChecked, employees }) => {
	return (
		<table className="employees-table">
			{employees.map(data => {
				return (
					<OrgEmployees
						profile={data}
						data={data}
						key={data.id}
						checked={checked}
						setChecked={setChecked}
					/>
				);
			})}
		</table>
	);
};

export default OrganizationEmployeesTable;
