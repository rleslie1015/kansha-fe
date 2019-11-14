import { USER_LOGIN, USER_ONBOARDING_START, USER_ONBOARDING_SUCCESS, USER_ONBOARDING_FAILURE } from '../actions/user-actions';

const initialState = {
	profile: {},
	isOnboarding: false,
	error: null,
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOGIN:
			return {
				...state,
				profile: action.payload,
			};
		case USER_ONBOARDING_START:
			return {
				...state,
				isOnboarding: true,
			}
		case USER_ONBOARDING_SUCCESS:
			return {
				...state,
				isOnboarding: false,
			}
		case USER_ONBOARDING_FAILURE:
			return {
				...state,
				isOnboarding: false,
				error: 'Could not onboard User',
			}
		default:
			return state;
	}
};
