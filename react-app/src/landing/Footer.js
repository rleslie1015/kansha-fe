import React from 'react';
import Auth from '../utils/auth';

const auth = new Auth();

export default function Footer() {
	return (
		<>
			<div className="root">
				<div>
					<h4 className="kansha">Kansha</h4>
					<h5 className="order">Lambda Labs Project</h5>
				</div>
				<div className="nav">
					<a className="link" href="#our_team">
						Our Team
					</a>
					<a className="link" href="#features">
						Features
					</a>
					<a className="link" href="#" onClick={auth.login}>
						Get Started
					</a>
				</div>
			</div>
			<small className="small">© All Rights Reserved 2019 Kansha</small>
		</>
	);
}
