import React from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

// post request to /users endpoint to create new user

function S2CreateAccount({ user, setUser, handleUser }) {
	let history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();
		axiosWithAuth()
			.post('/users', user)
			.then(res => {
				console.log(res, `hello`);
				setUser({ ...user, id: res.data[0] });
			})
			.catch(err => console.log(err));
		history.push('/onboarding/step-3');
	};

	return (
		<div>
			<h1>Create Account</h1>
			<form className="create-account-form">
				<div className="name-container">
					<input
						className="formname"
						placeholder="First Name"
						name="first_name"
						value={user.first_name}
						onChange={handleUser}></input>
					<input
						className="formname"
						placeholder="Last Name"
						name="last_name"
						value={user.last_name}
						onChange={handleUser}></input>
				</div>

				<input
					className="jobtitle-input"
					placeholder="Job Title"
					name="job_title"
					value={user.job_title}
					onChange={handleUser}></input>
				<input
					placeholder="Email"
					name="email"
					value={user.email}
					onChange={handleUser}></input>
				<input
					placeholder="Organization Name"
					name="org_name"
					value={user.org_name}
					onChange={handleUser}></input>
			</form>
			<button type="submit" onClick={handleSubmit}>
				Next
			</button>
		</div>
	);
}

export default S2CreateAccount;
