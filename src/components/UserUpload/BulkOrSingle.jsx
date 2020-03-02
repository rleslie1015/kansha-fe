import React, { useState } from 'react';
import SingleUser from './SingleUser';
import BulkUser from './BulkUser';

import { Link } from 'react-router-dom';

function BulkOrSingle() {
	return (
		<div className="admin-user-add-container">
			<h2 className="user-upload-title">Add Employees</h2>
			<div className="admin-add-employee-form">
				<div className="how-upload-question">
					<h6>How would you like to add them?</h6>
					<Link to="/add-user/single">
						<i className="far fa-user"></i>
						<p>Single</p>
					</Link>
					<Link to="/add-user/bulk">
						<i className="fas fa-users"></i>
						<p>Bulk</p>
					</Link>
				</div>
			</div>

			<div className="step-p-container">
				<span className="previousarrow">
					<i class="fas fa-arrow-left" />
					<Link to="/workspace">
						<p>Go back to workspace</p>
					</Link>
				</span>
			</div>
		</div>
	);
}

export default BulkOrSingle;
