import React, { Component } from "react"
import { reduxForm, Field } from "redux-form"
import { connect } from "react-redux"
import { compose } from "redux"

import * as authActions from "actions/auth"
import CustomInput from "components/common/CustomInput"


class SignIn extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  async onSubmit(formData) {
    console.log("onSubmit: formData", formData)

    await this.props.signIn(formData, )
    if (this.props.auth.isAuthenticated) {
      // TODO: navigate to nextUrl (not to home page!)
      this.props.history.push("/")
    }
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>

        <fieldset>
          <Field
            name="username"
            type="text"
            id="username"
            label="Username"
            placeholder="username"
            component={CustomInput} />
        </fieldset>

        <fieldset>
          <Field
            name="password"
            type="password"
            id="password"
            label="Password"
            placeholder="password"
            component={CustomInput} />
        </fieldset>

        {this.props.auth.errorMessage ? <div className="alert alert-danger">{this.props.auth.errorMessage}</div> : null}

        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    )
  }
}


function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}


export default compose(
  connect(mapStateToProps, authActions),
  reduxForm({
    form: "signin",
    // onSubmit: data => {
    //   console.log("onSubmit", data)
    //   console.log("authActions.signIn", authActions.signIn)
    //   authActions.signIn(data)
    // },
  }),
)(SignIn)
