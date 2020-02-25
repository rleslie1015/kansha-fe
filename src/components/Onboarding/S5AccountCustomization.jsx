import React from 'react';
import { Link } from 'react-router-dom';
import onboardingPic from '../../assets/onboardingPic.png';

function S5AccountCustomization() {
	//onclick for i tag to initiate logo upload
	//onclick for color-picker divs to select color

	return (
		<div>
			<div className="s1-parent-container">
				<div className="s1-img">
					<img src={onboardingPic} />
				</div>
				<div className="s1-getting-started">
					<h1>Make it yours!</h1>
					<h6 id="upload-logo">
						Upload your company logo:
						<span>
							<i class="fas fa-cloud-upload-alt"></i>
						</span>
					</h6>
					<h6 className="choose-color">Choose your primary color:</h6>
					<div className="color-picker">
						<div id="black" />
						<div id="red" />
						<div id="blue" />
						<div id="purple" />
						<div id="grey" />
					</div>
					<Link to="/onboarding/step-6">
						<button>Next</button>
					</Link>
				</div>
			</div>
			<div className="step-p-container">
				<span className="previousarrow">
					<i class="fas fa-arrow-left" />
					<Link to="/onboarding/step-4">
						<p>Previous step</p>
					</Link>
				</span>

				<p>Continue later</p>
			</div>
		</div>
	);
}

export default S5AccountCustomization;
