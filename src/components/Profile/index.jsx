import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Profile } from './Profile';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useSelector } from 'react-redux';

export const PeerProfile = ({ match }) => {
	const [profile, setProfile] = useState();

	const { id } = match.params;
	const { profile: userProfile } = useSelector(state => state.user);

	useEffect(() => {
		if (userProfile.id.toString() !== id) {
			axiosWithAuth()
				.get(`/profile/${id}`)
				.then(({ data }) => setProfile(data.peer));
		}
	}, [id, userProfile]);

	if (userProfile.id.toString() === id) {
		return <Redirect to="/profile" />;
	}

	if (profile) {
		return <Profile {...{ profile }} isPeer />;
	} else {
		return <>loading...</>;
	}
};

export const UserProfile = connect(({ user }) => ({ ...user }), {})(Profile);

export { Profile };
