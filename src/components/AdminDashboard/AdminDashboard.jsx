import React from 'react';
import Reports from './Reports';

const AdminDashboard = () => {
	return (
		<>
			<div className="dashboard-layout">
				<div className="admin-dashboard">
					<h1>Overview</h1>
					<Reports />
				</div>
			</div>
		</>
	);
};

export default AdminDashboard;
