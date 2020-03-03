import React from 'react';
import PeopleJumping from '../../assets/people-jumping.jpeg';
import Auth from '../../utils/auth';
const auth = new Auth();
export default function Main() {
	return (
		<section className="main-container-landing">
			<section>
				<h2>Workplace recognition.</h2>
				<h3>Redefined.</h3>
				<p>
					Making it easy to recognize your hardworking peers with
					rewards and personalized messages.
				</p>
				<button className="btn-get-started" onClick={auth.login}>
					Join today
				</button>
			</section>
			<img src={PeopleJumping} alt="group of people jumping" />
		</section>
	);
}
