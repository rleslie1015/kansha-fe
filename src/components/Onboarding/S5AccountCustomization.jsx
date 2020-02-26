import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

//put request to update existing organization

function S5AccountCustomization({ user }) {
	//onclick for i tag to initiate logo upload
	//onclick for color-picker divs to select color

	let history = useHistory();

	const handleClick = () => {
		history.push('/onboarding/step-6');
	};

	const handlePrevious = () => {
		history.push('/onboarding/step-4');
	};

	const [org, setOrg] = useState();

	const handleChanges = e => {
		setOrg({ ...org, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<h1>Make it yours!</h1>
			<h6 id="upload-logo">
				Upload your company logo:
				<span>
					<i class="fas fa-cloud-upload-alt"></i>
				</span>
			</h6>
			<h6 className="choose-color">Choose your primary color:</h6>
			<div className="color-picker">
				<div id="black" />
				<div id="red" />
				<div id="blue" />
				<div id="purple" />
				<div id="grey" />
			</div>
			<button onClick={handleClick}>Next</button>
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
