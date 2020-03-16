import React from 'react';
import Dropdown from '../../Onboarding/DropDown';

function TimeDropdown({ handleFilter, annual, week, month }) {
	return (
		<div className="dropdown-time-div">
			<Dropdown
				classNombre="custom-select dashboard"
				setSelection={handleFilter}
				placeholder={week}
				defaultValue="weeks"
				name="filter"
				id="limit-number">
				<option value="weeks">{week}</option>
				<option value="months">{month}</option>
				<option value="years">{annual}</option>
			</Dropdown>
		</div>
	);
}
export default TimeDropdown;
