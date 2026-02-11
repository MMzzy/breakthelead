import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import HomeIcon from "./HomeIcon";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <HomeIcon className="home-icon" /> HOME
            </Link>
          </li>
          <div className="nav-right">
            <li className="nav-item">
              <Link className="nav-link" to="/SERVICES">
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                ABOUT
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
