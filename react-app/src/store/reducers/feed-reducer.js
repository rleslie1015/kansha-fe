import {
	FEED_LOAD_START,
	FEED_LOAD_SUCCESS,
	FEED_LOAD_FAILURE,
    FEED_EVENT_NEW_REC,
    POST_DATA_LOAD_SUCCESS,
    POST_DATA_LOAD_FAILURE,
} from '../actions/feed-actions';

const initialState = {
    feed: [],
    reactions: {},
    comments: {},
	isLoading: false,
};

export const feedReducer = (state = initialState, action) => {
	switch (action.type) {
		case FEED_LOAD_START:
			return {
				...state,
				isLoading: true,
			};
		case FEED_LOAD_SUCCESS:
			return {
				...state,
				isLoading: false,
				feed: [...action.payload],
			};
		case FEED_LOAD_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case FEED_EVENT_NEW_REC:
			return {
				...state,
				feed: [...action.payload, ...state.feed],
            };
        case POST_DATA_LOAD_SUCCESS:
            let { id, type } = action.data;
            return {
                ...state,
                [type]: {...state[type], [id]: action.payload} 
            }
		default:
			return state;
	}
};
