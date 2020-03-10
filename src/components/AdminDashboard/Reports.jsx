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
	const [lineFilter, setLineFilter] = useState('weeks');

	const handleLineFilter = e => {
		setLineFilter(e);
	};

	const [doughnutFilter, setDoughnutFilter] = useState('weeks');

	const handleDoughnutFilter = e => {
		setDoughnutFilter(e);
	};

	return (
		<div className="reports">
			<section className="container-total-recog-graph">
				<h1 className="recognition-title">Recognition</h1>
				<TimeDropdown
					annual="Annual"
					week="This week"
					month="This month"
					filter={lineFilter}
					handleFilter={handleLineFilter}
				/>
				<TotalRecogGraph lineFilter={lineFilter} />

				<h1 className="participation-title">Participation</h1>
				<TimeDropdown
					annual="annual"
					week="This week"
					month="This month"
					filter={doughnutFilter}
					handleFilter={handleDoughnutFilter}
				/>
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
