import React from 'react';
import OrgEmployees from './OrgEmployees';

const OrganizationEmployeesTable = ({
	employees,
	empButton,
	addTeamMember,
}) => {
	return (
		<table className="employees-table">
			{employees.map(data => {
				return (
					<OrgEmployees
						profile={data}
						data={data}
						key={data.id}
						empButton={empButton}
						addTeamMember={addTeamMember}
					/>
				);
			})}
		</table>
	);
};

export default OrganizationEmployeesTable;
