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
		update(id, form);
		window.setTimeout(() => {
			history.push('/profile');
		}, 50);
	};

	return (
		<div id="settings">
			<h3>Settings</h3>
			<h5>Edit Profile</h5>
			<div className="wrapper">
				<form>
					<div className="settings-form-changes">
						<div>
							<div className="form-first-row">
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
							<div className="form-second-row">
								<input
									label="Job Title*"
									placeholder="e.g. Manager"
									name="job_title"
									margin="normal"
									onChange={handleChange}
									value={form.job_title}
								/>
								<select
									defaultValue="standard"
									value={form.user_type}
									onChange={handleChange}
									name="user_type"
									margin="normal">
									<option value="standard">Standard</option>
									<option value="moderator">Mod</option>
									<option value="administrator">Admin</option>
								</select>
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

							<button
								className="btn-learn-more"
								onClick={handleSubmit}>
								Save Changes
							</button>
						</div>
					</div>
				</form>
				<div className="settings-profile">
					<img
						src={user.profile.profile_picture}
						alt="user profile"
					/>
					<div className="settings-user-info">
						<p className="username">
							{user.profile.first_name} {user.profile.last_name}
						</p>
						<p className="job-description">
							{user.profile.job_title}
						</p>
						<p className="department">{user.profile.department}</p>
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
