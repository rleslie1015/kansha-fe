import {
	ORG_UPDATE_LOGO_START,
	ORG_UPDATE_LOGO_SUCCESS,
	ORG_UPDATE_LOGO_FAILURE,
	ORG_UPDATE_LOGO_BAD_CONTENT,
} from '../actions/org-actions';

const initialState = {
	name: '',
	industry: '',
	company_size: '',
	primary_color: '',
	secondary_color: '',
	logo_url: '',
	isUploading: false,
	isUpdating: false,
	error: null,
};

export const orgReducer = (state = initialState, action) => {
	switch (action.type) {
		case ORG_UPDATE_LOGO_START:
			return {
				...state,
				isUploading: true,
				error: null,
			};
		case ORG_UPDATE_LOGO_SUCCESS:
			return {
				...state,
				logo_url: action.payload,
				isUploading: false,
				error: null,
			};
		case ORG_UPDATE_LOGO_FAILURE:
			return {
				...state,
				isUploading: false,
				error: action.payload,
			};
		case ORG_UPDATE_LOGO_BAD_CONTENT:
			return {
				...state,
				isUploading: false,
				uploadError: {
					type: action.type,
					message: `Invalid filetype: ${action.payload}. `,
				},
			};
		default:
			return state;
	}
};
