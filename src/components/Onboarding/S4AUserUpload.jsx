//toggle rendering between one user account creation and bulk user account creation
import React from 'react';

import S4BUserUpload from '../Onboarding/S4BUserUpload';
import S4CUserUpload from '../Onboarding/S4CUserUpload';
import { Link, useHistory } from 'react-router-dom';
import onboardingPic from '../../assets/onboardingPic.png';
import ProgressBar from './ProgressBar';

function S4AUserUpload() {
	let history = useHistory();

	const handleClick = () => {
		history.push('/onboarding/step-5');
	};

	const handlePrevious = () => {
		history.push('/onboarding/step-3');
	};

	return (
		<>
			<div>
				<h1>Add Employees</h1>
				<div>
					<h6>Would you like to add employees now?</h6>
					{/* <div>
						<input type="radio" id="yes" name="drone" value="yes" />
						<label for="yes">yes</label>
					</div>

					<div>
						<input type="radio" id="no" name="drone" value="no" />
						<label for="no">no</label> */}
					{/* </div> */}
				</div>
				<div>
					<h6>How would you like to add them?</h6>
					<div>
						<input
							type="radio"
							id="manual"
							name="drone2"
							value="manual"
						/>
						<label for="manual">
							Manually enter employees (not recommended for over
							10 employees)
						</label>
					</div>

					<div>
						<input
							type="radio"
							id="bulk"
							name="drone2"
							value="bulk"
						/>
						<label for="bulk">
							Bulk Upload (click here to view a sample format for
							you spreadsheet or csv)
						</label>
					</div>
				</div>
			</div>

			{/* <S4BUserUpload />*/}
			{/* <S4CUserUpload /> */}

			<button onClick={handleClick}>Next</button>

			<div className="step-p-container">
				<span className="previousarrow">
					<i class="fas fa-arrow-left" />
					<button onClick={handlePrevious}>Previous step</button>
				</span>
			</div>
			<p>Continue later</p>
		</>
	);
}

export default S4AUserUpload;
