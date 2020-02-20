import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
const auth = new Auth();

export default function Footer() {
	return (
		<footer className="landing-footer">
			<div className="landing-footer-section">
				<h3 className="landing-footer-title">Kansha</h3>
				<h5>Lambda Labs Project</h5>
			</div>
			<div className="landing-footer-section">
				<small className="landing-footer-copyright">
					© All Rights Reserved 2019 Kansha
				</small>
			</div>
			<nav className="landing-footer-section">
				<a href="#">Our Team</a>
				<a href="#">Features</a>
				<Link to="/onboarding">Get Started</Link>
			</nav>
		</footer>
	);
}
