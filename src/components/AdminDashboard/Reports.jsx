import React, { useState } from 'react';
import TotalRecogGraph from './reports/TotalRecogGraph';
import DoughnutCharts from './reports/DoughnutCharts';
import LeaderShipBoard from './reports/LeadershipBoard';
import TimeDropdown from './reports/TimeDropdown';

export default function Reports() {
	const [filter, setFilter] = useState('weeks');

	const handleFilter = e => {
		setFilter(e);
	};

	return (
		<div className="reports">
			<main>
				<h1 className="admin-title">Overview</h1>
				<h2>Analytics</h2>
				<section className="container-total-recog-graph">
					<h1>Recognition</h1>
					<TotalRecogGraph />
				</section>

				<section className="container-thankful-engagement">
					<h1>Participation</h1>
					<DoughnutCharts />
				</section>

				<section className="container-leaderboard">
					<div className="container-time-dropdown">
						<TimeDropdown
							filter={filter}
							handleFilter={handleFilter}
						/>
					</div>
					<LeaderShipBoard
						type="recipient"
						title="Most thanked"
						filter={filter}
						handleFilter={handleFilter}
					/>

					<LeaderShipBoard
						type="sender"
						title="Most thankful"
						filter={filter}
						handleFilter={handleFilter}
					/>
				</section>
			</main>
		</div>
	);
}
