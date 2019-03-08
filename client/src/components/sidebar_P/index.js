import React from "react"

import { BRAND_LABEL } from "defs"

export default (props) => {
  return (

    <nav id="sidebar">

      <div className="sidebar-header">
        <a className="navbar-brand" href="/" aria-label={BRAND_LABEL}>{BRAND_LABEL}</a>
      </div>

      <ul className="list-unstyled components">
        <p>Dummy Heading</p>
        <li className="active">
          <a href="/" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Home</a>
          <ul className="collapse list-unstyled" id="homeSubmenu">
            <li>
              <a href="/">Home 1</a>
            </li>
            <li>
              <a href="/">Home 2</a>
            </li>
            <li>
              <a href="/">Home 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">About</a>
          <a href="/u" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
          <ul className="collapse list-unstyled" id="pageSubmenu">
            <li>
              <a href="/">Page 1</a>
            </li>
            <li>
              <a href="/">Page 2</a>
            </li>
            <li>
              <a href="/">Page 3</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">Portfolio</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>

      <ul className="list-unstyled CTAs">
        <li>
          <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a>
        </li>
        <li>
          <a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a>
        </li>
      </ul>
    </nav>
  )
}
