import React from "react"

import Sales from "components/navbar/Sales"
import Auth from "components/navbar/Auth"


export default (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark rounded">
      <div className="container-fluid">

        <button type="button" id="sidebarCollapse" className="navbar-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-align-justify"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="nav navbar-nav mr-auto">
            <li className="nav-item active">
              <Sales />
            </li>
          </ul>

          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Auth />
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}
