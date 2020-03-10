import React from 'react';
import Reports from './Reports';
import Activity from './Activity';
import FeedSideBar from '../FeedSideBar';


const AdminDashboard = () => {
	return (
		<>
			<div className="dashboard-layout">
				<div className="admin-dashboard">
					<div className="reports">
						<Reports />
					</div>
				</div>
				<FeedSideBar />
			</div>
		</>
	);
};

export default AdminDashboard;
