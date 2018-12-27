import React from 'react'

import { Link } from 'react-router-dom'

class NavBar extends React.Component {
	render() {
		return (
			<nav className="nav-wrapper teal darken-1">
				<Link to="/" className="brand-logo right">
					<i className="material-icons">home</i>
				</Link>
			</nav>
		)
	}
}

export default NavBar
