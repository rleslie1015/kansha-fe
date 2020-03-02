/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Auth from '../../utils/auth';

const auth = new Auth();

export default function Nav() {
	const [clicked, setClicked] = useState(false);

	return (
		<nav className="nav">
			<a href="#" onClick={auth.login}>
				Login
			</a>
			<button
				className={`hamburger hamburger--collapse ${clicked &&
					'is-active'}`}
				type="button"
				onClick={() => setClicked(!clicked)}>
				<span className="hamburger-box" role="presentation">
					<span className="hamburger-inner" role="presentation" />
				</span>
			</button>
		</nav>
	);
}
