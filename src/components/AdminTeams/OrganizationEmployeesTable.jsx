import React from 'react';
import OrgEmployees from './OrgEmployees';

const OrganizationEmployeesTable = ({
	employees,
	empButton,
	addTeamMember,
}) => {
	return (
		<table className="employees-table">
			<tbody>
				{employees.map(data => {
					return (
						<OrgEmployees
							id={data.id}
							employee={data}
							key={data.id}
							empButton={empButton}
							addTeamMember={addTeamMember}
						/>
					);
				})}
			</tbody>
		</table>
	);
};

export default OrganizationEmployeesTable;
