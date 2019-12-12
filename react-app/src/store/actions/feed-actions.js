import { axiosWithAuth } from '../../utils/axiosWithAuth'

export const FEED_LOAD_START = 'FEED_LOAD_START';
export const FEED_LOAD_SUCCESS = 'FEED_LOAD_SUCCESS';
export const FEED_LOAD_FAILURE = 'FEED_LOAD_FAILURE';
export const FEED_EVENT_NEW_REC = 'FEED_EVENT_NEW_REC';
export const FEED_EVENT_NEW_COMMENT = 'FEED_EVENT_NEW_COMMENT';
export const FEED_EVENT_NEW_REACTION = 'FEED_EVENT_NEW_REACTION';
export const POST_DATA_LOAD_SUCCESS = 'POST_DATA_LOAD_SUCCESS';
export const POST_DATA_LOAD_FAILURE = 'POST_DATA_LOAD_FAILURE';

export const loadLiveFeed = () => dispatch => {
    dispatch({ type: FEED_LOAD_START})
    axiosWithAuth()
      .get('/feed')
      .then(res => {
          dispatch({ type: FEED_LOAD_SUCCESS, payload: res.data});
      })
      .catch(err => {
          dispatch({ type: FEED_LOAD_FAILURE, payload: err});
      });
}

export const loadPostData = id => dispatch => {
    axiosWithAuth()
      .get('/comments/' + id)
      .then(res => {
          dispatch({ type: POST_DATA_LOAD_SUCCESS, data: {id, type: "comments"}, payload: res.data});
      })
      .catch(err => {
          dispatch({ type: POST_DATA_LOAD_FAILURE, payload: err});
      });
      axiosWithAuth()
      .get('/reactions/' + id)
      .then(res => {
          dispatch({ type: POST_DATA_LOAD_SUCCESS, data: {id, type: "reactions"}, payload: res.data});
      })
      .catch(err => {
          dispatch({ type: POST_DATA_LOAD_FAILURE, payload: err});
      });
}