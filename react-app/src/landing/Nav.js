/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import HamburgerMenu from '../assets/open-menu.png';

const auth = new Auth();

export default function Nav() {
	return (
		<nav className="nav">
			<a href="#" onClick={auth.login}>
				Login
			</a>
			<img className="nav-logo" src={HamburgerMenu} width="30" />
		</nav>
	);
}
