import React from 'react';
import PeopleJumping from '../../assets/people-jumping.jpeg';
import { useHistory } from 'react-router-dom';
export default function Main() {
	const history = useHistory();

	const handleClick = () => {
		history.push('/onboarding');
	};

	return (
		<section className="main-container-landing">
			<section>
				<h2>Workplace recognition.</h2>
				<h3>Redefined.</h3>
				<p>
					Making it easy to recognize your hardworking peers with
					rewards and personalized messages.
				</p>
				<button onClick={handleClick}>Join today</button>
			</section>
			<img src={PeopleJumping} alt="group of people jumping" />
		</section>
	);
}
