//one user account creation component
import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as CloudUpload } from '../../assets/cloud-upload.svg';

function S4BUserUpload({ user }) {
	return (
		<div className="employee-add-container">
			<h2 className="employee-upload-title">Employee information</h2>
			<form className="add-employee-form">
				<div className="name-container">
					<input
						className="formname"
						placeholder="First Name"></input>
					<input className="formname" placeholder="Last Name"></input>
				</div>

				<input
					className="jobtitle-input"
					placeholder="Job Title"></input>
				<input placeholder="Email"></input>
				<div className="employee-image-upload">
					<p>
						Upload profile image <span>(optional)</span>
					</p>
					<CloudUpload />
				</div>
				<button>Add more</button>
			</form>

			<Link to="/onboarding/step-5">
				<button>Next</button>
			</Link>

			<div className="step-p-container">
				<span className="previousarrow">
					<i class="fas fa-arrow-left" />
					<Link to="/onboarding/step-4">
						<p>Previous step</p>
					</Link>
				</span>
			</div>
			<p>Continue later</p>
		</div>
	);
}
export default S4BUserUpload;
