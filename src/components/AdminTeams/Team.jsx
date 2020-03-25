import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

// Icon Imports
import { ReactComponent as SettingsIcon } from '../../assets/TeamsIcons/teamsettings.svg';
import { ReactComponent as TeamsIcon } from '../../assets/TeamsIcons/Vector.svg';
import { ReactComponent as RecognitionIcon } from '../../assets/TeamsIcons/recognition.svg';

// Modal imports
import Modal from '../Modal';
import RecogModal from '../RecogModal/index';

function Team({ name, id, managers, count, profile }) {
	const [modal, setModal] = useState(false);

	const history = useHistory();

	const handleDelete = e => {
		e.preventDefault();
		axiosWithAuth().delete(`/teams/${id}`);
	};

	const handleClick = e => {
		e.preventDefault();
		history.push(`/teams/${id}`);
	};

	return (
		<tr className="team-list-table">
			<td className="team-name">
				<h3>{name}</h3>
			</td>
			<td className="team-icons">
				<SettingsIcon />
				<TeamsIcon onClick={handleClick} />
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
				<h5>
					Manager: <span>{`${managers}`}</span>
				</h5>
			</td>
			<td>
				<h5>{`Members (${count})`}</h5>
			</td>
			<td>
				<button className="btn-remove" onClick={handleDelete}>
					Remove
				</button>
			</td>
		</tr>
	);
}

export default Team;
