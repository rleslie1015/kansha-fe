import React, { useState, useEffect } from 'react';
import WorkspaceCard from './WorkspaceCard';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useSelector } from 'react-redux';

function Workspace() {
	const [team, setTeam] = useState([]);
	const [filter, setFilter] = useState('');

	const { profile } = useSelector(({ user }) => ({
		...user,
	}));

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

	return (
		<main className="workspace">
			<header>
				<h1>Workspace</h1>
				<input
					placeholder="Search Workspace…"
					value={filter}
					onChange={e => setFilter(e.target.value)}
					type="text"
				/>
			</header>
			<ul className="workspace-card-container">
				{team.map(user => (
					<WorkspaceCard
						key={user.id}
						profile={user}
						isAdmin={profile.user_type.toLowerCase() === 'admin'}
					/>
				))}
			</ul>
		</main>
	);
}
export default Workspace;
