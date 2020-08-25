import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
  <div className="container">
<div className="inner-header">
<div className="logo">
  <Link to="/">THOMASERIKSEN</Link>
  </div>
  <div className="navigation">
  <nav>
  <Link to="/">Home</Link>  
  <Link to="/Projects">Projects</Link>  
  <Link to="/About">About</Link>  
  <Link to="/Contact">Contact</Link>  
  </nav>
  </div>
  </div>
  </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
