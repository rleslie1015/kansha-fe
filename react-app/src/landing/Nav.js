/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, Typography, ButtonBase } from '@material-ui/core';
import logo from './images/logo.png';
import NavMenu from './NavMenu';
import Auth from '../utils/auth';
import 'typeface-montserrat';

const auth = new Auth();

export default function Links() {
	return (
		<nav>
			<a href="#">
				<div>
					<img alt="kansha" src={logo} />
				</div>
			</a>
			{/*hamburger menu went here*/}
			<div>
				<a href="#features">Learn More</a>
				<a href="#our_team">Our Team</a>
				<a href="#" onClick={auth.login}>
					Get Started
				</a>
			</div>
		</nav>
	);
}
