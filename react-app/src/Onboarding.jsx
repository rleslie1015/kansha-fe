import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { onboard } from './store/actions/user-actions';
import { connect } from 'react-redux';
import logo from './assets/logo38.png';
import kanshaLogo from './assets/logo39.png';
import Loader from 'react-loader-spinner';

function Onboarding({ onboard, profile, isOnboarding, isOnboardingLoading }) {
	const history = useHistory();

	const [form, setForm] = useState({});

	const handleChange = event => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	const handleSubmit = event => {
		onboard(form);
		history.push('/profile');
	};

	if (!isOnboarding && profile) return <Redirect to="profile" />;

	return (
		<div id="App">
			<div />
			<div>
				<img src={kanshaLogo} alt="Kansha Logo" />
				<img src={logo} alt="Kansha Logo People" />
			</div>
			<div>
				<div>
					{isOnboardingLoading ? (
						<>
							<div>
								<Loader
									type="Rings"
									color="#EE4D71"
									height={100}
									width={100}
								/>
							</div>
						</>
					) : (
						<>
							<h5>Let's Get Started!</h5>
							<div>
								<div>
									<input
										label="First Name*"
										placeholder="e.g. Jane"
										name="first_name"
										margin="normal"
										onChange={handleChange}
									/>
									<input
										label="Last Name*"
										placeholder="e.g. Doe"
										name="last_name"
										margin="normal"
										onChange={handleChange}
									/>
								</div>
								<div>
									<input
										label="Job Title*"
										placeholder="e.g. Manager"
										name="job_title"
										margin="normal"
										onChange={handleChange}
									/>
									<input
										defaultValue="standard"
										value={form.user_Type}
										onChange={handleChange}
										name="user_type"
										margin="normal"
									/>
								</div>
								<div>
									<input
										label="Organization*"
										placeholder="Organization Name"
										name="org_name"
										margin="normal"
										onChange={handleChange}
									/>
								</div>
								<div>
									<input
										label="Department"
										placeholder="e.g. Marketing Department"
										name="department"
										margin="normal"
										onChange={handleChange}
									/>
								</div>
								<input color="primary" onClick={handleSubmit}>
									Confirm
								</input>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = ({ user }) => {
	return {
		...user,
	};
};

export default connect(mapStateToProps, { onboard })(Onboarding);
