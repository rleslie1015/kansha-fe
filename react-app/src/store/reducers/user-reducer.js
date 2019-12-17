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
	USER_UPDATE_PICTURE_START,
	USER_UPDATE_PICTURE_SUCCESS,
	USER_UPDATE_PICTURE_FAILURE,
	USER_UPDATE_PICTURE_BAD_CONTENT,
} from '../actions/user-actions';


const initialState = {
	profile: null,
	isOnboarding: false,
	isOnboardingLoading: false,
	isLoggingIn: false,
	isUploading: false,
	error: null,
	authenticated: false,
};

export const userReducer = (state = initialState, action) => {

	switch (action.type) {
		/*
		dispatched by the authrizeUser action creator
		*/
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
				error: action.payload,
			};
		/*
		dispatched by the login action creator
		*/
		case USER_LOGIN_START:
			return {
				...state,
				isLoggingIn: true,
			};
		/*
		dispatched by the finish action creator
		*/
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
			};
		case USER_LOGIN_FAILURE:
			return {
				...state,
				error: action.payload,
				isLoggingIn: false,
			};
		/*
		dispatched by the onboard action creator
		*/
		case USER_ONBOARDING_START:
			return {
				...state,
				isOnboardingLoading: true,
			};
		case USER_ONBOARDING_SUCCESS:
			return {
				...state,
				isOnboardingLoading: false,
				isOnboarding: false,
			};
		case USER_ONBOARDING_FAILURE:
			return {
				...state,
				isOnboarding: false,
				error: action.payload,
			};
		/*
		dispatched by the uploadPicture action creator
		*/
		case USER_UPDATE_PICTURE_START:
			return {
				...state,
				isUploading: true,
				error: null,
			};
		case USER_UPDATE_PICTURE_SUCCESS:
			return {
				...state,
				profile: { ...state.profile, profile_picture: action.payload },
				isUploading: false,
				error: null,
			};
		case USER_UPDATE_PICTURE_FAILURE:
			return {
				...state,
				isUploading: false,
				error: action.payload,
			};
		case USER_UPDATE_PICTURE_BAD_CONTENT:
			return {
				...state,
				isUploading: false,
				uploadError: { type: action.type, message: `Invalid filetype: ${action.payload}. ` }
			};
		default:
			return state;
	}
};
