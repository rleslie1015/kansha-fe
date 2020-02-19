import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { update } from './store/actions/user-actions';

function Settings({ update, user }) {
	const history = useHistory();

	const initialState = {
		first_name: user.profile.first_name,
		last_name: user.profile.last_name,
		job_title: user.profile.job_title,
		department: user.profile.department,
		org_name: user.profile.org_name,
		user_type: user.profile.user_type,
	};

	const [form, setForm] = useState(initialState);

	const handleChange = event => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	const id = user.profile.id;

	const handleSubmit = event => {
		console.log(form);
		update(id, form);
		window.setTimeout(() => {
			history.push('/profile');
		}, 50);
	};

	return (
		<div id="App">
			<div />
			<div>
				<h5>Settings</h5>
				<div>
					<div>
						<h5>Edit Profile</h5>
						<div>
							<div>
								<div>
									<input
										label="First Name*"
										placeholder="e.g. Jane"
										name="first_name"
										margin="normal"
										onChange={handleChange}
										value={form.first_name}
									/>
									<input
										label="Last Name*"
										placeholder="e.g. Doe"
										name="last_name"
										margin="normal"
										onChange={handleChange}
										value={form.last_name}
									/>
								</div>
								<div>
									<input
										label="Job Title*"
										placeholder="e.g. Manager"
										name="job_title"
										margin="normal"
										onChange={handleChange}
										value={form.job_title}
									/>
									<div>
										<input
											defaultValue="standard"
											value={form.user_type}
											onChange={handleChange}
											name="user_type"
											margin="normal">
											<select>Standard</select>
											<select>Mod</select>
											<select>Admin</select>
										</input>
									</div>
								</div>
								<div>
									<input
										label="Organization*"
										placeholder="Organization Name"
										name="org_name"
										margin="normal"
										onChange={handleChange}
										value={form.org_name}
									/>
								</div>
								<div>
									<input
										label="Department"
										placeholder="e.g. Marketing Department"
										name="department"
										margin="normal"
										onChange={handleChange}
										value={form.department}
									/>
								</div>
								<button onClick={handleSubmit}>
									Save Changes
								</button>
							</div>
							<div>
								<div>
									<img
										src={user.profile.profile_picture}
										alt="user profile"
									/>
								</div>
								<div>
									{user.profile.first_name}{' '}
									{user.profile.last_name}
								</div>
								<div>{user.profile.job_title}</div>
								<div>{user.profile.department}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		...state,
	};
};

export default connect(mapStateToProps, { update })(Settings);
