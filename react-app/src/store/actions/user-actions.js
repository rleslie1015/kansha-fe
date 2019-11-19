import { axiosWithAuth } from '../../utils/axiosWithAuth';
import axios from 'axios';

export const USER_LOGIN_START = 'USER_LOGIN_START';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_NEWUSER = 'USER_LOGIN_NEWUSER';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const USER_ONBOARDING_START = 'USER_ONBOARDING_START';
export const USER_ONBOARDING_SUCCESS = 'USER_ONBOARDING_SUCCESS';
export const USER_ONBOARDING_FAILURE = 'USER_ONBOARDING_FAILURE';

export const login = userProfile => dispatch => {
	dispatch({ type: USER_LOGIN_START });
	axiosWithAuth()
		.get('/profile')
		.then(res => {
            if (res.data.user) dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
            else dispatch({type: USER_LOGIN_NEWUSER, payload: res.data })
		})
		.catch(err => {
			console.log(err);
			dispatch({ type: USER_LOGIN_FAILURE, payload: err });
		});
};

export const onboard = creds => dispatch => {
	dispatch({ type: USER_ONBOARDING_START });
	axiosWithAuth()
		.post('/users', creds)
		.then(res => {
			dispatch({ type: USER_ONBOARDING_SUCCESS, payload: res.data });
		})
		.catch(err => {
			console.log(err);
			dispatch({ type: USER_ONBOARDING_FAILURE, payload: err });
		});
};
