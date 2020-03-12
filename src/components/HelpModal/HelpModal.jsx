import React from 'react';
import HelpModalMenu from './HelpModalMenu';
import { Link } from 'react-router-dom';

const HelpModal = ({ title, content, setTitle, setContent, setHelpModal }) => {
	return (
		<div className="help-modal-container">
			<HelpModalMenu setTitle={setTitle} setContent={setContent} />
			{/* <Link
				className="modal-dash-link"
				onClick={() => setHelpModal(false)}
				to="/dashboard">
				Take me to my dashboard
			</Link> */}
			<div className="help-modal-content">
				<h1>{title}</h1>
				<p>{content}</p>
			</div>
		</div>
	);
};

export default HelpModal;
