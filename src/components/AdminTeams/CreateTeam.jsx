import React, { useState } from 'react';
import OrganizationEmployeesTable from './OrganizationEmployeesTable';
import { Link } from 'react-router-dom';

// Modal import
// import Modal from '../Modal';
// import RecogModal from '../RecogModal/index';

// Icon import
import { ReactComponent as RecognitionIcon } from '../../assets/TeamsIcons/recognition.svg';
import { ReactComponent as DeleteIcon } from '../../assets/TeamsIcons/delete.svg';
import { ReactComponent as GroupIcon } from '../../assets/TeamsIcons/Group.svg';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const CreateTeam = ({
	employees,
	teamMemberArray,
	setTeamMemberArray,
	addTeamMember,
}) => {
	// const [modal, setModal] = useState(false);
	const [newTeam, setNewTeam] = useState({
		name: 'Walmart',
		newMembersArray: [],
	});

	let teamArr = teamMemberArray.map(emp => {
		let newMember = {
			user_id: emp.id,
			team_role: emp.team_role,
		};
		return newMember;
	});

	const handleSubmit = () => {
		axiosWithAuth()
			.post('/teams', { ...newTeam, newMembersArray: teamArr })
			.then(res => {
				console.log(res);
			})
			.catch(error => console.log(error.response));
	};

	// Length of team to be added
	const teamLength = teamMemberArray.length;

	return (
		<div className="create-team-container">
			<div className="create-team-employees-list">
				<OrganizationEmployeesTable
					employees={employees}
					teamMemberArray={teamMemberArray}
					setTeamMemberArray={setTeamMemberArray}
					addTeamMember={addTeamMember}
				/>
			</div>
			<div className="create-team">
				<div className="create-team-add-name">
					<input
						// value={teamName}
						// onChange={handleChange}
						type="text"
						id="save-team"
						name="name"
						placeholder="Team Name"
					/>
					<button onClick={handleSubmit}>submit</button>
					<h2>{`Selected (${teamLength})`}</h2>
				</div>
				<div className="create-team-picked"></div>
				<div className="added-team-list">
					{teamMemberArray.map(team => {
						return (
							<table>
								<tbody>
									<tr className="teams-employee-card">
										<td className="teams-employee">
											<Link to={`/profile/${team.id}`}>
												<div className="teams-employee-info">
													<img
														src={
															team.profile_picture
														}
														alt="profile img"
														className="teams-profile-picture"
													/>
													<h3>
														{team.first_name}{' '}
														{team.last_name}
													</h3>
												</div>
											</Link>
										</td>
										<td className="recognition-btn">
											<RecognitionIcon
												// onClick={() => setModal(!modal)}
												style={{
													height: '20px',
													width: '20px',
												}}
											/>
											{/* {modal && (
												<Modal close={setModal}>
													<RecogModal
														profile={team}
													/>
												</Modal>
											)} */}
										</td>
										<td className="teams-container">
											<h3>Role</h3>
										</td>
										<td className="teams-container">
											<h3 className="teams">Teams (0)</h3>
										</td>
										<td className="teams-employee-icons">
											<DeleteIcon
												style={{ marginRight: '20px' }}
											/>
											<GroupIcon />
										</td>
									</tr>
								</tbody>
							</table>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default CreateTeam;
