import React from 'react';
import Dropdown from '../../Onboarding/DropDown';
function LimitDropdown({ handleLimit, limit }) {
	return (
		<div className="limit-dropdown-container">
			<label>View:</label>
			<Dropdown
				setSelection={handleLimit}
				className="dropdown-view"
				classNombre="dropdown-view-name"
				name="limit"
				value={limit}
				id="limit-number">
				<option value={5}>Top 5 </option>
				<option value={10}>Top 10</option>
				<option value={15}>Top 15</option>
				<option value={20}>Top 20</option>
			</Dropdown>
		</div>
	);
}
export default LimitDropdown;
