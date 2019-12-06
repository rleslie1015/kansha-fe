import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from '../../store/actions/user-actions';
import { Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import SideBar from '../Sidebar'

function Login({ isLoggingIn, isOnboarding, login, profile, component: Component, history }) {
	useEffect(() => {
		login();
	}, [login]);

	if (localStorage.getItem('id_token') && !isLoggingIn && profile) {
		return (<>
        <SideBar />
        <Component history={ history } />
        </>);
	} else if (!localStorage.getItem('id_token') && !isLoggingIn) {
		return <Redirect to="/" />;
	} else if (isOnboarding) {
        return <Redirect to="/onboarding" />
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
