import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/actions/user-actions';
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';

function Login({ isLoggingIn, login, profile, component: Component }) {
	useEffect(() => {
		login();
	}, [login]);

	if (localStorage.getItem('id_token') && !isLoggingIn && profile) {
		return <Component />;
	} else if (!localStorage.getItem('id_token') && !isLoggingIn) {
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

export default connect(({ user }) => ({ ...user }), { login })(Login);
