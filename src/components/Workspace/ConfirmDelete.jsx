import React from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const ConfirmDelete = ({ name, id, setTeam, close }) => {
	const handleConfirm = async e => {
		e.preventDefault();
		await axiosWithAuth().delete(`/employees/${id}`);
		setTeam(prev => prev.filter(emp => emp.id !== id));
		close(false);
	};
	return (
		<section className="delete-modal">
			<p>
				Are you sure you would like to remove {name} from your
				organization?
			</p>
			<button onClick={handleConfirm}>Confirm</button>
			<button onClick={() => close(false)}>Cancel</button>
		</section>
	);
};

export default ConfirmDelete;
