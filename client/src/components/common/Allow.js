import React from "react"
import { connect } from "react-redux"

import Mux from "components/common/Mux"


const Allow = props => {

  let allow_ = false

  if (props.auth.isSuperuser) {
    allow_ = true
  }

  return (
    <Mux>
      {allow_ && props.children}
    </Mux>
  )
}


export default connect(state => ({ auth: state.auth }))(Allow)
