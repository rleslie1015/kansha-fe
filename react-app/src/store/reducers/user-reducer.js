import {
	USER_AUTH_START,
	USER_AUTH_SUCCESS,
	USER_AUTH_FAILURE,
	USER_LOGIN_START,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAILURE,
	USER_LOGIN_NEWUSER,
	USER_ONBOARDING_START,
	USER_ONBOARDING_SUCCESS,
	USER_ONBOARDING_FAILURE,
} from '../actions/user-actions';

const initialState = {
	profile: null,
	isOnboarding: false,
	isLoggingIn: false,
	error: null,
	authenticated: false,
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_AUTH_START:
			return {
				...state,
				authenticated: false,
			};
		case USER_AUTH_SUCCESS:
			return {
				...state,
				authenticated: true,
			};
		case USER_AUTH_FAILURE:
			return {
				...state,
				authenticated: false,
				error: action.payload
			};
		case USER_LOGIN_START:
			return {
				...state,
				isLoggingIn: true,
			};
		case USER_LOGIN_SUCCESS:
			return {
				...state,
				profile: action.payload,
				isLoggingIn: false,
			};
		case USER_LOGIN_NEWUSER:
			return {
				...state,
				isOnboarding: true,
				isLoggingIn: false,
			};
		case USER_LOGIN_FAILURE:
			return {
				...state,
				error: action.payload,
				isLoggingIn: false,
			};
		case USER_ONBOARDING_START:
			return {
				...state,
				isOnboarding: true,
			};
		case USER_ONBOARDING_SUCCESS:
			return {
				...state,
				isLoggingIn: true,
				isOnboarding: false,
			};
		case USER_ONBOARDING_FAILURE:
			return {
				...state,
				isOnboarding: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
