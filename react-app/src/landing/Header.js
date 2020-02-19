import React from 'react';
import hero from './images/hero-image.png';
import Nav from './Nav';
import Auth from '../utils/auth';
import Logo from '../assets/logo39.png';

const auth = new Auth();

export default function Header() {
	return (
		<header>
			<div className="nav-container">
				<img src={Logo} alt="kansha-logo" />
				<Nav />
			</div>
		</header>
	);
}
