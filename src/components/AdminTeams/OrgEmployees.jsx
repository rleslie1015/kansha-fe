import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Icon Imports
import { ReactComponent as HideIcon } from '../../assets/TeamsIcons/hide.svg';
import { ReactComponent as DeleteIcon } from '../../assets/TeamsIcons/delete.svg';
import { ReactComponent as GroupIcon } from '../../assets/TeamsIcons/Group.svg';
import { ReactComponent as RecognitionIcon } from '../../assets/TeamsIcons/recognition.svg';

//
import Modal from '../Modal';
import RecogModal from '../RecogModal/index';

const OrgEmployees = ({
	data,
	checked,
	setChecked,
	profile,
	empButton,
	teamMemberArray,
	employees,
}) => {
	const [modal, setModal] = useState(false);

	const addTeamMember = () => {
		if (checked) {
			employees.map(person => {
				if (data.id === person.id) {
					teamMemberArray.push(person);
				}
				return teamMemberArray;
			});
			console.log(teamMemberArray, 'array');
		}
	};

	return (
		<tr className="teams-employee-card">
			<td className="teams-employee">
				<label
					onClick={() => {
						setChecked(!checked);
						addTeamMember();
					}}
					style={
						empButton ? { display: 'none' } : { display: 'block' }
					}>
					<input type="checkbox" className="css-checkbox" />
					<i></i>
				</label>
				<Link to={`/profile/${profile.id}`}>
					<div className="teams-employee-info">
						<img
							src={data.profile_picture}
							alt="profile img"
							className="teams-profile-picture"
						/>
						<h3>
							{data.first_name} {data.last_name}
						</h3>
					</div>
				</Link>
			</td>
			<td className="teams-employee-details">
				<h3 className="job-title">{data.job_title}</h3>
			</td>
			<td className="teams-container">
				<h3 className="teams">Teams (0)</h3>
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
			<td className="teams-employee-icons">
				<HideIcon style={{ marginRight: '20px' }} />
				<DeleteIcon style={{ marginRight: '20px' }} />
				<GroupIcon />
			</td>
		</tr>
	);
};

export default OrgEmployees;
