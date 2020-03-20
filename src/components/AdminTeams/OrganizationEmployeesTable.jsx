import React from 'react';
import OrgEmployees from './OrgEmployees';

const OrganizationEmployeesTable = ({
	employees,
	empButton,
	teamMemberArray,
	setTeamMemberArray,
	checked,
	setChecked,
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
						employees={employees}
						teamMemberArray={teamMemberArray}
						setTeamMemberArray={setTeamMemberArray}
						checked={checked}
						setChecked={setChecked}
						addTeamMember={addTeamMember}
					/>
				);
			})}
		</table>
	);
};

export default OrganizationEmployeesTable;
