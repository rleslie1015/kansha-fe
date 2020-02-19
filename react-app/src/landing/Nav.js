/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Auth from '../utils/auth';

const auth = new Auth();

export default function Nav() {
	return (
		<nav className="nav">
			<a href="#">Learn More</a>
			<a href="#">Our Team</a>
			<a href="#">Get Started</a>
		</nav>
	);
}
