import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = (props) => {
  return (
    <header className={`header-${props.bgColor || "white"}`}>
      <div className="container">
        <div className="nav">
          <div className="nav1">
            <NavLink to="/">
              <img src="./assets/images/gifs/logo2.png" alt="Logo" />
            </NavLink>
          </div>
          <div className="nav2">
            <div className="menu">
              <HashLink to="/#about">about Me</HashLink>
            </div>
            <div className="menu">
              <HashLink to="/#services">services</HashLink>
            </div>
            <div className="menu">
              <HashLink to="/#blog">Blogs</HashLink>
            </div>
            <div className="menu">
              <NavLink to="/portfolio">Portifolio</NavLink>
            </div>
            <div className="menu">
              <HashLink to="/#contact">contact Me</HashLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
