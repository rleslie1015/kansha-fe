import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import WorkspaceCard from './WorkspaceCard';

function Workspace() {
	const [team, setTeam] = useState([]);
	const [filter, setFilter] = useState('');
	const history = useHistory();
	const { profile } = useSelector(({ user }) => ({
		...user,
	}));

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axiosWithAuth().get(
					`/employees/organizations?search=${filter}`,
				);
				setTeam(data.employees);
			} catch (err) {
				console.error(err);
			}
		};
		fetchData();
	}, [filter]);

	const handleClick = () => {
		history.push('/add-user');
	};

	return (
		<main className="workspace">
			<header>
				<h1>Workspace</h1>
				{profile.user_type.toLowerCase() === 'admin' && (
					<div className="add-users-container" onClick={handleClick}>
						<i
							id="add-user-icon"
							className="fas fa-user-plus"
							style={{ display: 'flex' }}></i>
						<p> Add Users</p>
					</div>
				)}
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
						setTeam={setTeam}
					/>
				))}
			</ul>
		</main>
	);
}
export default Workspace;
