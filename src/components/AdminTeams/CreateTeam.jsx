import React, { useState } from 'react';
import OrganizationEmployeesTable from './OrganizationEmployeesTable';
import { Link } from 'react-router-dom';

const CreateTeam = ({
	employees,
	teamMemberArray,
	setTeamMemberArray,
	addTeamMember,
}) => {
	const [teamName, setTeamName] = useState('');

	const handleChange = event => {
		setTeamName(event.target.value);
	};

	const handleSubmit = () => {
		console.log(teamName);
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
				<input
					type="text"
					id="save-team"
					name="teamname"
					placeholder="Team Name"
					onChange={event => handleChange(event)}
				/>
				<button
					type="submit"
					form="save-team"
					onSubmit={() => handleSubmit()}>
					save team
				</button>
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
