import { combineReducers } from "redux"

import auth from "reducers/auth"
// import dashboardReducer from "./dashboard"


export default combineReducers({
    auth,
    // dash: dashboardReducer,
})
