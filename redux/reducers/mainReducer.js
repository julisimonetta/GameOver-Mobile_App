import { combineReducers } from "redux";
import gamesReducer from './gamesReducer.js'
import userReducer from './userReducer.js'

const mainReducer = combineReducers({
	gamesReducer,
	userReducer
})

export default mainReducer;