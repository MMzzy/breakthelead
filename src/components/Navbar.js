import React from "react"
import {MdHome} from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-extend-lg">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#home">
                            <MdHome/> HOME
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;