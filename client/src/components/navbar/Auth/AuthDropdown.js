import React from "react"
import { Link } from "react-router-dom"

import {
  ROUTE_ABOUT,
  ROUTE_DEFAULT,

} from "routes"


export default props => (
  <li className="nav-item dropdown">
    <Link className="nav-link dropdown-toggle" to="#" id="authDropdown"
      data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">

      {props.username}
    </Link>

    <div className="dropdown-menu dropdown-menu-right text-right"
      aria-labelledby="authDropdown">

      <Link className="dropdown-item" to="/">Password Change</Link>

      <Link className="dropdown-item"
        to={ROUTE_DEFAULT}
        onClick={props.signOut}>Logout</Link>

      <div className="dropdown-divider"></div>

      <Link className="dropdown-item" to={ROUTE_ABOUT}>About</Link>
    </div>
  </li>
)



// TODO:
