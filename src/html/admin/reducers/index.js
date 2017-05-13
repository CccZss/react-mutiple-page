import todos from "./todos"
import { combineReducers } from "redux"

const adminApp = combineReducers({
	todos,
})

export default adminApp