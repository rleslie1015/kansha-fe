import React from 'react';
import Modal from '../Modal';

function DeleteModal({
	deleteMemberFromOrg,
	deleteTeamFromOrg,
	setDeleteModal,
	handleDeleteTeam,
	handleDeleteTeamMember,
	handleDeleteOrgMember,
}) {
	//receive three pieces of state, render different content/functionality depending on that state

	const handleClose = () => {
		setDeleteModal(false);
	};

	return (
		<Modal close={handleClose}>
			{deleteMemberFromOrg ? (
				<section className="delete-container">
					<div className="delete-text-cont">
						<h5>
							Are you sure you want to permanently delete this
							member from your organization? This action cannot be
							undone.
						</h5>
					</div>
					<button onClick={handleDeleteOrgMember}>Delete</button>
				</section>
			) : deleteTeamFromOrg ? (
				<section className="delete-container">
					<div className="delete-text-cont">
						<h5>
							Are you sure you want to permanently delete this
							team from your organization? This action cannot be
							undone.
						</h5>
					</div>
					<button onClick={handleDeleteTeam}>Delete</button>
				</section>
			) : (
				<section className="delete-container">
					<div className="delete-text-cont">
						<h5>
							Are you sure you want to delete this member from
							your team?
						</h5>
					</div>
					<button onClick={handleDeleteTeamMember}>Delete</button>
				</section>
			)}
		</Modal>
	);
}

export default DeleteModal;
