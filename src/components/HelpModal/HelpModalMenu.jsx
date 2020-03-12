import React from 'react';

// Icon imports
import { ReactComponent as TeamIcon } from '../../assets/HelpModalImgs/Teams.svg';
import { ReactComponent as BadgeIcon } from '../../assets/HelpModalImgs/Badges.svg';
import { ReactComponent as RecogIcon } from '../../assets/HelpModalImgs/Message_bubble.svg';
import { ReactComponent as ReportsIcon } from '../../assets/HelpModalImgs/Analytics.svg';

const HelpModalMenu = ({ setTitle, setContent }) => {
	const titleArr = [
		'Creating Teams',
		'The badges',
		'Sending recognitions',
		'Analytics',
	];

	const titleContentArr = [
		'Get started by creating teams! From 1 to 100, you can create unique team names, assign a manager, and monitor their recognition feeds! It’s as simple as selecting the team members, entering a team name and clicking a button! ',
		'Badges are easily accessible for you to add to any recognition! Simply create your message and add one of our stock badges to your message!',
		'Send recognitions instantly! Simply click on a member’s name anywhere it appears or visit your workspace. Feel like having a little fun? Add one of our colorful stock badges for more impact!',
		'As soon as your members are added and begin sending recognitions, a reports overview is available right from your dashboard! See recent activity results for the week, month and year in one easy glance, or visit reports for a larger more detailed view!',
	];

	return (
		<div className="modal-menu-container">
			<div
				onClick={() => {
					setTitle(titleArr[0]);
					setContent(titleContentArr[0]);
				}}
				className="modal-div">
				<TeamIcon />
				<h1>Create Teams</h1>
			</div>
			<div
				onClick={() => {
					setTitle(titleArr[1]);
					setContent(titleContentArr[1]);
				}}
				className="modal-div">
				<BadgeIcon />
				<h1>Use Badges</h1>
			</div>
			<div
				onClick={() => {
					setTitle(titleArr[2]);
					setContent(titleContentArr[2]);
				}}
				className="modal-div">
				<RecogIcon />
				<h1>Send Recognitions</h1>
			</div>
			<div
				onClick={() => {
					setTitle(titleArr[3]);
					setContent(titleContentArr[3]);
				}}
				className="modal-div">
				<ReportsIcon />
				<h1>View Analytics</h1>
			</div>
		</div>
	);
};

export default HelpModalMenu;
