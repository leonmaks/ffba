import rp from "request-promise"

import { SERVER_URL, HEADER_AUTHORIZATION } from "./defs"

import store from "reducers"


const __compose_auth_headers = () => {
  const auth_store_ = store.getState().auth
  const auth_headers_ = {}
  if (auth_store_.isAuthenticated) {
    auth_headers_[HEADER_AUTHORIZATION] = `Bearer ${auth_store_.token}`
  }
  return auth_headers_
}


export const get = async (route, params) => {

  const auth_headers_ = __compose_auth_headers()

  // TODO: ---:
  // console.log("rest/rp GET: auth_headers=", auth_headers_)

  const options_ = {
    uri: `${SERVER_URL}${route}`,
    headers: {
      ...auth_headers_,
      ...params.headers,
    },
    json: params.json || false,
  }

  // console.log("options=", options_)

  // request to server - wait
  const res_ = await rp(options_)

  // TODO: ---:
  // console.log("rest/rp GET: res=", res_)

  return res_
}


export const post = async (route, body, params = {}) => {

  const auth_headers_ = __compose_auth_headers()

  // TODO: ---:
  // console.log("rest/rp POST: auth_headers=", auth_headers_)

  // compose request options
  const options_ = {
    method: "POST",
    uri: `${SERVER_URL}${route}`,
    body,
    headers: {
      ...auth_headers_,
      ...params.headers,
    },
    json: params.json || false,
  }

  // TODO: ---:
  // console.log("rest/rp POST: options=", options_)

  // request to server - wait
  const res_ = await rp(options_)

  // TODO: ---:
  // console.log("rest/rp POST: res=", res_)

  return res_
}
