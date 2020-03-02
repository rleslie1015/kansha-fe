import React from 'react';

export default function EnterEmail() {
	return (
		<form className="container-enter-email">
			<label htmlFor="landing-email">Enter your work email address</label>
			<input
				placeholder="Enter your work email address"
				id="landing-email"
			/>
			<button>Get Started</button>
		</form>
	);
}
