import React from 'react';
import Laptop from '../../assets/Macbook-Pro.svg';

export default function DidYouKnow() {
	return (
		<div className="didyouknow">
			<div className="dyk-left-div">
				<h1>Did you know...</h1>
				<p>
					Companies with robust employee recognition programs are
					known to have 31% lower voluntary turnover than those that
					don’t (Anderson, 2018).
				</p>
				<button className="btn-get-started">Get Started</button>
			</div>
			<div className="dyk-right-div">
				<img src={Laptop} />
			</div>
		</div>
	);
}
