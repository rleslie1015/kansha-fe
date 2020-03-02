import React from 'react';
import thumbWar from '../../assets/thumbwar.png';
import handshake from '../../assets/handshake.png';
import television from '../../assets/television.png';

export default function ResultsYouCanSee() {
	return (
		<section className="container-results">
			<h2>
				Results you can <span role="presentation">see</span>
			</h2>
			<h3>Watch it work for you.</h3>
			<ul>
				<li>
					<img src={thumbWar} alt="holding hands" />
					<p>
						Get employees in touch with your organization's values.
					</p>
				</li>
				<li>
					<img src={handshake} alt="shaking hands" />
					<p>Reduce voluntary turnover.</p>
				</li>
				<li>
					<img src={television} alt="television" />
					<p>Improve productivity, engagement and innovation.</p>
				</li>
			</ul>
		</section>
	);
}
