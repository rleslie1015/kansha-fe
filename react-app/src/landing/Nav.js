/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';

const auth = new Auth();

export default function Nav() {
	return (
		<nav className="nav">
			<a href="#">Learn More</a>
			<a href="#">Our Team</a>
			<a href="#" onClick={auth.login}>
				Log in
			</a>

			<Link to="/onboarding">Get Started</Link>
		</nav>
	);
}
