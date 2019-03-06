import React, { Component } from "react"
import { connect } from "react-redux"

import Home from "components/navbar/Home"
import Sales from "components/navbar/Sales"

import Admin from "components/navbar/Admin"
import Auth from "components/navbar/Auth"

import * as authActions from "actions/auth"


class Navbar extends Component {

  render() {

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="nav navbar-nav mr-auto">
              <li className="nav-item active">
                <Home />
              </li>

              <Sales auth={this.props.auth} />
            </ul>

            <ul className="nav navbar-nav">
              <Admin />
              <Auth auth={this.props.auth} signOut={this.props.signOut} />
            </ul>

          </div>
        </div>
      </nav>
    )
  }
}


export default connect(state => ({ auth: state.auth }), authActions)(Navbar)
