import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import searchBar from './searchBar';





// post request to /users endpoint to create new user

function S2CreateAccount({ user, setUser, handleUser }) {
	const { register, errors, formState } = useForm({ mode: 'onChange' });

	let history = useHistory();

	async function handleSubmit() {
		try {
			const res = await axiosWithAuth().post('/users', user);
			setUser({ ...user, id: res.data[0], org_id: res.org_id });
			history.push('/onboarding/step-4');
		} catch (error) {
			console.log(error);
		}
	}

	

	return (
		<div>
			<h1>Let's get set up!</h1>
			<form className="create-account-form">
				<div className="name-container">
					<input
						className="formname"
						ref={register({
							required: true,
						})}
						placeholder="First Name"
						name="first_name"
						defaultValue={user.first_name}
						onChange={handleUser}></input>
					{errors.first_name && 'First name is required'}
					<input
						className="formname"
						ref={register({ required: true })}
						placeholder="Last Name"
						name="last_name"
						defaultValue={user.last_name}
						onChange={handleUser}></input>
					{errors.last_name && 'Last name is required'}
				</div>

				<input
					className="formname"
					ref={register({ required: true })}
					placeholder="Job Title"
					name="job_title"
					defaultValue={user.job_title}
					onChange={handleUser}></input>
				{errors.job_title && 'Job Title is required'}

				<h6>What's your organization name?</h6>
				<input
					className='orgname-input'
					placeholder="Organization Name"
					ref={register({ required: true })}
					name="org_name"
					defaultValue={user.org_name}
					onChange={handleUser}></input>
				{errors.org_name && 'Organization name is required'}

				<h6>How big is your organization?</h6>
				<div className="org-size">
				<div className='radio-div'>
					<input
						type="radio"
						ref={register({ required: true })}
						id="lessthan20"
						name="company_size"
						defaultValue="  less than 20"
						onChange={handleUser}
					/>
				</div>

				{errors.company_size && 'Company size is required'}
				<label htmlFor="lessthan20">Less than 20</label>
				<div className='radio-div'>
					<input
						type="radio"
						ref={register({ required: true })}
						id="21100"
						name="company_size"
						defaultValue="  21 to 100"
						onChange={handleUser}
					/>
					{errors.company_size && 'Company size is required'}
					<label htmlFor="21100">21 - 100</label>
				</div>

				<div className='radio-div'>
					<input
						type="radio"
						ref={register({ required: true })}
						id="over100"
						name="company_size"
						defaultValue="  over 100"
						onChange={handleUser}
					/>
					{errors.company_size && 'Company size is required'}
					<label htmlFor="over100">Over 100</label>
				</div>
				</div>
				<div className='dropdown-container'>
					<searchBar user={user}/>
				{/* <select
				className="select-placeholder"
					name="industry"
					ref={register({ required: true })}
					DefaultValue={user.industry}
					onChange={handleUser}>
					<option className="placeholder-option"  value="" disabled selected hidden > Select your industry from dropdown</option>
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
				</select> */}
		
				{errors.industry && 'Industry is required'}
				</div>

				
			</form>
			<button
				disabled={
					!formState.dirty || (formState.dirty && !formState.isValid)
				}
				type="submit"
				onClick={handleSubmit}>
				Next
			</button>

		</div>
	);
}

export default S2CreateAccount;
