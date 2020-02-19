import React from 'react';
import ctaLogo from '../assets/logo38.png';

export default function Main() {
	return (
		<div className="main-container">
			<div className="main-cta">
				<h3>Workplace Recognition Like Never Before</h3>
				<p>
					Making it easy to recognize your hardworking peers with
					rewards and personalized messages.
				</p>
				<button className="btn btn-get-started">Get Started</button>
				<button className="btn btn-learn-more">Learn More</button>
			</div>
			<div className="main-img">
				<img src={ctaLogo} alt="cta-image" />
			</div>
		</div>
	);
}
