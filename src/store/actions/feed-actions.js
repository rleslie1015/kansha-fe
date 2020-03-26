import { axiosWithAuth } from '../../utils/axiosWithAuth';

// Data Fetching Actions
export const FEED_LOAD_START = 'FEED_LOAD_START';
export const FEED_LOAD_SUCCESS = 'FEED_LOAD_SUCCESS';
export const FEED_LOAD_FAILURE = 'FEED_LOAD_FAILURE';
export const POST_DATA_LOAD_SUCCESS = 'POST_DATA_LOAD_SUCCESS';
export const POST_DATA_LOAD_FAILURE = 'POST_DATA_LOAD_FAILURE';

// Server Sent Events Actions
export const FEED_EVENT_NEW_REC = 'FEED_EVENT_NEW_REC';
export const FEED_EVENT_NEW_COMMENT = 'FEED_EVENT_NEW_COMMENT';
export const FEED_EVENT_NEW_REACTION = 'FEED_EVENT_NEW_REACTION';
export const FEED_EVENT_REMOVE_REC = 'FEED_EVENT_REMOVE_REC';
export const FEED_EVENT_REMOVE_COMMENT = 'FEED_EVENT_REMOVE_COMMENT';
export const FEED_EVENT_REMOVE_REACTION = 'FEED_EVENT_REMOVE_REACTION';

// User Input Actions
export const FEED_REACT_START = 'FEED_REACT_START';
export const FEED_REACT_SUCCESS = 'FEED_REACT_SUCCESS';
export const FEED_REACT_FAILURE = 'FEED_REACT_FAILURE';
export const FEED_REACT_REMOVE_START = 'FEED_REACT_REMOVE_START';
export const FEED_REACT_REMOVE_SUCCESS = 'FEED_REACT_REMOVE_SUCCESS';
export const FEED_REACT_REMOVE_FAILURE = 'FEED_REACT_REMOVE_FAILURE';
export const FEED_COMMENT_START = 'FEED_COMMENT_START';
export const FEED_COMMENT_SUCCESS = 'FEED_COMMENT_SUCCESS';
export const FEED_COMMENT_FAILURE = 'FEED_COMMENT_FAILURE';

// Fetches the initial feed loads the 25 newest Recognitions
export const loadLiveFeed = () => dispatch => {
	dispatch({ type: FEED_LOAD_START });
	axiosWithAuth()
		.get('/feed')
		.then(res => {
			dispatch({ type: FEED_LOAD_SUCCESS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: FEED_LOAD_FAILURE, payload: err });
		});
};

// This loads the Reactions and Comments for the feed card
export const loadPostData = id => dispatch => {
	axiosWithAuth()
		.get('/comments/' + id)
		.then(res => {
			dispatch({
				type: POST_DATA_LOAD_SUCCESS,
				data: { id, type: 'comments' },
				payload: res.data,
			});
		})
		.catch(err => {
			dispatch({ type: POST_DATA_LOAD_FAILURE, payload: err });
		});
	axiosWithAuth()
		.get('/reactions/' + id)
		.then(res => {
			dispatch({
				type: POST_DATA_LOAD_SUCCESS,
				data: { id, type: 'reactions' },
				payload: res.data,
			});
		})
		.catch(err => {
			dispatch({ type: POST_DATA_LOAD_FAILURE, payload: err });
		});
};

// These are for reacting/commeting to posts it has little effect on state
// The actual action to represent the event is sent as an SSE
// Mostly used to help keep all async code inside the store, and log errors
// Could be used for a loading state

export const reactToPost = (id, rec_id) => dispatch => {
	dispatch({ type: FEED_REACT_START });
	axiosWithAuth()
		.post('/reactions', { rec_id, date: new Date(Date.now()) })
		.then(() => {
			dispatch({
				type: FEED_REACT_SUCCESS,
				payload: { id, rec_id },
			});
		})
		.catch(err => {
			dispatch({ type: FEED_REACT_FAILURE, payload: err });
		});
};

export const removeReaction = (id, rec_id) => dispatch => {
	dispatch({ type: FEED_REACT_REMOVE_START });
	axiosWithAuth()
		.delete(`/reactions/${id}?rec_id=${rec_id}`, { rec_id })
		.then(() => {
			dispatch({
				type: FEED_REACT_REMOVE_SUCCESS,
				payload: { id, rec_id },
			});
		})
		.catch(err => {
			dispatch({ type: FEED_REACT_REMOVE_FAILURE, payload: err });
		});
};

export const addComment = (rec_id, message, cb) => dispatch => {
	dispatch({ type: FEED_COMMENT_START });
	axiosWithAuth()
		.post('/comments', { rec_id, message, date: new Date(Date.now()) })
		.then(() => {
			dispatch({ type: FEED_COMMENT_SUCCESS });
			cb();
		})
		.catch(err => {
			dispatch({ type: FEED_COMMENT_FAILURE, payload: err });
		});
};

// These are the listeners for the ServerSentEvents
// sse is an instance of EventSource that is subscribed to our live feed
// for more info on SSEs: https://mzl.la/2M5bWiW
export const liveFeedListeners = sse => dispatch => {
	// Listening for NEW events
	sse.addEventListener(FEED_EVENT_NEW_REC, event =>
		dispatch({
			type: FEED_EVENT_NEW_REC,
			payload: JSON.parse(event.data),
		}),
	);

	sse.addEventListener(FEED_EVENT_NEW_COMMENT, event =>
		dispatch({
			type: FEED_EVENT_NEW_COMMENT,
			payload: JSON.parse(event.data),
		}),
	);

	sse.addEventListener(FEED_EVENT_NEW_REACTION, event => {
		dispatch({
			type: FEED_EVENT_NEW_REACTION,
			payload: JSON.parse(event.data),
		});
	});

	// Listening for REMOVE events
	sse.addEventListener(FEED_EVENT_REMOVE_REC, event =>
		dispatch({
			type: FEED_EVENT_REMOVE_REC,
			payload: JSON.parse(event.data),
		}),
	);

	sse.addEventListener(FEED_EVENT_REMOVE_COMMENT, event =>
		dispatch({
			type: FEED_EVENT_REMOVE_COMMENT,
			payload: JSON.parse(event.data),
		}),
	);

	sse.addEventListener(FEED_EVENT_REMOVE_REACTION, event =>
		dispatch({
			type: FEED_EVENT_REMOVE_REACTION,
			payload: JSON.parse(event.data),
		}),
	);
};
