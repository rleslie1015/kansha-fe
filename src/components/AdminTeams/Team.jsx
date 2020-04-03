import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useDispatch } from 'react-redux';
import { finishLogin } from '../../store/actions/user-actions';
// Icon Imports
import { ReactComponent as SettingsIcon } from '../../assets/TeamsIcons/teamsettings.svg';
import { ReactComponent as TeamsIcon } from '../../assets/TeamsIcons/Vector.svg';
import { ReactComponent as RecognitionIcon } from '../../assets/TeamsIcons/recognition.svg';

// Modal imports
import Modal from '../Modal';
import RecogModal from '../RecogModal/index';
import DeleteModal from './DeleteModal';

function Team({ name, id, managers, count, profile, setTeams }) {
	const [modal, setModal] = useState(false);
	const [deleteModal, setDeleteModal] = useState(false);
	const history = useHistory();
	const dispatch = useDispatch();

	const handleDeleteTeam = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.delete(`/teams/${id}`)
			.then(() => {
				setTeams((previous) => previous.filter((tms) => tms.id !== id));
				setDeleteModal(false);
				finishLogin(dispatch);
				/* I added this "finishLogin(dispatch)" here because I needed the state to refresh before a user checks their profile.
				However, it's hacky. I highly recommend updating the store instead so that other components will update without refresh */
			});
	};

	const handleClick = (e) => {
		e.preventDefault();
		history.push(`/teams/${id}`);
	};

	const handleDeleteClick = (e) => {
		e.preventDefault();
		setDeleteModal(true);
	};

	return (
		<>
			{deleteModal && (
				<DeleteModal
					setDeleteModal={setDeleteModal}
					deleteTeamFromOrg={true}
					handleDeleteTeam={handleDeleteTeam}
				/>
			)}
			<tr className="team-list-table">
				<td className="team-name">
					<h3>{name}</h3>
				</td>
				<td className="team-icons">
					<SettingsIcon style={{ cursor: 'pointer' }} />
					<TeamsIcon
						onClick={handleClick}
						style={{ cursor: 'pointer' }}
					/>
				</td>
				<td className="manager-container">
					<RecognitionIcon
						onClick={() => setModal(!modal)}
						style={{
							height: '20px',
							width: '20px',
							marginRight: '10px',
							cursor: 'pointer',
						}}
					/>
					{managers.map((mgr) => {
						return (
							modal && (
								<Modal close={setModal}>
									<RecogModal profile={mgr} />
								</Modal>
							)
						);
					})}
					<h5>
						Manager:{' '}
						{managers.map((manager) => (
							<span key={manager.id}>{manager.first_name}</span>
						))}
					</h5>
				</td>
				<td>
					<h5>{`Members (${count})`}</h5>
				</td>
				<td>
					<button className="btn-remove" onClick={handleDeleteClick}>
						Remove
					</button>
				</td>
			</tr>
		</>
	);
}

export default Team;
