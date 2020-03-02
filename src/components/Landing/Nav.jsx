/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Auth from '../../utils/auth';
import HamburgerMenu from './HamburgerMenu';
import { ReactComponent as Logo } from '../../assets/logo.svg';
const auth = new Auth();

export default function Nav() {
	const [open, setOpen] = React.useState(false);
	return (
		<nav className="nav">
			<a href="#" onClick={auth.login}>
				Login
			</a>
			<section
				className="nav-hamburger-landing"
				onClick={() => setOpen(!open)}>
				<HamburgerMenu open={open} setOpen={setOpen} />
			</section>
			<section className={`${open ? 'side-nav-landing' : 'hidden'}`}>
				<div className="title-nav">
					<Logo />
					<h3>Kansha</h3>
				</div>
				<nav>
					<a href="#" onClick={auth.login}>
						Team
					</a>
					<a href="#" onClick={auth.login}>
						Contact
					</a>
					<a onClick={auth.login} className="login" href="#">
						Login
					</a>
				</nav>
			</section>
		</nav>
	);
}
