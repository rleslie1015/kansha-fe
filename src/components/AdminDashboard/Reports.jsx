import React from 'react';

export default function Reports() {
	return (
		<div className="reports">
			<h1 className="admin-title">Reports</h1>
			<main>
				<section className="container-participation-donut-chart"></section>
				<section className="container-thanked-leaderboard"></section>
				<section className="container-team-engagement"></section>
				<section className="container-thankful-engagement"></section>
			</main>
		</div>
	);
}
