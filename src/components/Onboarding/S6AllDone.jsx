import React from 'react';
import { useHistory } from 'react-router-dom';

//get from /profile endpoint and set that to redux state

function S6AllDone({ user }) {
	let history = useHistory();

	const handlePrevious = () => {
		history.push('/onboarding/step-4');
	};
	const handleClick = () => {
		window.location.reload();
	};

	return (
		<div data-test='S6Component'>
			<h1 >All done!</h1>
			<h5>
				To make the most of your experience we recommend taking a quick
				tour of your dashboard and finish organizing your teams.
			</h5>

			<div className="button-container">
				{/* <button onClick={handleClick}>Take the tour</button> */}
				<button onClick={handleClick} data-test="S6Button">Let me explore</button>
			</div>
			<div className="step-p-container">
				<span className="previousarrow">
					<i class="fas fa-arrow-left" />
					<div onClick={handlePrevious}>
						<p className="testing">Previous step</p>
					</div>
				</span>
			</div>
		</div>
	);
}

export default S6AllDone;
