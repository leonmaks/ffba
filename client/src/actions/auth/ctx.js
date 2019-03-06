import axios from "axios"

import { LOCAL_STORAGE_KEY } from "settings"


export const setAuthCtx = (username, token, isSuperuser) => {
  // TODO: +logging
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ username, token, isSuperuser }))
  axios.defaults.headers.common["Authorization"] = token
}

export const removeAuthCtx = () => {
  // TODO: +logging
  window.localStorage.removeItem(LOCAL_STORAGE_KEY)
  delete axios.defaults.headers.common["Authorization"]
}

export const restoreAuthCtx = () => {
  // TODO: +logging
  const data_ = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY))
  if (data_) {
    if (data_.token) {
      axios.defaults.headers.common["Authorization"] = data_.token
    }
  }

  return data_
}
