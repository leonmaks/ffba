import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route } from "react-router-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import reduxThunk from "redux-thunk"
import axios from "axios"

import * as serviceWorker from "./serviceWorker"

import App from "components/App"
import Home from "components/Home"
import SignUp from "components/SignUp"
import SignIn from "components/SignIn"
import Dashboard from "components/Dashboard"
import reducers from "reducers"

import authGuard from "./components/HOCs/authGuard"

const jwtToken = localStorage.getItem("JWT_TOKEN")
axios.defaults.headers.common["Authorization"] = jwtToken

ReactDOM.render(
  <Provider store={createStore(reducers, {
    auth: {
      token: jwtToken,
      isAuthenticated: jwtToken ? true : false,
    }
  }, applyMiddleware(reduxThunk))}>
    <BrowserRouter>
      <App>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/dashboard" component={authGuard(Dashboard)} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"))

// TODO: If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
