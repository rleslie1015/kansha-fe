import React, { useState } from 'react';
import TotalRecogGraph from './reports/TotalRecogGraph';
import DoughnutCharts from './reports/DoughnutCharts';
import LeaderShipBoard from './reports/LeadershipBoard';
import TimeDropdown from './reports/TimeDropdown';

export default function Reports() {
	const [filter, setFilter] = useState('weeks');

	const handleFilter = (e) => {
		setFilter(e);
	};
	const [lineFilter, setLineFilter] = useState('weeks');

	const handleLineFilter = (e) => {
		setLineFilter(e);
	};

	const [doughnutFilter, setDoughnutFilter] = useState('weeks');

	const handleDoughnutFilter = (e) => {
		setDoughnutFilter(e);
	};

	return (
		<div className="reports">
			<section className="container-total-recog-graph">
				<h2 className="analytics-title">Analytics</h2>
				<div className="title-container">
					<h3 className="recognition-title">Recognition</h3>
					<TimeDropdown
						annual="Annual"
						week="This week"
						month="This month"
						filter={lineFilter}
						handleFilter={handleLineFilter}
					/>
				</div>
				<TotalRecogGraph lineFilter={lineFilter} />
				<div className="title-container participation-container">
					<h3 className="participation-title">Participation</h3>
					<TimeDropdown
						annual="Annual"
						week="This week"
						month="This month"
						filter={doughnutFilter}
						handleFilter={handleDoughnutFilter}
					/>
				</div>
				<DoughnutCharts doughnutFilter={doughnutFilter} />
			</section>

			<section className="container-leaderboard">
				<div className="container-time-dropdown">
					<TimeDropdown
						filter={filter}
						handleFilter={handleFilter}
						annual="Yearly leader board"
						week="Weekly leader board"
						month="Monthly leader board"
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
		</div>
	);
}
