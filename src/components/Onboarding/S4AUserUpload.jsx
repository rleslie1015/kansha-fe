import React, { useState } from 'react';

// // import S4BUserUpload from '../Onboarding/S4BUserUpload';
// // import S4CUserUpload from '../Onboarding/S4CUserUpload';

import { useHistory } from 'react-router-dom';

function S4AUserUpload() {
	const [uploadNow, setUploadNow] = useState('');
	const [uploadMethod, setUploadMethod] = useState('');

	let history = useHistory();

	const handlePrevious = () => {
		history.push('/onboarding/step-2');
	};

	const handleUploadNow = e => {
		setUploadNow(e.target.value);
	};

	const handleUploadMethod = e => {
		setUploadMethod(e.target.value);
	};

	const handleClick = () => {
		if (uploadNow === 'false') {
			history.push('/onboarding/step-6');
		} else if (uploadMethod === 'manual') {
			history.push('/onboarding/step-4b');
		} else if (uploadMethod === 'bulk') {
			history.push('/onboarding/step-4c');
		} else {
			history.push('/onboarding/step-6');
		}
	};

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
								value="true"
								onChange={handleUploadNow}
							/>
							<label htmlFor="yes">Yes</label>
						</div>

						<div>
							<input
								type="radio"
								id="no"
								name="drone"
								value="false"
								onChange={handleUploadNow}
							/>
							<label htmlFor="no">No</label>
						</div>
					</div>

					{uploadNow === 'true' && (
						<div className="how-upload-question">
							<h6>How would you like to add them?</h6>
							<div>
								<input
									type="radio"
									id="manual"
									name="drone2"
									value="manual"
									onChange={handleUploadMethod}
								/>
								<label htmlFor="manual">
									Manually enter employees{' '}
									<span className="gray-details">
										(not recommended for over 10 employees)
									</span>
								</label>
							</div>

							<div>
								<input
									type="radio"
									id="bulk"
									name="drone2"
									value="bulk"
									onChange={handleUploadMethod}
								/>
								<label htmlFor="bulk">
									Bulk Upload{' '}
									<span className="gray-details">
										(click here to view a sample format for
										you spreadsheet or csv)
									</span>
								</label>
							</div>
						</div>
					)}
				</div>
			</div>

			<button onClick={handleClick}>Next</button>

			<div className="step-p-container">
				<span className="previousarrow">
					<i className="fas fa-arrow-left" />
					<div onClick={handlePrevious}>
						<p> Previous step</p>
					</div>
				</span>
			</div>
		</>
	);
}

export default S4AUserUpload;
