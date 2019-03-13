import { LOCAL_STORAGE_KEY } from "../../defs"


export const setAuthCtx = (username, token, isSuperuser) => {
  // TODO: +logging
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ username, token, isSuperuser }))
  // TODO: ---:
  console.log(`store to LOCAL STORAGE: ${LOCAL_STORAGE_KEY}=`, JSON.stringify({ username, token, isSuperuser }))
}

export const removeAuthCtx = () => {
  // TODO: +logging
  window.localStorage.removeItem(LOCAL_STORAGE_KEY)
  // TODO: ---:
  console.log(`remove from LOCAL STORAGE: ${LOCAL_STORAGE_KEY}`)
}

export const restoreAuthCtx = () => {
  // TODO: +logging
  const data_ = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY))
  if (data_) {
    // TODO: ---:
    // console.log("restore from LOCAL STORAGE", data_)
  }
  return data_
}
