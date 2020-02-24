import {axiosWithAuth } from '../../utils/axiosWithAuth';

export const RECOG_SEND_START = 'RECOG_SEND_START';
export const RECOG_SEND_SUCCESS = 'RECOG_SEND_SUCCESS';
export const RECOG_SEND_FAILURE = 'RECOG_SEND_FAILURE';

export const sendRecog = recognition => dispatch => {
    dispatch({ type: RECOG_SEND_START})
    axiosWithAuth()
      .post('/rec', recognition)
      .then(res => {
          dispatch({ type: RECOG_SEND_SUCCESS, payload: res.data});
      })
      .catch(err => {
          dispatch({ type: RECOG_SEND_FAILURE, payload: err});
      });
};