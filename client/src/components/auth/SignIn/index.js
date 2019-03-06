import React, { Component } from "react"
import { Form, Field } from "react-final-form"
import { compose } from "redux"
import { connect } from "react-redux"

import Styles from "./Styles"
import { COPYRIGHT_YEARS } from "settings"
import * as authActions from "actions/auth"


class SignIn extends Component {

  errorMessage = null

  onSubmit = async formData => {
    try {
      await this.props.signIn({ username: formData.username, password: formData.password, isSuperuser: formData.isSuperuser })
    } catch (error) {
      this.errorMessage = error.message
    }

    if (this.props.auth.isAuthenticated) {
      // TODO: navigate to nextUrl (not to home page!)
      this.props.history.push("/")
    }
  }

  render() {
    return (
      <Styles>
        <div className="text-center">
          <Form
            onSubmit={this.onSubmit}
            render={({ handleSubmit, form, submitting, pristine, }) => (

              <form className="form-signin" onSubmit={handleSubmit}>

                <img className="mb-4" src="/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

                <Field name="username">
                  {({ input, meta }) => (
                    <div className="form-group">
                      <label htmlFor="inputUsername" className="sr-only">Username</label>
                      <input {...input} id="inputUsername" type="text" className="form-control" placeholder="Username" required autoFocus></input>
                    </div>
                  )}
                </Field>

                <Field name="password">
                  {({ input, meta }) => (
                    <div className="form-group">
                      <label htmlFor="inputPassword" className="sr-only">Password</label>
                      <input  {...input} id="inputPassword" type="password" className="form-control" placeholder="Password" required></input>
                    </div>
                  )}
                </Field>

                <div className="checkbox mb-3"><label><input type="checkbox" value="remember-me" /> Remember me</label></div>

                {this.errorMessage &&
                  <div className="alert alert-danger">{this.errorMessage}</div>}

                <div className="buttons">
                  <button type="submit" className="btn btn-primary" disabled={submitting}>Sign In</button>
                  <button type="button"
                    className="btn btn-primary"
                    onClick={form.reset}
                    disabled={submitting || pristine}>Reset</button>
                </div>
                <p className="mt-5 mb-3 text-muted">&copy; {COPYRIGHT_YEARS}</p>
              </form>
            )}
          />
        </div>
      </Styles>
    )
  }
}


export default compose(connect(state => ({ auth: state.auth }), authActions))(SignIn)
