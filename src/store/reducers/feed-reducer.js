import {
	FEED_LOAD_START,
	FEED_LOAD_SUCCESS,
	FEED_LOAD_FAILURE,
	POST_DATA_LOAD_SUCCESS,
	POST_DATA_LOAD_FAILURE,
	FEED_REACT_START,
	FEED_REACT_SUCCESS,
	FEED_REACT_FAILURE,
	FEED_REACT_REMOVE_START,
	FEED_REACT_REMOVE_SUCCESS,
	FEED_REACT_REMOVE_FAILURE,
	FEED_COMMENT_START,
	FEED_COMMENT_SUCCESS,
	FEED_COMMENT_FAILURE,
	FEED_EVENT_NEW_REC,
	FEED_EVENT_NEW_REACTION,
	FEED_EVENT_NEW_COMMENT,
	FEED_EVENT_REMOVE_REACTION,
	FEED_EVENT_REMOVE_COMMENT,
	FEED_EVENT_REMOVE_REC,
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
		case POST_DATA_LOAD_SUCCESS:
			let { id, type } = action.data;
			return {
				...state,
				[type]: { ...state[type], [id]: action.payload },
			};
		case POST_DATA_LOAD_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case FEED_REACT_START:
			return {
				...state,
				isLoading: true,
			};
		case FEED_REACT_SUCCESS:
			return {
				...state,
				isLoading: false,
				reactions: {
					...state.reactions,
					/*[action.payload.rec_id]: [
						...state.reactions[action.payload.rec_id],
						action.payload,
					],*/
				},
			};
		case FEED_REACT_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case FEED_REACT_REMOVE_START:
			return {
				...state,
				isLoading: true,
			};
		case FEED_REACT_REMOVE_SUCCESS:
			return {
				...state,
				isLoading: false,
				/*
				reactions: {
					...state.reactions,
					[action.payload.rec_id]: state.reactions[
						action.payload.rec_id
					].filter(r => !(r.id === action.payload.id)),
				},
				*/
			};
		case FEED_REACT_REMOVE_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case FEED_COMMENT_START:
			return {
				...state,
				isLoading: true,
			};
		case FEED_COMMENT_SUCCESS:
			return {
				...state,
				isLoading: false,
			};
		case FEED_COMMENT_FAILURE:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};
		case FEED_EVENT_NEW_REC:
			return {
				...state,
				feed: [action.payload, ...state.feed],
			};
		case FEED_EVENT_NEW_REACTION:
			return {
				...state,
				reactions: {
					...state.reactions,
					[action.payload.rec_id]: [
						...state.reactions[action.payload.rec_id],
						action.payload,
					],
				},
			};
		case FEED_EVENT_NEW_COMMENT:
			return {
				...state,
				comments: {
					...state.comments,
					[action.payload.rec_id]: [
						...state.comments[action.payload.rec_id],
						action.payload,
					],
				},
			};
		case FEED_EVENT_REMOVE_REC:
			return {
				...state,
				isLoading: false,
				feed: state.feed.filter(
					rec => !(rec.id === parseInt(action.payload.id)),
				),
			};
		case FEED_EVENT_REMOVE_REACTION:
			return {
				...state,
				isLoading: false,
				reactions: {
					...state.reactions,
					[action.payload.rec_id]: state.reactions[
						action.payload.rec_id
					]?.filter(r => !(r.id === parseInt(action.payload.id))),
				},
			};
		case FEED_EVENT_REMOVE_COMMENT:
			return {
				...state,
				isLoading: false,
				comments: {
					...state.comments,
					[action.payload.rec_id]: state.comments[
						action.payload.rec_id
					].filter(r => !(r.id === parseInt(action.payload.id))),
				},
			};
		default:
			return state;
	}
};
