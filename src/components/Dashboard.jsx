import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SideBar from './SideBar';
import Modal from './Modal';
import HelpModal from './HelpModal/HelpModal';
import FeedSideBar from './FeedSideBar';

const Dashboard = ({ children }) => {
	const { profile } = useSelector(({ user }) => ({
		...user,
	}));

	const [helpModal, setHelpModal] = useState(false);
	const [title, setTitle] = useState(`Welcome, ${profile.first_name}!`);
	const [content, setContent] = useState(
		'We are excited that you are adding Kansha to your employee recognition program! We’ve included some helpful tips to get you started but you can explore on your own. Once you’ve begun creating teams and budgets your dashboard will conveniently provide an overview for you upon logging in. If you need help later on, you can find common answers in the help menu!',
	);

	let location = useLocation();

	let history = useHistory();

	useEffect(() => {
		if (location.search.match('help')) {
			setHelpModal(true);
			history.push(location.pathname);
		}
	}, [location, history]);

	return (
		<>
			<SideBar />
			<FeedSideBar />
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
