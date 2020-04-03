import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Profile } from './Profile';

export const PeerProfile = ({ match }) => {
	const [profile] = useState();

	if (profile) {
		return <Profile {...{ profile }} isPeer />;
	} else {
		return <>loading...</>;
	}
};

export const UserProfile = connect(({ user }) => ({ ...user }), {})(Profile);

export { Profile };
