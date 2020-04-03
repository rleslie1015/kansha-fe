import React, { useState } from 'react';
import { ReactComponent as ProfileIcon } from '../../assets/profile.svg';
import { ReactComponent as SendIcon } from '../../assets/send.svg';
import { ReactComponent as TrashIcon } from '../../assets/Trashcan.svg';
import { useHistory } from 'react-router-dom';

import Modal from '../Modal';
import RecogModal from '../RecogModal';
import ConfirmDelete from './ConfirmDelete';

export default function WorkspaceCard({ profile, isAdmin, setTeam }) {
	const history = useHistory();
	const [modal, setModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);

	// const handleDelete = id => {
	// 	// this will need to be turned into a confirmation modal, like the one on the figma.
	// 	if (
	// 		window.confirm('Are you sure you would like to delete this user?')
	// 	) {
	// 		axiosWithAuth()
	// 			.delete(`/users/${id}`)
	// 			.then(() => {
	// 				props.setTeam(props.team.filter(user => !(user.id === id)));
	// 			});
	// 	}
	// };
	return (
		<li className="workspace-card">
			<section className="workspace-card-content">
				{isAdmin && (
					<>
						<button
							className="trash"
							onClick={() => setDeleteModal(!deleteModal)}>
							<TrashIcon />
						</button>
						{deleteModal && (
							<Modal close={setDeleteModal}>
								<ConfirmDelete
									name={`${profile.first_name} ${profile.last_name}`}
									id={profile.id}
									setTeam={setTeam}
								/>
							</Modal>
						)}
					</>
				)}
				<img alt="profile" src={profile.profile_picture} />
				<h5>
					{profile.first_name} {profile.last_name}
				</h5>
				<h6>{profile.job_title}</h6>
				<h6>{profile.department}</h6>
			</section>
			<section className="workspace-card-icons">
				<button
					onClick={() => {
						setModal(!modal);
					}}>
					<SendIcon />
				</button>
				<button onClick={() => history.push(`/profile/${profile.id}`)}>
					<ProfileIcon />
				</button>
			</section>
			{modal && (
				<Modal close={setModal}>
					<RecogModal profile={profile} />
				</Modal>
			)}
		</li>
	);
}
