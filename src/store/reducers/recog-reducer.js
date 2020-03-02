import {RECOG_SEND_START, RECOG_SEND_SUCCESS, RECOG_SEND_FAILURE} from '../actions/recog-actions';

const initialState = {
    recognition: null,
    isSending: false,
    error: null
};

export const recogReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECOG_SEND_START:
            return {
                ...state,
                isSending: true
            }
        case RECOG_SEND_SUCCESS:
            return {
                ...state,
                recognition: action.payload,
                isSending: false
            }
        case RECOG_SEND_FAILURE:
            return {
                ...state,
                error: action.payload,
                isSending: false
            }
        default:
            return state;
    }
}