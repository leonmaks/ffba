import React from "react"

import AuthDropdown from "./AuthDropdown"
import SignIn from "./SignIn"


export default props => (
  props.auth.isAuthenticated ?
    <AuthDropdown username={props.auth.username} signOut={props.signOut} /> :
    <SignIn />
)



// TODO: translation
