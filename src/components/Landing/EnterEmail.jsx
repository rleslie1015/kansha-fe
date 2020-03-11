import React from 'react';
import Auth from '../../utils/auth';
const auth = new Auth();
export default function EnterEmail() {
	return (
		<div className="container-enter-email">
			<button className="btn-get-started" onClick={auth.login}>
				Get Started
			</button>
		</div>
	);
}
