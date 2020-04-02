import React, { useState } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import { onboard } from '../store/actions/user-actions';
import { connect } from 'react-redux';
import logo from '../assets/logo38.png';
import kanshaLogo from '../assets/logo39.png';
import Loader from 'react-loader-spinner';

function Onboarding({ onboard, profile, isOnboarding, isOnboardingLoading }) {
	const history = useHistory();

	const [form, setForm] = useState({});

	const handleChange = event => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	const handleSubmit = event => {
		onboard(form);
		history.push('/dashboard');
	};

	if (!isOnboarding && profile) return <Redirect to="profile" />;

	return (
		<div className="onboarding">
			<div className="left-div">
				<img
					className="onboarding-logo"
					src={kanshaLogo}
					alt="Kansha Logo"
				/>
				<img
					className="onboarding-image"
					src={logo}
					alt="Kansha Logo People"
				/>
			</div>
			<div className="right-div">
				{isOnboardingLoading ? (
					<div>
						<Loader
							type="Rings"
							color="#c91757"
							height={100}
							width={100}
						/>
					</div>
				) : (
					<div className="onboarding-form">
						<h3>Let's Get Started!</h3>
						<form id="ob-flow-form">
							<div className="form-first-row">
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
							<div className="form-second-row">
								<input
									label="Job Title*"
									placeholder="e.g. Manager"
									name="job_title"
									margin="normal"
									onChange={handleChange}
								/>
								<select
									value={form.user_Type}
									onChange={handleChange}
									name="user_type">
									<option value="standard">Standard</option>
									<option value="moderator">Moderator</option>
									<option selected value="administrator">
										Administrator
									</option>
								</select>
							</div>
							<input
								id="bottom-rows"
								label="Organization*"
								placeholder="Organization Name"
								name="org_name"
								margin="normal"
								onChange={handleChange}
							/>
							<input
								id="bottom-rows"
								label="Department"
								placeholder="e.g. Marketing Department"
								name="department"
								margin="normal"
								onChange={handleChange}
							/>
							<button
								className="btn-onboarding-confirm"
								onClick={handleSubmit}>
								Confirm
							</button>
						</form>
					</div>
				)}
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
