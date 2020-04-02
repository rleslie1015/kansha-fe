import React from 'react';
import OrgEmployees from './OrgEmployees';

const OrganizationEmployeesTable = ({
	employees,
	empButton,
	addTeamMember,
	setEmployees,
}) => {
	return (
		<table className="employees-table">
			<tbody>
				{employees.map(data => {
					return (
						<OrgEmployees
							key={data.id}
							id={data.id}
							employee={data}
							empButton={empButton}
							addTeamMember={addTeamMember}
							setEmployees={setEmployees}
							onDashboard={false}
						/>
					);
				})}
			</tbody>
		</table>
	);
};

export default OrganizationEmployeesTable;
