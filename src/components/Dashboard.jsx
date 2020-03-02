import React from 'react';

import SideBar from './SideBar';

const Dashboard = ({ children }) => {
	return (
		<>
			<SideBar />
			{children}
		</>
	);
};

export default Dashboard;
