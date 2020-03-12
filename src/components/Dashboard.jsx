import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import SideBar from './SideBar';
import Modal from './Modal';
import HelpModal from './HelpModal/HelpModal';

const Dashboard = ({ children }) => {
	const [helpModal, setHelpModal] = useState(false);
	// const [title, setTitle] = useState('');
	// const [content, setContent] = useState('');

	let title = 'Creating Teams';
	let content =
		'Get started by creating teams! From 1 to 100, you can create unique team names, assign a manager, and monitor their recognition feeds! It’s as simple as selecting the team members, entering a team name and clicking a button!';

	let location = useLocation();

	useEffect(() => {
		console.log(location);
		if (location.search.match('help')) {
			setHelpModal(true);
		}
	}, [location]);

	return (
		<>
			<SideBar />
			{children}
			{helpModal && (
				<Modal close={setHelpModal}>
					<HelpModal title={title} content={content} />
				</Modal>
			)}
		</>
	);
};

export default Dashboard;
