import React from 'react';

import Teams from './Teams';
import Reports from './Reports';
import Activity from './Activity';

const AdminDashboard = () => {
	return (
		<div className="admin-dashboard">
			<div className="reports">
				<Reports />
			</div>
		</div>
	);
};

export default AdminDashboard;
