import { AUTH_SIGN_IN, AUTH_SIGN_OUT } from "actions/auth/types"
import { restoreAuthCtx } from "actions/auth/ctx"


export const DEFAULT_STATE = {
  isAuthenticated: false,
  username: null,
  token: null,
  isSuperuser: false,
}

export const preloadedState = () => {
  const state_ = { ...DEFAULT_STATE }
  const ctx_ = restoreAuthCtx()
  if (ctx_) {
    state_.isAuthenticated = true
    state_.username = ctx_.username
    state_.token = ctx_.token
    state_.isSuperuser = ctx_.isSuperuser
  }
  return state_
}

export default (state = DEFAULT_STATE, action) => {
  // TODO: log events

  switch (action.type) {

    case AUTH_SIGN_IN:
      // console.log("[AuthReducer] SIGN IN action; username=", action.username, ", token=", action.token)
      return {
        ...state,
        isAuthenticated: true,
        username: action.username,
        token: action.token,
        isSuperuser: action.isSuperuser,
      }

    case AUTH_SIGN_OUT:
      // console.log("[AuthReducer] SIGN OUT action")
      return {
        ...state,
        ...DEFAULT_STATE,
      }

    default:
      return state
  }
}
