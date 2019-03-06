import React from "react"
import { connect } from "react-redux"

import Dummy from "components/common/Dummy"


const Allow = props => {

  let allow_ = false

  if (props.auth.isSuperuser) {
    allow_ = true
  }

  return (
    <Dummy>
      {allow_ && props.children}
    </Dummy>
  )
}


export default connect(state => ({ auth: state.auth }))(Allow)
