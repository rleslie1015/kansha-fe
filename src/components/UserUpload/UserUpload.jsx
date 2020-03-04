import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import BulkOrSingle from './BulkOrSingle';
import SingleUser from './SingleUser';
import BulkUser from './BulkUser';

function UserUpload() {
	const [user] = useState({
		first_name: '',
		last_name: '',
		email: '',
		job_title: '',
		org_id: '',
		user_type: '',
		org_name: '',
		company_size: '',
		industry: '',
		logo_url: '',
		primary_color: '',
		secondary_color: '',
	});

	return (
		<div className="user-upload-container-outter">
			<div className="user-upload-container">
				<Route
					exact
					path="/add-user"
					render={props => <BulkOrSingle {...props} />}></Route>
				<Route
					path="/add-user/single"
					render={props => (
						<SingleUser {...props} user={user} />
					)}></Route>
				<Route
					path="/add-user/bulk"
					render={props => (
						<BulkUser {...props} user={user} />
					)}></Route>
			</div>
		</div>
	);
}

export default UserUpload;
