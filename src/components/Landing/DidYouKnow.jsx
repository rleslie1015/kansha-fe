import React from 'react';
import Auth from '../../utils/auth';
const auth = new Auth();
export default function DidYouKnow() {
	return (
		<section className="didyouknow" data-test='didyouknow'>
			<figure>
				<iframe
					src="https://www.youtube.com/embed/8Ybqd9pAFk0"
					frameBorder="0"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
					title="Kansha demonstration video"
				/>
			</figure>
			<section>
				<h2>Did you know...</h2>
				<p>
					Companies with robust employee recognition programs are
					known to have 31% lower voluntary turnover than those that
					don’t (Anderson, 2018).
				</p>
				<button onClick={auth.login} className="btn-get-started" data-test='getstarted'>
					Get Started
				</button>
			</section>
		</section>
	);
}
