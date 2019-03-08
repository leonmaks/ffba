import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import * as serviceWorker from "serviceWorker"

import store from "reducers"

import {
  ROUTE_SALES,
  ROUTE_ADMIN_USERS,
  ROUTE_SIGNIN,
  ROUTE_ABOUT
} from "routes"

import App from "components/App"

import Home from "components/Home"

import Users from "components/admin/Users"

import Sales from "components/sales"
// import DailyTotals from "components/sales/DailyTotals"
import SignIn from "components/auth/SignIn"

import About from "components/About"

import Page404 from "components/Page404"

//
// Init REST
// import { init as initREST } from "rest/rp"
// initREST()

// import SignUp from "components/SignUp"
// import Dashboard from "components/Dashboard"

// import authGuard from "./components/HOCs/authGuard"

// const jwtToken = localStorage.getItem("JWT_TOKEN")


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route path={ROUTE_ADMIN_USERS} component={Users} exact />
          <Route path={ROUTE_SALES} component={Sales} exact />
          <Route path={ROUTE_ABOUT} component={About} exact />
          <Route path={ROUTE_SIGNIN} component={SignIn} exact />
          <Route path="/" component={Home} exact />
          <Route component={Page404} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>, document.getElementById("root"))

// TODO: If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

//        <Route exact path="/signup" component={SignUp} />
//        <Route exact path="/signin" component={SignIn} />
//        <Route exact path="/dashboard" component={authGuard(Dashboard)} />
