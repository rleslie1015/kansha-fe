import React from 'react';
import { Link } from 'react-router-dom';

function S1GetStarted() {
	return (
		<div data-test="S1Component">
			<h1>Getting Started</h1>
			<h5>You're only a few steps away from getting started on Kansha</h5>
			<ul className="list-container">
				<li className="styled-li">
					<div className="numbered-list">1</div>
					Enter your company information
				</li>
				<li className="styled-li">
					<div className="numbered-list">2</div>Add your employees
				</li>
				<li className="styled-li">
					<div className="numbered-list">3</div>
					Personalize your experience
				</li>
				<li className="styled-li">
					<div className="numbered-list">
						<i className="fas fa-check"></i>
					</div>
					That's it!
				</li>
			</ul>
			<Link to="/onboarding/step-2">
				<button data-test="S1Button">Let's Go</button>
			</Link>
		</div>
	);
}

export default S1GetStarted;
