import React from 'react';
import Reports from './Reports';
import FeedSideBar from '../FeedSideBar';

const AdminDashboard = () => {
	return (
		<>
			<div className="dashboard-layout">
				<div className="admin-dashboard">
					<h1>Overview</h1>
					<Reports />
				</div>
				{/* <FeedSideBar /> */}
			</div>
		</>
	);
};

export default AdminDashboard;
