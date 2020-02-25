import React from 'react';
import { Link } from 'react-router-dom';

import onboardingPic from '../../assets/onboardingPic.png';

function S1GetStarted() {
	return (
		<div>
			<div className="s1-parent-container">
				<div className="s1-img">
					<img src={onboardingPic} />
				</div>
				<div className="s1-getting-started">
					<h1>Getting Started</h1>
					<h5>
						You're only a few steps away from getting started on
						Kansha
					</h5>
					<div className="list-container">
						<p className="styled-li">
							<div className="numbered-list">1</div>
							Enter your company information
						</p>
						<p className="styled-li">
							<div className="numbered-list">2</div>Add your
							employees
						</p>
						<p className="styled-li">
							<div className="numbered-list">3</div>Personalize
							your experience
						</p>
						<p className="styled-li">
							<div className="numbered-list">
								<i class="fas fa-check"></i>
							</div>
							That's it!
						</p>
					</div>
					<Link to="/onboarding/step-2">
						<button>Let's Go</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default S1GetStarted;
