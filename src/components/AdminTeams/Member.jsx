import React, { useState, useEffect } from 'react';
import Modal from '../Modal';
import RecogModal from '../RecogModal/index';
import ProfileModal from '../FeedSideBar/ProfileModal';
import DeleteModal from './DeleteModal';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

// Icon import
import { ReactComponent as DeleteIcon } from '../../assets/TeamsIcons/delete.svg';
import { ReactComponent as RecognitionIcon } from '../../assets/TeamsIcons/recognition.svg';

function Member({ profile, teamDetails, member, setTeamDetails, myProfile }) {
	const [modal, setModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const [profileSelect, setProfileSelect] = useState(false);
	const [badges, setBadges] = useState([]);

	const handleDeleteClick = e => {
		e.preventDefault();
		setDeleteModal(true);
	};

	const handleProfileClick = e => {
		e.preventDefault();

		setProfileSelect(true);
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
	useEffect(() => {
		axiosWithAuth()
			.get('/badges')
			.then(res => {
				setBadges(res.data);
			})
			.catch(err => {
				console.error(err);
			});
	}, []);

	return (
		<>
			{deleteModal && (
				<DeleteModal
					setDeleteModal={setDeleteModal}
					handleDeleteTeamMember={handleDeleteTeamMember}
				/>
			)}

			{profileSelect && (
				<ProfileModal
					close={setModal}
					setProfileSelect={setProfileSelect}
					profile={profile}
					badges={badges}
					profileId={profile.id}
				/>
			)}

			<tr className="indiv-team">
				<td>
					<div
						className="teams-employee-info"
						onClick={handleProfileClick}>
						<img
							src={member.profile_picture}
							alt="profile img"
							className="teams-profile-picture"
							style={{ cursor: 'pointer' }}
						/>
						<h3>
							{member.first_name} {member.last_name}
						</h3>
					</div>
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
				<td>
					<h3>{member.team_role}</h3>
				</td>
				<td>
					<h3>{teamDetails.name}</h3>
				</td>
				{myProfile.user_type.toLowerCase() === 'admin' && (
					<td className="icons">
						<DeleteIcon
							onClick={handleDeleteClick}
							style={{
								marginRight: '2rem',
								cursor: 'pointer',
							}}
						/>
					</td>
				)}
			</tr>
		</>
	);
}

export default Member;
