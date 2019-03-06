import React, { Component } from "react"
import { reduxForm, Field } from "redux-form"
import { connect } from "react-redux"
import { compose } from "redux"
import GoogleLogin from "react-google-login"
import FacebookLogin from "react-facebook-login"

import * as actions from "../actions"
import CustomInput from "./common/CustomInput"

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.responseGoogle = this.responseGoogle.bind(this)
    this.responseFacebook = this.responseFacebook.bind(this)
  }

  async onSubmit(formData) {
    await this.props.signIn(formData)
    if (!this.props.errorMessage) {
      this.props.history.push("/dashboard")
    }
  }

  async responseGoogle(res) {
    await this.props.oauthGoogle(res.accessToken)
    if (!this.props.errorMessage) {
      this.props.history.push("/dashboard")
    }
  }

  responseFacebook(res) {
    if (!this.props.errorMessage) {
      this.props.history.push("/dashboard")
    }
  }

  render() {

    const { handleSubmit } = this.props

    return (
      <div className="row">
        <div className="col">
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
                name="email"
                type="text"
                id="email"
                label="Email"
                placeholder="example@example.com"
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

            {this.props.errorMessage ?
              <div className="alert alert-danger">
                {this.props.errorMessage}
              </div> : null}

            <button type="submit" className="btn btn-primary">Sign In</button>
          </form>
        </div>

        <div className="col">
          <div className="text-center">
            <div className="alert alert-primary">
              Or sign in using third-party services
            </div>
            <GoogleLogin
              clientId="1234567891"
              buttonText="Google"
              onSuccess={ this.reponseGoogle }
              onFailure={ this.responseGoogle }
              className="btn btn-outline-danger"
            />
            <FacebookLogin
              appId="171111112345654433"
              autoLoad={true}
              textButton="Facebook"
              fields="name, email, picture"
              callback={ this.responseFacebook }
              cssClass="btn btn-outline-primary"
            />
          </div>
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage,
  }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "signin" }),
)(SignIn)
