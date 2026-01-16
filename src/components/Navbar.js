import React from "react"
import {MdHome} from 'react-icons/md';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-extend-lg">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            <MdHome/> HOME
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;