import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/logo.png";

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/">
        <img src={Logo} alt="logo" className="logo" />
      </Link>
      <div className="links">
        <NavLink exact to="/" activeClassName="nav-active">
          acceuil
        </NavLink>
        <NavLink exact to="/about" activeClassName="nav-active">
          a propos
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;
