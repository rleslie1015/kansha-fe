import { USER_LOGIN } from '../actions/user-actions';

const initialState = {
	profile: {},
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOGIN:
			return {
				...state,
				profile: action.payload,
			};
		default:
			return state;
	}
};
