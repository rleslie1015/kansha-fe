import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { authorizeUser } from '../../store/actions/user-actions';
import { Redirect } from 'react-router-dom';
import Auth from '../../utils/auth';
import Loader from 'react-loader-spinner';

const auth = new Auth();

function AuthLoader({ authorizeUser, authenticated, error }) {
	useEffect(() => {
		authorizeUser(auth);
	}, [authorizeUser]);

	if (authenticated) {
		return <Redirect to="/home" />;
	} else if (!authenticated && error) {
		return <Redirect to="/" />;
	} else {
		return (
			<Loader
				type="Rings"
				color="#EE4D71"
				height={100}
				width={100}
				timeout={10000}
			/>
		);
	}
}

export default connect(({ user }) => ({ ...user }), { authorizeUser })(
	AuthLoader,
);
