import React from "react"
import { Link } from "gatsby"
import Logo from "../../images/logo.png"

import DesktopStyles from "./desktop-nav.module.scss"

const DesktopNav = () => (
  <nav className={DesktopStyles.nav}>
      <Link to="/" activeClassName={DesktopStyles.active}>
        Home
      </Link>
      <Link to="/shop/" activeClassName={DesktopStyles.active}>
        Shop
      </Link>
      <Link to="/art/" activeClassName={DesktopStyles.active}>
        Art
      </Link>
      <Link to="/seamoss/" activeClassName={DesktopStyles.active}>
        Sea Moss
      </Link>
      <Link to="/videos/" activeClassName={DesktopStyles.active}>
        Videos
      </Link>
      <Link to="/barbers/" activeClassName={DesktopStyles.active}>
        Barbers
      </Link>
      <Link to="/checkout/" activeClassName={DesktopStyles.active}>
        Checkout
      </Link>
      <Link to="/gallery/" activeClassName={DesktopStyles.active}>
        Gallery
      </Link>
      <Link to="/about/" activeClassName={DesktopStyles.active}>
        About
      </Link>
  </nav>
)

export default DesktopNav
