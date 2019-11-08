import { combineReducers } from 'redux'
import { userReducer } from './reducers/user-reducer'

export const reduxReducer = combineReducers({user: userReducer})