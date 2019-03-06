import { setAuthCtx, removeAuthCtx, restoreAuthCtx } from "./ctx"


export const AUTH_SIGN_IN = "AUTH_SIGN_IN"
export const AUTH_SIGN_OUT = "AUTH_SIGN_OUT"


export const authSignIn = (username, token, isSuperuser) => {
  setAuthCtx(username, token, isSuperuser)
  return { type: AUTH_SIGN_IN, username, token, isSuperuser }
}

export const authSignOut = () => {
  removeAuthCtx()
  return { type: AUTH_SIGN_OUT }
}

export const authInit = () => {
  const data_ = restoreAuthCtx()
  return data_ ? {
    type: AUTH_SIGN_IN,
    username: data_.username,
    token: data_.token,
    isSuperuser: data_.isSuperuser,
  } : null
}
