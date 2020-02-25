import React from 'react';
import { Link } from 'react-router-dom';
import onboardingPic from '../../assets/onboardingPic.png';

function S6AllDone() {
	return (
		<>
			<div className="s1-parent-container">
				<div className="s1-img">
					<img src={onboardingPic} />
				</div>
				<div className="s1-getting-started">
					<h1>All done!</h1>
					<h5>
						To make the most of your experience we recommend taking
						a quick tour of your dashboard and finish organizing
						your teams.
					</h5>
				</div>
			</div>
			<div className="button-container">
				<button>Take the tour</button>
				<button>Let me explore</button>
			</div>
			<div className="step-p-container">
				<span className="previousarrow">
					<i class="fas fa-arrow-left" />
					<Link to="/onboarding/step-5">
						<p>Previous step</p>
					</Link>
				</span>
			</div>
		</>
	);
}

export default S6AllDone;
