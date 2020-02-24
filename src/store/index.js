import { combineReducers } from 'redux'
import { userReducer } from './reducers/user-reducer'
import { recogReducer } from './reducers/recog-reducer'
import { feedReducer } from './reducers/feed-reducer'

export const reduxReducer = combineReducers({user: userReducer, recog: recogReducer, liveFeed: feedReducer})