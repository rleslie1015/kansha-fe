import React, { useState } from 'react';
import Modal from '../Modal';
import RecogModal from '../RecogModal/index';
import { Link } from 'react-router-dom';
import DeleteModal from './DeleteModal';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

// Icon import
import { ReactComponent as DeleteIcon } from '../../assets/TeamsIcons/delete.svg';
import { ReactComponent as GroupIcon } from '../../assets/TeamsIcons/Group.svg';
import { ReactComponent as RecognitionIcon } from '../../assets/TeamsIcons/recognition.svg';

function Member({ profile, teamDetails, member, setTeamDetails }) {
	const [modal, setModal] = useState(false);
	console.log(member);
	const [deleteModal, setDeleteModal] = useState(false);

	const handleDeleteClick = e => {
		e.preventDefault();
		setDeleteModal(true);
	};

	const handleDeleteTeamMember = e => {
		e.preventDefault();
		axiosWithAuth()
			.delete(`/teams/members/${member.member_id}`)
			.then(() => {
				setTeamDetails(previous => ({
					...previous,
					team_members: previous.team_members.filter(
						tm => tm.member_id !== member.member_id,
					),
				}));
				setDeleteModal(false);
			});
	};

	return (
		<>
			{deleteModal && (
				<DeleteModal
					setDeleteModal={setDeleteModal}
					handleDeleteTeamMember={handleDeleteTeamMember}
				/>
			)}

			<tr className="indiv-team">
				<td>
					<Link to={`/profile/${member.id}`}>
						<div className="teams-employee-info">
							<img
								src={member.profile_picture}
								alt="profile img"
								className="teams-profile-picture"
							/>
							<h3>
								{member.first_name} {member.last_name}
							</h3>
						</div>
					</Link>
				</td>
				<td className="recognition-btn">
					<RecognitionIcon
						onClick={() => setModal(!modal)}
						style={{
							height: '20px',
							width: '20px',
						}}
					/>
					{modal && (
						<Modal close={setModal}>
							<RecogModal profile={profile} />
						</Modal>
					)}
				</td>
				<td>{member.team_role}</td>
				<td>{teamDetails.name}</td>
				<td className="icons">
					<DeleteIcon
						onClick={handleDeleteClick}
						style={{ marginRight: '2rem', cursor: 'pointer' }}
					/>
				</td>
			</tr>
		</>
	);
}

export default Member;
