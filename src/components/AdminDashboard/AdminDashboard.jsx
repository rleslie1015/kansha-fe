import React from 'react';

import Teams from './Teams';
import Reports from './Reports';
import Activity from './Activity';

const AdminDashboard = () => {
	return (
		<div className="admin-dashboard">
			<div className="teams-reports">
				<Teams />
				<Reports />
			</div>
			<div className="activity-container">
				<Activity />
			</div>
		</div>
	);
};

export default AdminDashboard;
