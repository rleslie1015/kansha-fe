import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { update } from '../store/actions/user-actions';
import Modal from './Modal';
import FileUpload from './FileUpload';

function Settings() {
	const { profile } = useSelector(({ user }) => ({
		...user,
	}));
	const dispatch = useDispatch();

	const [form, setForm] = useState({ first_name: '', last_name: '' });
	const [modal, setModal] = useState(false);

	const handleChange = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await dispatch(update(profile.id, form));
	};

	useEffect(() => {
		setForm({
			first_name: profile.first_name,
			last_name: profile.last_name,
			profile_picture: profile.profile_picture,
		});
	}, [profile]);

	return (
		<main id="settings">
			<h3>Settings</h3>
			<section>
				<h4>Edit Profile</h4>
				<form onSubmit={handleSubmit}>
					<figure onClick={() => setModal(!modal)}>
						<img src={profile.profile_picture} alt="user profile" />
					</figure>
					<div>
						<input
							label="First Name*"
							placeholder="e.g. Jane"
							name="first_name"
							margin="normal"
							onChange={handleChange}
							value={form.first_name}
						/>
						<input
							label="Last Name*"
							placeholder="e.g. Doe"
							name="last_name"
							margin="normal"
							onChange={handleChange}
							value={form.last_name}
						/>
					</div>
					<button className="btn-onboarding-confirm" type="submit">
						Save Changes
					</button>
				</form>
			</section>
			{modal && (
				<Modal close={setModal}>
					<FileUpload />
				</Modal>
			)}
		</main>
	);
}

const mapStateToProps = (state) => {
	return {
		...state,
	};
};

export default connect(mapStateToProps, { update })(Settings);
