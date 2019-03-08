import { post } from "rest/rp"
import { AUTH_SIGN_IN } from "rest/defs"

import { authSignIn, authSignOut } from "./types"


export const signIn = data => {
  return async dispatch => {
    try {

      // 1) Make HTTP request and use the data {username, password} to send to our backend (BE)
      // 2) Take the BE's response (jwtToken is here now!)
      // const res_ = await axios.post(`${SERVER_URL}/auth/signin`, data)

      console.log("data=", data)

      const res_ = await post(AUTH_SIGN_IN, data, { json: true })
      console.log("[ActionCreator] got from server:", res_)

      // 3) Dispatch 'user just signed in' (with jwtToken)
      dispatch(authSignIn(data.username, res_.token, res_.isSuperuser))

    } catch (error) {

      // TODO: +logging
      console.log("[ActionCreator] signIn error:", error)

      // Sign out in case of error
      dispatch(authSignOut())

      let error_ = null
      if (error.response) {
        // TODO: error cases from server - ?
        error_ = new Error("Invalid username/password")
      } else if (error.request) {
        error_ = new Error("Server not responding")
      }
      throw error_ || error
    }
  }
}


export const signOut = () => {
  // console.log("[ActionCreator] signOut")
  return async dispatch => {
    dispatch(authSignOut())
  }
}
