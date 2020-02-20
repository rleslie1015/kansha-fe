import React from 'react';
import ctaLogo from '../assets/logo38.png';
import { Link } from 'react-router-dom';
export default function Main() {
	return (
		<div className="main-container-landing">
			<div className="main-cta">
				<h3 className="header-main-cta">
					Workplace Recognition Like Never Before
				</h3>
				<p className="text-main-cta">
					Making it easy to recognize your hardworking peers with
					rewards and personalized messages.
				</p>
				<Link to="/onboarding">
					<button className="btn btn-get-started">Get Started</button>
				</Link>
				<button className="btn btn-learn-more">Learn More</button>
			</div>
			<div className="main-img">
				<img src={ctaLogo} alt="cta-image" />
			</div>
		</div>
	);
}
