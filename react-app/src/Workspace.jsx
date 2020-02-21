import React, { useState, useEffect } from 'react';
import WorkspaceCard from './Workspace_Card';
import { axiosWithAuth } from './utils/axiosWithAuth';
import { connect } from 'react-redux';
import SideBar from './Components/sideBar/Sidebar';

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
		<div className="workspace">
			<SideBar />
			<div clasName="workspace-container">
				<div className="workspace-search-div">
					<h1>Workspace</h1>
					<div className="workplace-search-bar">
						<input
							placeholder="Search Workspace…"
							onKeyUp={searchWorkPlaceHandler}
							type="text"
						/>
					</div>
				</div>
				<WorkspaceCard
					team={filteredTeam.length > 0 ? filteredTeam : team}
					profile={props.profile}
					setTeam={setTeam}
				/>
			</div>
		</div>
	);
}
export default connect(({ user }) => ({ ...user }), {})(Workspace);
