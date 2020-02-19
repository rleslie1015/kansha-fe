import React, { useState, useEffect } from 'react';
import WorkspaceCard from './Workspace_Card';
import { axiosWithAuth } from './utils/axiosWithAuth';
import { connect } from 'react-redux';

function Workspace(props) {
	const [team, setTeam] = useState([]);

	const [filteredTeam, setFilteredTeam] = useState([]);
	// console.log(filteredTeam);

	useEffect(() => {
		axiosWithAuth()
			.get('/users')
			.then(res => {
				setTeam(res.data);
				console.log(res);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	const searchWorkPlaceHandler = e => {
		console.log(e.target.value);

		const user = team.filter(
			t =>
				t.first_name.toLowerCase().includes(e.target.value) ||
				t.last_name.toLowerCase().includes(e.target.value),
		);
		setFilteredTeam(user);
	};

	return (
		<div>
			<div>
				<div>
					<h1>Workspace</h1>
					<div>
						<div></div>
						<input
							placeholder="Search Workspace…"
							onKeyUp={searchWorkPlaceHandler}
							type="text"
						/>
					</div>
				</div>
				<div
					team={filteredTeam.length > 0 ? filteredTeam : team}
					profile={props.profile}
					setTeam={setTeam}
				/>
			</div>
		</div>
	);
}
export default connect(({ user }) => ({ ...user }), {})(Workspace);
