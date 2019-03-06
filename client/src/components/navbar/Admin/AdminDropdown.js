import React from "react"
import { Link } from "react-router-dom"

import {
  ROUTE_ADMIN_USERS,

} from "routes"


export default props => (
  <li className="nav-item dropdown">
    <Link className="nav-link dropdown-toggle" to="#" id="adminDropdown"
      data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">

      Admin
    </Link>

    <div className="dropdown-menu dropdown-menu-right text-right"
      aria-labelledby="adminDropdown">

      <Link className="dropdown-item" to={ROUTE_ADMIN_USERS}>Users</Link>
    </div>
  </li>
)



// TODO: +translate
