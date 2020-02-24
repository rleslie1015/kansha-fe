import React from 'react';
import PeopleJumping from '../../assets/people-jumping.jpeg';
import { Link } from 'react-router-dom';
export default function Main() {
	return (
		<div className="main-container-landing">
			<div className="main-cta">
				<p className="header-main-cta">Workplace recognition.</p>
				<p className="header-secondary-cta">Redefined.</p>
				<p className="text-main-cta">
					Making it easy to recognize your hardworking peers with
					rewards and personalized messages.
				</p>
				<Link to="/onboarding">
					<button className="btn-get-started">Join today</button>
				</Link>
			</div>
			<div className="main-img">
				<img src={PeopleJumping} alt="cta-image" />
			</div>
		</div>
	);
}
