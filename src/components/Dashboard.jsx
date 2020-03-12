import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import SideBar from './SideBar';
import Modal from './Modal';
import HelpModal from './HelpModal/HelpModal';

const Dashboard = ({ children }) => {
	const [helpModal, setHelpModal] = useState(false);
	const [title, setTitle] = useState('Welcome, Samantha!');
	const [content, setContent] = useState(
		'We are excited that you are adding Kansha to your employee recognition program! We’ve included some helpful tips to get you started but you can explore on your own. Once you’ve begun creating teams and budgets your dashboard will conveniently provide an overview for you upon logging in. If you need help later on, you can find common answers in the help menu!',
	);

	let location = useLocation();

	useEffect(() => {
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
					<HelpModal
						title={title}
						content={content}
						setTitle={setTitle}
						setContent={setContent}
						setHelpModal={setHelpModal}
					/>
				</Modal>
			)}
		</>
	);
};

export default Dashboard;
