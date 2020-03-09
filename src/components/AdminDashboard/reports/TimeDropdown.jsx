import React from 'react';

function TimeDropdown({ handleFilter, filter }) {
	return (
		<div className="dropdown-time-div">
			<select
				className="dropdown-time"
				onChange={handleFilter}
				name="filter"
				value={filter}
				id="cars">
				<option value="weeks">Weekly Leader Board</option>
				<option value="months">Monthly Leader Board</option>
				<option value="years">Yearly Leader Board</option>
			</select>
		</div>
	);
}
export default TimeDropdown;
