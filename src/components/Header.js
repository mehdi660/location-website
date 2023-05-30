import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="conteneur-hdr">
        <div className="logo"></div>
        <div className="navigation">
          <ul>
            <NavLink
              to="/"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>Acceuil</li>
            </NavLink>
            <NavLink
              to="/about"
              className={(nav) => (nav.isActive ? "nav-active" : "")}
            >
              <li>A Propos</li>
            </NavLink>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;