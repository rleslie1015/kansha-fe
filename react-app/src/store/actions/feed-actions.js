import { axiosWithAuth } from '../../utils/axiosWithAuth'

export const FEED_LOAD_START = 'FEED_LOAD_START';
export const FEED_LOAD_SUCCESS = 'FEED_LOAD_SUCCESS';
export const FEED_LOAD_FAILURE = 'FEED_LOAD_FAILURE';
export const FEED_EVENT_NEW_REC = 'FEED_EVENT_NEW_REC';

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