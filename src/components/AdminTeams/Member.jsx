import React from 'react';
import Modal from '../Modal';
import RecogModal from '../RecogModal/index';

// Icon import
import { ReactComponent as RecognitionIcon } from '../../assets/TeamsIcons/recognition.svg';

function Member({ modal, setModal, profile, teamDetails }) {
	return (
		<table>
			{/* <tr className="indiv-team">
				<td>
					{member.first_name} {member.last_name}
				</td>
				<td>{member.team_role}</td>
				{/* <td>{teamDetails.name}</td> */}
			{/* <td className="recognition-btn">
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
			</tr> */}
		</table>
	);
}

export default Member;
