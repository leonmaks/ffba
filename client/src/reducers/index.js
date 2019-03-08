import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose
} from "redux"

import thunk from "redux-thunk"


import auth from "reducers/auth"
// import dashboardReducer from "./dashboard"

import { preloadedState } from "reducers/auth"

//
// REDUCERS
export const reducers = combineReducers({
  auth,
  // dash: dashboardReducer,
})
// TODO: ---: export default combineReducers({
//     auth,
//     // dash: dashboardReducer,
// })

// TODO: ---: const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// TODO: ---: const store_ = createStoreWithMiddleware(reducers)

// TODO: ---: const store_ = createStore(reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunk));

const store = createStore(reducers, { auth: preloadedState() }, composeEnhancers(applyMiddleware(thunk)))

export default store
