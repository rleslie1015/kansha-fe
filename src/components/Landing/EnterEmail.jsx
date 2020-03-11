import React from 'react';
import Auth from '../../utils/auth';
const auth = new Auth();
export default function EnterEmail() {
	return (
		<form className="container-enter-email">
			<span className="btn-get-started" onClick={auth.login}>
				Get Started
			</span>
		</form>
	);
}
