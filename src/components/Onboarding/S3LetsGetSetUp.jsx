import React from 'react';
import { Link } from 'react-router-dom';
import onboardingPic from '../../assets/onboardingPic.png';
import ProgressBar from './ProgressBar';

function S3LetsGetSetUp() {
	return (
		<div>
			<h1>Let's Get Set Up</h1>

			<form>
				<div>
					<h6>What's your organization name?</h6>
					<input type="text" placeholder="organization name" />
					<h6>How big is your organization?</h6>
					<div>
						<input
							type="radio"
							id="lessthan20"
							name="drone"
							value="lessthan20"
							checked
						/>
						<label for="lessthan20">Less than 20</label>
					</div>

					<div>
						<input
							type="radio"
							id="21100"
							name="drone"
							value="21100"
						/>
						<label for="21100">21-100</label>
					</div>

					<div>
						<input
							type="radio"
							id="over100"
							name="drone"
							value="over100"
						/>
						<label for="over100">Over 100</label>
					</div>
					<select>
						<option>Accounting</option>
						<option>Advertising/PR</option>
						<option>Aerospace</option>
						<option>Agriculture</option>
						<option>Architecture</option>
						<option>Airlines</option>
						<option>Automotive</option>
						<option>Banking/Finance</option>
						<option>Business (general)</option>
						<option>Communications</option>
						<option>Education</option>
						<option>Entertainment</option>
						<option>Hospitality</option>
						<option>IT/Computers/Technology</option>
						<option>Legal</option>
						<option>Medical/Health Services</option>
					</select>
				</div>
			</form>
			<Link to="/onboarding/step-4">
				<button>Next</button>
			</Link>

			<div className="step-p-container">
				<span className="previousarrow">
					<i class="fas fa-arrow-left" />
					<Link to="/onboarding/step-2">
						<p>Previous step</p>
					</Link>
				</span>

				<p>Continue later</p>
			</div>
		</div>
	);
}

export default S3LetsGetSetUp;
