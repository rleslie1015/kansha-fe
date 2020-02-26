import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const auth = new Auth();

export default function Footer() {
	return (
		<footer className="landing-footer-container">
			<div>
				<section>
					<section>
						<Logo />
						<h1>Kansha</h1>
					</section>
					<p>© Kansha. 2020. We love our users!</p>
				</section>

				<nav>
					<span onClick={auth.login} role="link">
						Login
					</span>
					<Link to="/">Team</Link>
					<Link to="/">Contact</Link>
				</nav>
			</div>
		</footer>
	);
}
