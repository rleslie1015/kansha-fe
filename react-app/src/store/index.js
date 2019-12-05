import { combineReducers } from 'redux'
import { userReducer } from './reducers/user-reducer'
import { recogReducer } from './reducers/recog-reducer'

export const reduxReducer = combineReducers({user: userReducer, recog: recogReducer})