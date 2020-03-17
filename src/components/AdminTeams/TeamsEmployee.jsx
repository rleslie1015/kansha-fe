import React from 'react';

// Icon Imports
import { ReactComponent as HideIcon } from '../../assets/TeamsIcons/hide.svg';
import { ReactComponent as DeleteIcon } from '../../assets/TeamsIcons/delete.svg';
import { ReactComponent as GroupIcon } from '../../assets/TeamsIcons/Group.svg';
import { ReactComponent as RecognitionIcon } from '../../assets/TeamsIcons/recognition.svg';

const TeamsEmployee = props => {
	return (
		<tr className="teams-employee-card">
			<td className="teams-employee">
				<input type="checkbox" id="checkbox" />
				<label for="checkbox"></label>
				<img
					src={props.data.profile_picture}
					alt="profile img"
					className="teams-profile-picture"
				/>
				<h3>
					{props.data.first_name} {props.data.last_name}
				</h3>
			</td>
			<td className="teams-employee-details">
				<h3 className="job-title">{props.data.job_title}</h3>
			</td>
			<td className="teams-container">
				<h3 className="teams">Teams (0)</h3>
			</td>
			<td className="recognition-btn">
				<RecognitionIcon
					style={{
						height: '20px',
						width: '20px',
					}}
				/>
			</td>
			<td className="teams-employee-icons">
				<HideIcon style={{ marginRight: '20px' }} />
				<DeleteIcon style={{ marginRight: '20px' }} />
				<GroupIcon />
			</td>
		</tr>
	);
};

export default TeamsEmployee;
