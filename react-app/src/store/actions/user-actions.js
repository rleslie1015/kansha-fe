import { axiosWithAuth } from '../../utils/axiosWithAuth';

//ACTION TYPES

// Login and Auth
export const USER_AUTH_START = 'USER_AUTH_START';
export const USER_AUTH_SUCCESS = 'USER_AUTH_SUCCESS';
export const USER_AUTH_FAILURE = 'USER_AUTH_FAILURE';
export const USER_LOGIN_START = 'USER_LOGIN_START';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

// Registration
export const USER_LOGIN_NEWUSER = 'USER_LOGIN_NEWUSER';
export const USER_ONBOARDING_START = 'USER_ONBOARDING_START';
export const USER_ONBOARDING_SUCCESS = 'USER_ONBOARDING_SUCCESS';
export const USER_ONBOARDING_FAILURE = 'USER_ONBOARDING_FAILURE';

// User Data
export const USER_UPDATE_PICTURE_START = 'USER_UPDATE_PICTURE_START';
export const USER_UPDATE_PICTURE_SUCCESS = 'USER_UPDATE_PICTURE_SUCCESS';
export const USER_UPDATE_PICTURE_FAILURE = 'USER_UPDATE_PICTURE_FAILURE';

// ACTION CREATORS

/* dispatch is a function provide by the redux thunk middleware */

/* this function is charge of the auth flow once redirected by auth0 */
export const authorizeUser = auth => dispatch => {
	dispatch({ type: USER_AUTH_START });

	/* call back function. Is ran after the auth0 hastring is read */
	const authActions = err => {
		if (err) {
			dispatch({ type: USER_AUTH_FAILURE, payload: err });
		} else {
			dispatch({ type: USER_AUTH_SUCCESS });
		}
	};
	
	/* Handle reading/parsing the auth0 hash string */
	/* Run callback after */
	auth.handleAuthentication(authActions);
};

/* 
Login refers to retrieving intial user data from our backend 
It is expected a user is already authenticated at this point
User data is everything needed to render a users profile
*/
export const login = userProfile => dispatch => {
	dispatch({ type: USER_LOGIN_START });
	/* 
	login is split in to two functions this allows us to delay finishing login process until after onboarding 
	*/
	finishLogin(dispatch)	
};

const finishLogin = dispatch => {
	/* Using the auth0 token we hit our /profile endpoint */
	axiosWithAuth()
		.get('/profile')
		.then(res => {
			if (res.data.user) {
				/* If user data exists we save that data to the store */
				dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.user });
			} else { 
				/* 
					If a user has no data a new user action dispatched
					eventually this will triger the onboarding process.
				*/
				dispatch({ type: USER_LOGIN_NEWUSER, payload: res.data })
			};
		})
		.catch(err => {
			console.log(err);
			dispatch({ type: USER_LOGIN_FAILURE, payload: err });
		});
};

/* This handles onboarding a user */
export const onboard = creds => dispatch => {
	dispatch({ type: USER_ONBOARDING_START });
	axiosWithAuth()
		.post('/users', creds)
		.then(res => {
			/* This doesn't dispatch any state because it is only updating ui state */
			dispatch({ type: USER_ONBOARDING_SUCCESS });
			/* If the onboarding is a success we finsih the login process */
			finishLogin(dispatch);
		})
		.catch(err => {
			console.log(err);
			dispatch({ type: USER_ONBOARDING_FAILURE, payload: err });
		});
};


