import React from "react"

import Navbar from "components/navbar"


export default props => {
  return (
    <div className="wrapper">

      <div id="content">

        <Navbar />

        <div className="container-fluid">
          {props.children}
        </div>

      </div>
    </div>
  )
}
