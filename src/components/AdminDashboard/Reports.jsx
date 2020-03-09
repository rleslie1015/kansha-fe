import React, { useState } from 'react';
import LeaderShipBoard from './reports/LeadershipBoard';
import TimeDropdown from './reports/TimeDropdown';

export default function Reports() {
	const [filter, setFilter] = useState('weeks');

	const handleFilter = e => {
		e.preventDefault();
		setFilter(e.target.value);
	};

	return (
		<div className="reports">
			<h1 className="admin-title">Reports</h1>
			<main>
				<section className="container-participation-donut-chart"></section>

				<section className="container-team-engagement"></section>

				<section className="container-leaderboard">
					<div>
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
