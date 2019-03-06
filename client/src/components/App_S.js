import React from "react"

// import Sidebar from "components/sidebar"
import Navbar from "components/navbar"

export default (props) => {
  return (
    <div className="wrapper">

      {/* <Sidebar /> */}

      <div id="content">

        <Navbar />

        <div className="container-fluid">
          {props.children}
        </div>


      </div>
    </div>
  )
}
