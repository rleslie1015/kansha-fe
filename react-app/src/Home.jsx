import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from './store/actions/user-actions';
import Onboarding from './Onboarding';
import { Profile } from './Components/Profile';

function Home({ login, user, history }) {
	useEffect(() => {
        login();
    }, [login]);

    console.log(user.profile)

	if (user.isLoggingIn) {
		return (
			<>Loading...</>
		)
	} else if(user.isOnboarding) {
		return (
			<Onboarding/>
		)
	} else if(user.profile) {
		return (
			<Profile/>
		)
	}
	else {
		return (
			<>An Error Occured</>
		)
	}
}
export default connect(state => ({ ...state }), { login })(Home);
