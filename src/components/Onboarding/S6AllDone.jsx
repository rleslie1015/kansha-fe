import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { login } from '../../store/actions/user-actions';

//get from /profile endpoint and set that to redux state

function S6AllDone({ user }) {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(login());
	}, [dispatch]);

	let history = useHistory();

	const handlePrevious = () => {
		history.push('/onboarding/step-5');
	};
	const handleClick = () => {
		history.push(`/`);
	};

	return (
		<div>
			<h1>All done!</h1>
			<h5>
				To make the most of your experience we recommend taking a quick
				tour of your dashboard and finish organizing your teams.
			</h5>

			<div className="button-container">
				<button onClick={handleClick}>Take the tour</button>
				<button onClick={handleClick}>Let me explore</button>
			</div>
			<div className="step-p-container">
				<span className="previousarrow">
					<i class="fas fa-arrow-left" />
					<div onClick={handlePrevious}>
						<p>Previous step</p>
					</div>
				</span>
			</div>
		</div>
	);
}

export default S6AllDone;
