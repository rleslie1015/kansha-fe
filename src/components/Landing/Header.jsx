import React from 'react';
import Nav from './Nav';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export default function Header() {
	return (
		<header>
			<div>
				<section>
					<Logo />
					<h1>Kansha</h1>
				</section>
				<Nav />
			</div>
		</header>
	);
}
