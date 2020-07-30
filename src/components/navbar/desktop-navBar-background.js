import React from "react"
import { Link } from "gatsby"
import Logo from "../../images/zooty-logo.svg"

import DesktopStyles from "./desktop-nav.module.scss"

const DesktopNav = () => (
  <nav className={`${DesktopStyles.nav} ${DesktopStyles.navWithBackground}`}>
    <div>
      <Link to="/" activeClassName={DesktopStyles.active}>
        Home
      </Link>
      <Link to="/shop/" activeClassName={DesktopStyles.active}>
        Shop
      </Link>
    </div>

    <div>
      <Link to="/videos/" activeClassName={DesktopStyles.active}>
        Events
      </Link>

      <Link to="/about/" activeClassName={DesktopStyles.active}>
        About
      </Link>
    </div>
  </nav>
)

export default DesktopNav
