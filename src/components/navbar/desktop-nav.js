import React from "react"
import { Link } from "gatsby"
import Logo from "../../images/zooty-logo.svg"

import DesktopStyles from "./desktop-nav.module.scss"

const DesktopNav = () => (
  <nav className={DesktopStyles.nav}>
    <div>
      <Link to="/" activeClassName={DesktopStyles.active}>
        Home
      </Link>
      <Link to="/shop/" activeClassName={DesktopStyles.active}>
        Shop
      </Link>
      <Link to="/shop/" activeClassName={DesktopStyles.active}>
        Art
      </Link>
    </div>

    <div>
      <Link to="/shop/" activeClassName={DesktopStyles.active}>
        Sea Moss
      </Link>
      <Link to="/videos/" activeClassName={DesktopStyles.active}>
        Videos
      </Link>
      <Link to="/videos/" activeClassName={DesktopStyles.active}>
        Barbers
      </Link>

      <Link to="/about/" activeClassName={DesktopStyles.active}>
        About
      </Link>
    </div>
  </nav>
)

export default DesktopNav
