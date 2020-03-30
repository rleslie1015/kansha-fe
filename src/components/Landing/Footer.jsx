import React from 'react';
import Auth from '../../utils/auth';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import {
	FaInstagram,
	FaTwitter,
	FaFacebookF,
	FaLinkedinIn,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
				</section>
				<ul>
					<li>
						<a href="#insta">
							<span className="hidden">Instagram</span>
							<FaInstagram />
						</a>
					</li>
					<li>
						<a href="#twitter">
							<span className="hidden">Twitter</span>
							<FaTwitter />
						</a>
					</li>
					<li>
						<a href="#fb">
							<span className="hidden">Facebook</span>
							<FaFacebookF />
						</a>
					</li>
					<li>
						<a href="#li">
							<span className="hidden">LinkedIn</span>
							<FaLinkedinIn />
						</a>
					</li>
				</ul>

				<nav>
					<span onClick={auth.login} role="link">
						Login
					</span>
					<Link to="/aboutus">Team</Link>
					<span onClick={auth.login}>Contact</span>
				</nav>
				<p>© Kansha. {new Date().getFullYear()}. We love our users!</p>
			</div>
		</footer>
	);
}
