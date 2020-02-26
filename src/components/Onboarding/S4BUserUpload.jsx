import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { axiosWithAuth } from '../../utils/axiosWithAuth';

//post to /employees endpoint to create new employee

import { ReactComponent as CloudUpload } from '../../assets/cloud-upload.svg';
import { ReactComponent as AddMoreImg } from '../../assets/ic_outline-person-add.svg';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function S4BUserUpload({ user }) {

	const [employee, setEmployee] = useState({
		first_name: '',
		last_name: '',
		email: '',
		job_title: '',
		profile_picture: '',
		org_id: user.org_id,
		user_type: '',
		org_name: user.org_name,
		company_size: user.company_size,
		industry: user.industry,
		logo_url: user.logo_url,
		primary_color: user.primary_color,
	});

	const [employees, setEmployees] = useState([]);

	const handleSubmit = e => {
		e.preventDefault();
		axiosWithAuth()
			.post('/employees', employee)
			.then(res => {

				console.log(res);
				// setEmployees( [...employees, employee]);
			})
			.catch(err => console.log(err));
	}

	const handleEmployee = e => {
		setEmployee({...employee, [e.target.name]: e.target.value})
	}


	return (
		<div className="employee-add-container">
			<h2 className="employee-upload-title">Employee information</h2>
			<form id='add-employee-form' name='add-employee-form'className="add-employee-form">
				<div className="name-container">
					<input
						className="formname"
						placeholder="First Name"
						name="first_name"
						value={employee.first_name}
						onChange={handleEmployee}></input>
					<input 
					className="formname" 
					placeholder="Last Name"
					name="last_name"
					value={employee.last_name}
					onChange={handleEmployee}></input>
				</div>

				<input
					className="jobtitle-input"
					placeholder="Job Title"
					name="job_title"
					value={employee.job_title}
					onChange={handleEmployee}></input>
				<input 
					placeholder="Email"
					name="email"
					value={employee.email}
					onChange={handleEmployee}></input>
				<div className="employee-image-upload">
					<p>
						Upload profile image <span>(optional)</span>
					</p>
					<CloudUpload />
				</div>
				<div type='submit' onClick={handleSubmit} className="add-another-employee"><AddMoreImg/>Add more</div>
				
				<div className="success-employee-add">
					{employees.length !== 0 &&
						<div>
							<h6>Added Successfully!</h6>
							{employees.map(person => (
								<p>{person.first_name} {person.last_name} {person.email}</p>
							))}
						</div>}
				</div>
				
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
