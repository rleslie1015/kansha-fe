import React from 'react';
import profile from './assets/profile.png';
import RecogModal from './Components/RecogModal/RecogModal';
import trashcan from './assets/Trashcan.png';
import { axiosWithAuth } from './utils/axiosWithAuth';
import { Link } from 'react-router-dom';

export default function Workspace_Card(props) {
	const handleDelete = id => {
		// this will need to be turned into a confirmation modal, like the one on the figma.
		if (
			window.confirm('Are you sure you would like to delete this user?')
		) {
			axiosWithAuth()
				.delete(`/users/${id}`)
				.then(() => {
					props.setTeam(props.team.filter(user => !(user.id === id)));
				});
		}
	};
	return (
			<div className="workspace-card-container">
				{props.team.map(user => {
					if (props.profile.user_type === 'admin') {
						return (
							<div className="workspace-card">
								<div>
									<img
										className="workspace-card-image"
										alt="profile picture"
										src={user.profile_picture}
									/>
									<div>
										<img
											src={trashcan}
											alt="trash can icon"
											onClick={() =>
												handleDelete(user.id)
											}
										/>
									</div>
									<h5>
										{user.first_name} {user.last_name}
									</h5>
									<h6>{user.job_title}</h6>
									<h6 color="textSecondary">
										{user.department}
									</h6>
								</div>
								<div>
									 <RecogModal {...user} />
									<Link to={`/profile/${user.id}`}>
										<button variant="contained">
											<img
												alt="profile icon"
												src={profile}
											/>
										</button>
									</Link>
								</div>
							</div>
						);
					} else {
						return (
							<div className="workspace-card" key={user.id}>
								<div className= "user-info-container" >
									<img
										className="workspace-card-image"
										alt="profile picture"
										src={user.profile_picture}
									/>
									<h5>
										{user.first_name} {user.last_name}
									</h5>
									<h6>{user.job_title}</h6>
									<h6>{user.department}</h6>
								</div>
								<div className="workspace-profile-icons">
									<RecogModal {...user} />
									<Link to={`/profile/${user.id}`}>
											<img
												alt="profile icon"
												src={profile}
											/>
									</Link>
								</div>
							</div>
						);
					}
				})}
			</div>
	);
}
