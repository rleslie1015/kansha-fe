import React from 'react';

export default function EnterEmail() {
	return (
		<div className="container-enter-email">
			<div className="enter-email">
				<form className="email-form">
					<input
						className="email-input"
						placeholder="Enter your work email address here"></input>
					<button className="btn-get-started">Get Started</button>
				</form>
			</div>
		</div>
	);
}
