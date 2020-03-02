import React from 'react';
import Auth from '../../utils/auth';
const auth = new Auth();
export default function EnterEmail() {
	return (
		<form className="container-enter-email">
			<label htmlFor="landing-email">Enter your work email address</label>
			<input
				placeholder="Enter your work email address"
				id="landing-email"
			/>
			<button onClick={auth.login}>Get Started</button>
		</form>
	);
}
