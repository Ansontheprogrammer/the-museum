import React from "react"
import { Link } from "gatsby"
import { FaHome, FaPaintBrush, FaTree, FaCalendar} from "react-icons/fa"
import { TiImageOutline, TiShoppingCart } from "react-icons/ti";

import NavStyles from "./mobile-nav.module.scss"

const MobileNav = () => (
  <nav className={NavStyles.nav}>
    <Link to="/" className={NavStyles.link} activeClassName={NavStyles.active}>
      <FaHome />
    </Link>
    <Link
      to="/art/"
      className={NavStyles.link}
      activeClassName={NavStyles.active}
    >
      <FaPaintBrush />
    </Link>
    <Link
      to="/shop/"
      className={NavStyles.link}
      activeClassName={NavStyles.active}
    >
      <TiShoppingCart />
    </Link>
    <Link
      to="/seamoss/"
      className={NavStyles.link}
      activeClassName={NavStyles.active}
    >
      <FaTree />
    </Link>
    <Link
      to="/barbers/"
      className={NavStyles.link}
      activeClassName={NavStyles.active}
    >
      <FaCalendar />
    </Link>
  </nav>
)

export default MobileNav
