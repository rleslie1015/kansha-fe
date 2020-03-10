import React from 'react';
import Dropdown from '../../Onboarding/DropDown';

function TimeDropdown({ handleFilter, filter }) {
	return (
		<div className="dropdown-time-div">
			<Dropdown
				classNombre="custom-select dashboard"
				setSelection={handleFilter}
				placeholder="Weekly leader board"
				name="filter"
				value={filter}
				id="cars">
				<option value="weeks">Weekly leader board</option>
				<option value="months">Monthly leader board</option>
				<option value="years">Yearly leader board</option>
			</Dropdown>
		</div>
	);
}
export default TimeDropdown;
