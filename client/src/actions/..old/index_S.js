import axios from "axios"
import {
  AUTH_SIGN_UP,
  AUTH_SIGN_IN,
  AUTH_SIGN_OUT,
  AUTH_ERROR,
  DASHBOARD_GET_DATA
} from "./types"

export const oauthGoogle = data => {
  return async dispatch => {
    console.log("we received", data)
    const res = await axios.post("http://localhost:5000/users/oauth/google", {
      access_token: data,
    })

    console.log("res", res)
  }
}

export const signIn = data => {
  return async dispatch => {
    try {

      console.log("[ActionCreator] signIn called!")

      // 1) Make HTTP request and use the data to send it along to our backend (BE)
      // 2) Take the BE's response (jwtToken is here now!)
      const res = await axios.post("http://localhost:5000/users/signin", data)

      console.log("[ActionCreator] signIn dispatched and action!")
      // 3) Dispatch 'user just signed in' (with jwtToken)
      dispatch({
        type: AUTH_SIGN_IN,
        payload: res.data.token,
      })

      // 4) Save the jwtToken into our localStorage
      localStorage.setItem("JWT_TOKEN", res.data.token)
      axios.defaults.headers.common["Authorization"] = res.data.token

    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: "Incorrectn username / password"
      })
    }
  }
}

export const getSecret = () => {
  return async dispatch => {
    try {
      console.log("[ActionCreator]: get secret from server")
      const res = await axios.get("http://localhost:5000/users/secret")
      console.log("res", res)

      dispatch ({
        type: DASHBOARD_GET_DATA,
        payload: res.data.secret,
      })
    } catch (error) {
      console.error("error", error)
    }
  }
}

export const signUp = data => {
  return async dispatch => {
    try {

      console.log("[ActionCreator] signUp called!")

      // 1) Make HTTP request and use the data to send it along to our backend (BE)
      // 2) Take the BE's response (jwtToken is here now!)
      const res = await axios.post("http://localhost:5000/users/signup", data)

      console.log("[ActionCreator] signUp dispatched and action!")
      // 3) Dispatch 'user just signed up' (with jwtToken)
      dispatch({
        type: AUTH_SIGN_UP,
        payload: res.data.token,
      })

      // 4) Save the jwtToken into our localStorage
      localStorage.setItem("JWT_TOKEN", res.data.token)
      axios.defaults.headers.common["Authorization"] = res.data.token

    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: "Email is already in use"
      })
    }
  }
}

export const signOut = () => {
  return dispatch => {
    localStorage.removeItem("JWT_TOKEN")
    axios.defaults.headers.common["Authorization"] = ""

    dispatch({
      type: AUTH_SIGN_OUT,
      payload: "",
    })
  }
}
