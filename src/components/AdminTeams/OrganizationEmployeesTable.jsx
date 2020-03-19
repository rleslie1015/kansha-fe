import React from 'react';
import OrgEmployees from './OrgEmployees';

const OrganizationEmployeesTable = ({
	checked,
	setChecked,
	employees,
	empButton,
	teamMemberArray,
	setTeamMemberArray,
	setPage,
	setLimit,
	limit,
	page,
}) => {
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
						empButton={empButton}
						employees={employees}
						teamMemberArray={teamMemberArray}
						setTeamMemberArray={setTeamMemberArray}
					/>
				);
			})}
		</table>
	);
};

export default OrganizationEmployeesTable;
