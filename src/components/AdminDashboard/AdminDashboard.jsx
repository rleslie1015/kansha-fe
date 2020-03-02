import React from 'react';

import Footer from '../Landing/Footer';
import Header from '../Landing/Header';
import SideBar from '../SideBar';
import Teams from './Teams';
import Reports from './Reports';
import Activity from './Activity';

const AdminDashboard = () => {
	return (
		<div className="admin-dashboard">
			<div>
				<Teams />
				<Reports />
			</div>
			<Activity />
		</div>
	);
};

export default AdminDashboard;
