/** @format */

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1150px" });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const renderNavLinks = () => {
    /* Dynamically render links and classnames for mobile vs web */
    const listClassName = isMobile ? "nav__list_mobile" : "nav__list__web";
    const linkClassName = "nav__link";
    const buttonClassName = "nav__cta";

    return (
      <ul className={listClassName}>
        <li>
          <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className={linkClassName}
            onClick={closeMobileMenu}
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
            My Cart
          </NavLink>
        </li>

        <li>
          <NavLink
            to="*"
            className={`${linkClassName} ${buttonClassName}`}
            onClick={closeMobileMenu}
          >
            My Account
          </NavLink>
        </li>
      </ul>
    );
  };

  /* Return JSX elements */
  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          Grapple Shop
        </NavLink>

        {/* Render hamburger menu if Mobile */}
        {isMobile && (
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <IoMenu />
          </div>
        )}

        {/* If mobile, add show-menu class to the list and render */}
        {isMobile ? (
          <div
            className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
            id="nav-menu"
          >
            {renderNavLinks()}
            {/* <div className="nav__close" id="nav-close" onClick={toggleMenu}>
              <IoClose />
            </div> */}
          </div>
        ) : (
          /* Otherwise, render nav links normally */
          renderNavLinks()
        )}
      </nav>
    </header>
  );
};

export default Navbar;
