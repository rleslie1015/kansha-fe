import React from 'react';
import Nav from './Nav';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<div>
				{' '}
				<Link to="/">
					<section>
						<Logo />
						<h1>Kansha</h1>
					</section>
				</Link>
				<Nav />
			</div>
		</header>
	);
}
