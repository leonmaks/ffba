import React from "react"

import Allow from "components/common/Allow"
import AdminDropdown from "./AdminDropdown"


export default props => (
  <Allow group="admin">
    <AdminDropdown />
  </Allow>
)
