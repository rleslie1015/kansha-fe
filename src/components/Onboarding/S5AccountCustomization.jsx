import React from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
// import { ChromePicker } from 'react-color';

function S5AccountCustomization({ user, setUser, handleUser }) {
	let history = useHistory();

	const handleSubmit = e => {
		e.preventDefault();
		axiosWithAuth()
			.put(`/organizations/${user.org_id}`, {
				primary_color: user.primary_color,
				secondary_color: user.secondary_color,
				logo_url: user.logo_url,
			})
			.then(res => {
				setUser(res.data);
			})
			.catch(err => {
				console.log(err);
			});
		history.push('/onboarding/step-6');
	};

	const handlePrevious = () => {
		history.push('/onboarding/step-4');
	};

	return (
		<div>
			<h1>Make it yours!</h1>
			<form className="color-form">
				<h6 id="upload-logo">
					Upload your company logo:
					<span>
						<i className="fas fa-cloud-upload-alt"></i>
					</span>
				</h6>
				<input
					type="file"
					name="logo_url"
					value={user.logo_url}
					onChange={handleUser}></input>

				<h6 className="choose-color">Choose your primary color:</h6>
				<p>We recommend a darker color as your primary color.</p>
				{/* <div className="primary-color" onClick={showPicker}></div> */}

				<input
					type="text"
					name="primary_color"
					value={user.primary_color}
					onChange={handleUser}></input>

				<h6 className="choose-color">Choose your secondary color:</h6>
				<p>We recommend a brighter color as your secondary color.</p>
				{/* <ChromePicker color={user.secondary_color} /> */}
				<input
					type="text"
					name="secondary_color"
					value={user.secondary_color}></input>
				{/* <div className="color-picker">
				<div id="black" />
				<div id="red" />
				<div id="blue" />
				<div id="purple" />
				<div id="grey" />
			</div> */}
			</form>
			<button type="submit" onClick={handleSubmit}>
				Next
			</button>
			<div className="step-p-container">
				<span className="previousarrow">
					<i className="fas fa-arrow-left" />
					<div onClick={handlePrevious}>
						<p> Previous step</p>
					</div>
				</span>

				<p>Continue later</p>
			</div>
		</div>
	);
}

export default S5AccountCustomization;
