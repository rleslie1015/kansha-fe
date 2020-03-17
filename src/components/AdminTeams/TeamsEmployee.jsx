import React, { useState } from 'react';

// Icon Imports
import { ReactComponent as HideIcon } from '../../assets/TeamsIcons/hide.svg';
import { ReactComponent as DeleteIcon } from '../../assets/TeamsIcons/delete.svg';
import { ReactComponent as GroupIcon } from '../../assets/TeamsIcons/Group.svg';
import { ReactComponent as RecognitionIcon } from '../../assets/TeamsIcons/recognition.svg';

//
import Modal from '../Modal';
import RecogModal from '../RecogModal/index';

const TeamsEmployee = props => {
	const [modal, setModal] = useState(false);

	return (
		<tr className="teams-employee-card">
			<td className="teams-employee">
				<label>
					<input type="checkbox" class="css-checkbox" />
					<i></i>
				</label>
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
					onClick={() => setModal(!modal)}
					style={{
						height: '20px',
						width: '20px',
					}}
				/>
				{modal && (
					<Modal close={setModal}>
						<RecogModal profile={props.profile} />
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

export default TeamsEmployee;
