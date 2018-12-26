import React from "react"

import { Link } from "react-router-dom"

class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav-wrapper amber darken-4">
        <Link to="/" className="brand-logo left">
          <i className="material-icons">home</i>
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/modele">Modele</Link>
          </li>

          <li>
            <Link to="/mesure">Mesure</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
