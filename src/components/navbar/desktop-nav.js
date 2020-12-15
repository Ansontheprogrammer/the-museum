import React, { useState } from "react";
import { Link } from "gatsby";
import Logo from "../../images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import DesktopStyles from "./desktop-nav.module.scss";

const DesktopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={DesktopStyles.header}>
      <Link to="/">
        <img className={DesktopStyles.logo} src={Logo} />
      </Link>
      <button
        className={DesktopStyles.toggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav
        className={`${DesktopStyles.nav} ${isOpen ? DesktopStyles.open : ""}`}
      >
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
        <Link to="/about/" activeClassName={DesktopStyles.active}>
          About
        </Link>
      </nav>
    </header>
  );
};

export default DesktopNav;
