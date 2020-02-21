import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo39.png';

const auth = new Auth();

export default function Footer() {
	return (
		<div className="landing-footer-container">
			<footer className="landing-footer">
				<img className="kansha-logo" src={Logo} alt="kansha-logo" />

				<nav>
					<a href="#">Login</a>
					<a href="#">Team</a>
					<a href="#">Contact</a>
				</nav>
			</footer>
			<div className="landing-footer-copyright">
				© All Rights Reserved 2019 Kansha
			</div>
		</div>
	);
}
