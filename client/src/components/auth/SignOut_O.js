import React, { Component } from "react"
import { Form, Field } from "react-final-form"
import { compose } from "redux"
import { connect } from "react-redux"

import Styles from "./Styles"
import { COPYRIGHT_YEARS } from "settings"
import * as authActions from "actions/auth"


const SignOut = props => {
  console.log("SignOut")
  props.history.push("/")
}


export default compose(connect((state) => ({ auth: state.auth }), authActions))(SignOut)
