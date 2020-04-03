import React from 'react';
import OrganizationEmployeesTable from './OrganizationEmployeesTable';

import { ReactComponent as RecognitionIcon } from '../../assets/TeamsIcons/recognition.svg';

const CreateTeam = ({
	employees,
	teamMemberArray,
	setTeamMemberArray,
	addTeamMember,
	teamName,
	setTeamName,
}) => {
	// Length of team to be added
	const teamLength = teamMemberArray.length;

	const handleRoleChange = (e, id) => {
		const { value } = e.target;
		setTeamMemberArray((prev) => {
			return prev.map((tm) => {
				if (tm.id === id) {
					return {
						...tm,
						team_role: value,
					};
				}
				return tm;
			});
		});
	};

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
						value={teamName}
						onChange={(e) => setTeamName(e.target.value)}
						type="text"
						id="save-team"
						name="name"
						placeholder="Team Name"
					/>
					<h2>{`Selected (${teamLength})`}</h2>
				</div>
				<div className="create-team-picked"></div>
				<div className="added-team-list">
					{teamMemberArray.map((team) => {
						return (
							<table key={team.id}>
								<tbody>
									<tr className="teams-employee-card">
										<td className="teams-employee">
											<a>
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
											</a>
										</td>
										<td className="recognition-btn">
											<RecognitionIcon
												style={{
													height: '20px',
													width: '20px',
												}}
											/>
										</td>
										<td className="teams-container">
											<select
												onChange={(e) =>
													handleRoleChange(e, team.id)
												}
												value={team.team_role}>
												<option value="Member">
													Member
												</option>
												<option value="Manager">
													Manager
												</option>
											</select>
										</td>
										<td className="teams-container">
											<h3 className="teams">Teams (0)</h3>
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
