// import React from 'react';

// // import S4BUserUpload from '../Onboarding/S4BUserUpload';
// // import S4CUserUpload from '../Onboarding/S4CUserUpload';

// import { useHistory } from 'react-router-dom';

// function S4AUserUpload() {
// 	let history = useHistory();

// 	const handleClick = () => {
// 		history.push('/onboarding/step-5');
// 	};

// 	const handlePrevious = () => {
// 		history.push('/onboarding/step-3');
// 	};

// 	return (
// 		<>
// 			<div className="admin-user-add-container">
// 				<h2 className="user-upload-title">Add Employees</h2>
// 				<div className="admin-add-employee-form">
// 					<div className="upload-now-question">
// 						<h6>Would you like to add employees now?</h6>
// 						<div>
// 							<input
// 								type="radio"
// 								id="yes"
// 								name="drone"
// 								value="yes"
// 							/>
// 							<label for="yes">Yes</label>
// 						</div>

// 						<div>
// 							<input
// 								type="radio"
// 								id="no"
// 								name="drone"
// 								value="no"
// 							/>
// 							<label for="no">No</label>
// 						</div>
// 					</div>
// 					<div className="how-upload-question">
// 						<h6>How would you like to add them?</h6>
// 						<div>
// 							<input
// 								type="radio"
// 								id="manual"
// 								name="drone2"
// 								value="manual"
// 							/>
// 							<label for="manual">
// 								Manually enter employees (not recommended for
// 								over 10 employees)
// 							</label>
// 						</div>

// 						<div>
// 							<input
// 								type="radio"
// 								id="bulk"
// 								name="drone2"
// 								value="bulk"
// 							/>
// 							<label for="bulk">
// 								Bulk Upload (click here to view a sample format
// 								for you spreadsheet or csv)
// 							</label>
// 						</div>
// 					</div>
// 				</div>
// 			</div>

// 			{/* <S4BUserUpload />*/}
// 			{/* <S4CUserUpload /> */}

// 			<button onClick={handleClick}>Next</button>

// 			<div className="step-p-container">
// 				<span className="previousarrow">
// 					<i className="fas fa-arrow-left" />
// 					<div onClick={handlePrevious}>
// 						<p> Previous step</p>
// 					</div>
// 				</span>
// 			</div>
// 			<p>Continue later</p>
// 		</>
// 	);
// }

// export default S4AUserUpload;
