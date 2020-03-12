import React from 'react';

const HelpModal = ({ title, content }) => {
	return (
		<div className="help-modal-container">
			<h1>{title}</h1>
			<p>{content}</p>
		</div>
	);
};

export default HelpModal;
