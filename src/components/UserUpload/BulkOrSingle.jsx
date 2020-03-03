import React from 'react';

import { Link } from 'react-router-dom';

function BulkOrSingle() {
	return (
		<div className="admin-user-add-container">
			<h2 className="user-upload-title">Add Employees</h2>
			<div className="admin-add-employee-form">
				<div className="how-upload-question">
					<h6>How would you like to add them?</h6>
					<div className="icon-div">
						<Link to="/add-user/single" className="user-link">
							<i id="user-icon" className="fas fa-user"></i>
							<h2>Single</h2>
						</Link>
					</div>
					<div className="icon-div">
						<Link to="/add-user/bulk" className="user-link">
							<i id="users-icon" className="fas fa-users"></i>
							<h2>Bulk</h2>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BulkOrSingle;
