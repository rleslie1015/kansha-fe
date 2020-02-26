import React from 'react';
import { useHistory } from 'react-router-dom';

function S3LetsGetSetUp({ user, handleUser }) {
	console.log(user);
	let history = useHistory();

	const handleClick = () => {
		history.push('/onboarding/step-4');
	};

	const handlePrevious = () => {
		history.push('/onboarding/step-2');
	};

	const handleSubmit = () => {
		console.log('this is the user', user);
	};

	return (
		<div>
			<h1>Let's Get Set Up</h1>

			<form onSubmit={handleSubmit}>
				<div>
					<h6>What's your organization name?</h6>
					<input
						type="text"
						placeholder="organization name"
						name="org_name"
						value={user.org_name}
						onChange={handleUser}
					/>
					<h6>How big is your organization?</h6>
					<div>
						<input
							type="radio"
							id="lessthan20"
							name="company_size"
							value="less than 20"
							onChange={handleUser}
						/>
						<label htmlFor="lessthan20">Less than 20</label>
					</div>

					<div>
						<input
							type="radio"
							id="21100"
							name="company_size"
							value="21 to 100"
							onChange={handleUser}
						/>
						<label htmlFor="21100">21-100</label>
					</div>

					<div>
						<input
							type="radio"
							id="over100"
							name="company_size"
							value="over 100"
							onChange={handleUser}
						/>
						<label htmlFor="over100">Over 100</label>
					</div>
					<select
						name="industry"
						value={user.industry}
						onChange={handleUser}>
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
					</select>
				</div>
			</form>
			<button type="submit" onClick={handleClick}>
				Next
			</button>
			<div className="step-p-container">
				<span className="previousarrow">
					{/* <i class="fas fa-arrow-left" /> */}
					<button onClick={handlePrevious}>Previous step</button>
				</span>
			</div>
		</div>
	);
}

export default S3LetsGetSetUp;
