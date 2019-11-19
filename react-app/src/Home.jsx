import React, { useEffect } from 'react';
import Auth from './auth';
import { connect } from 'react-redux';
import { login } from './store/actions/user-actions';
import Onboarding from './Onboarding';
import Profile from './Profile';

const auth = new Auth();

function Home({ login, user, history }) {
	useEffect(() => {
		auth.handleAuthentication();
        login(auth.getProfile());
    }, [login]);

    console.log(user.profile)

	if (user.isLoggingIn) {
		return (
			<>Loading...</>
		)
	} else if(user.isOboarding) {
		return (
			<Onboarding/>
		)
	} else if(user.profile) {
		return (
			<Profile/>
		)
	} else if(user.error) {
		history.push('/')
		return (
			<>Loading...</>
		)
	} else {
		return (
			<>Loading...</>
		)
	}
}
export default connect(state => ({ ...state }), { login })(Home);
