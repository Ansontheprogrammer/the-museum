import React from "react"
import { Link } from "gatsby"
import { FaHome, FaInfoCircle, FaCalendarAlt } from "react-icons/fa"
import { TiImageOutline, TiShoppingCart } from "react-icons/ti";

import NavStyles from "./mobile-nav.module.scss"

const MobileNav = () => (
  <nav className={NavStyles.nav}>
    <Link to="/" className={NavStyles.link} activeClassName={NavStyles.active}>
      <FaHome />
    </Link>
    <Link
      to="/about/"
      className={NavStyles.link}
      activeClassName={NavStyles.active}
    >
      <FaInfoCircle />
    </Link>
    <Link
      to="/shop/"
      className={NavStyles.link}
      activeClassName={NavStyles.active}
    >
      <TiShoppingCart />
    </Link>
    <Link
      to="/videos/"
      className={NavStyles.link}
      activeClassName={NavStyles.active}
    >
      <FaCalendarAlt />
    </Link>
  </nav>
)

export default MobileNav
