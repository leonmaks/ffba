import React from "react"
import { Link } from "react-router-dom"

import { ROUTE_SIGNIN } from "routes"


export default () => (
  <li className="nav-item">
    <Link className="nav-link" to={ROUTE_SIGNIN}>Sign In</Link>
  </li>
)



// TODO: +translation
