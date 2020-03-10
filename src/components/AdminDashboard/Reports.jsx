import React from 'react';
import TotalRecogGraph from './reports/TotalRecogGraph';
import DoughnutCharts from './reports/DoughnutCharts';

export default function Reports() {
	return (
		<div className="reports">
			<h1 className="admin-title">Overview</h1>
			<main>
				<h2>Analytics</h2>
				<section className="container-total-recog-graph">
					<h1>Recognition</h1>
					<TotalRecogGraph />
				</section>
				<section className="container-thanked-leaderboard"></section>
				<section className="container-thankful-engagement">
					<h1>Participation</h1>
					<DoughnutCharts />
				</section>
				<section className="container-team-engagement"></section>
			</main>
		</div>
	);
}
