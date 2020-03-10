import React from 'react';
import MostRecog from './reports/MostRecog';
<<<<<<< HEAD
import MostRecogGiven from './reports/MostRecogGiven';

||||||| merged common ancestors
=======
import TotalRecogGraph from './reports/TotalRecogGraph';
import TotalRecognitionChart from './reports/TotalRecognitionChart';

>>>>>>> e7ef5a6ffa6e4e0b6e16cb52d9b49dc9c4867c60
export default function Reports() {
	return (
		<div className="reports">
			<h1 className="admin-title">Reports</h1>
			<main>
				<section className="container-total-recog-graph">
					<h1>Recognition</h1>
					<TotalRecogGraph />
				</section>
				<section className="container-thanked-leaderboard">
					<MostRecog />
				</section>
<<<<<<< HEAD
				<section className="container-team-engagement"></section>
				<section className="container-thankful-engagement">
					<MostRecogGiven />
				</section>
||||||| merged common ancestors
				<section className="container-team-engagement"></section>
				<section className="container-thankful-engagement"></section>
=======
				<section className="container-team-engagement">
					<TotalRecognitionChart />
				</section>
				<section className="container-thankful-engagement"></section>
>>>>>>> e7ef5a6ffa6e4e0b6e16cb52d9b49dc9c4867c60
			</main>
		</div>
	);
}
