//toggle rendering between one user account creation and bulk user account creation
import React from 'react';

import S4BUserUpload from '../Onboarding/S4BUserUpload';
import S4CUserUpload from '../Onboarding/S4CUserUpload';
import { Link } from 'react-router-dom';
<<<<<<< HEAD

=======
import onboardingPic from '../../assets/onboardingPic.png';
>>>>>>> 20e3abbc88315de85828175cf0f3cd36a316cfd1

function S4AUserUpload() {
	return (
		<>
			<div className="admin-user-add-container">
				<h2 className="user-upload-title">Add Employees</h2>
				<div className="admin-add-employee-form">
				<div className="upload-now-question">
					<h6>Would you like to add employees now?</h6>
					<div>
						<input 
							type="radio" 
							id="yes" 
							name="drone" 
							value="yes" />
						<label for="yes">Yes</label>
					</div>

					<div>
						<input 
							type="radio" 
							id="no" 
							name="drone" 
							value="no" 
						/>
						<label for="no">No</label>
					</div>
				</div>
				<div className="how-upload-question">
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
		</div>

			{/* <S4BUserUpload />*/}
			{/* <S4CUserUpload /> */}
			<Link to="/onboarding/step-5">
				<button>Next</button>
			</Link>
			<div className="step-p-container">
				<span className="previousarrow">
					<i class="fas fa-arrow-left" />
					<Link to="/onboarding/step-3">
						<p>Previous step</p>
					</Link>
				</span>
			</div>
			<p>Continue later</p>
		</>
	);
}

export default S4AUserUpload;
