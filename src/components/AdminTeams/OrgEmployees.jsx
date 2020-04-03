import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

// Icon Imports
import { ReactComponent as DeleteIcon } from '../../assets/TeamsIcons/delete.svg';
import { ReactComponent as RecognitionIcon } from '../../assets/TeamsIcons/recognition.svg';

// Modal imports
import Modal from '../Modal';
import RecogModal from '../RecogModal/index';
import DeleteModal from './DeleteModal';
import ProfileModal from '../FeedSideBar/ProfileModal';

const OrgEmployees = ({
	employee,
	empButton,
	addTeamMember,
	id,
	setEmployees,
	onDashboard,
	createTeamsBtn,
}) => {
	const [modal, setModal] = useState(false);
	const [teamInfo, setTeamInfo] = useState([]);
	const [deleteModal, setDeleteModal] = useState(false);
	const [badges, setBadges] = useState([]);

	useEffect(() => {
		axiosWithAuth()
			.get(`profile/${id}`)
			.then((res) => {
				setTeamInfo(res.data.peer);
			})
			.catch((error) => console.log(error.response));
	}, [id]);

	useEffect(() => {
		axiosWithAuth()
			.get('/badges')
			.then((res) => {
				setBadges(res.data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const handleDeleteClick = (e) => {
		e.preventDefault();
		setDeleteModal(true);
	};

	const [profileSelect, setProfileSelect] = useState(false);

	//not working yet

	const handleDeleteOrgMember = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.delete(`/users/${id}`)
			.then(() => {
				setEmployees((previous) =>
					previous.filter((emps) => emps.id !== id),
				);
			});
	};

	const handleProfileClick = (e) => {
		e.preventDefault();

		setProfileSelect(true);
	};

	return (
		<>
			{deleteModal && (
				<DeleteModal
					setDeleteModal={setDeleteModal}
					deleteMemberFromOrg={true}
					handleDeleteOrgMember={handleDeleteOrgMember}
				/>
			)}
			{profileSelect && (
				<ProfileModal
					close={setModal}
					setProfileSelect={setProfileSelect}
					profile={employee}
					badges={badges}
					profileId={employee.id}
					inModal={false}
				/>
			)}
			<tr className="teams-employee-card">
				<td className="teams-employee">
					{onDashboard ? null : (
						<label
							onClick={(e) => {
								addTeamMember(e, employee.id);
							}}
							style={
								empButton
									? { display: 'none' }
									: { display: 'block' }
							}>
							<input type="checkbox" className="css-checkbox" />
							<i></i>
						</label>
					)}
					<a
						href="#"
						onClick={(e) => {
							handleProfileClick(e);
						}}>
						<div className="teams-employee-info">
							<img
								src={employee.profile_picture}
								alt="profile img"
								className="teams-profile-picture"
								style={{ cursor: 'pointer' }}
							/>
							<h3>
								{employee.first_name} {employee.last_name}
							</h3>
						</div>
					</a>
				</td>
				<td className="teams-employee-details">
					<h3 className="job-title">{employee.job_title}</h3>
				</td>
				<td className="teams-container">
					{teamInfo.teams ? (
						<>
							<h3 className="teams">{`Teams (${teamInfo.teams.length})`}</h3>
						</>
					) : (
						<h3 className="teams">Teams (0)</h3>
					)}
				</td>
				<td className="recognition-btn">
					<RecognitionIcon
						onClick={() => setModal(!modal)}
						style={
							!empButton && createTeamsBtn
								? { display: 'block' }
								: {
										display: 'block',
										width: '20px',
										height: '20px',
								  }
						}
					/>
					{modal && (
						<Modal close={setModal}>
							<RecogModal profile={employee} />
						</Modal>
					)}
				</td>
				<td className="teams-employee-icons">
					<DeleteIcon
						style={
							!empButton
								? { display: 'none' }
								: {
										display: 'block',
										marginRight: '20px',
										cursor: 'pointer',
								  }
						}
						onClick={handleDeleteClick}
					/>
				</td>
			</tr>
		</>
	);
};

export default OrgEmployees;
