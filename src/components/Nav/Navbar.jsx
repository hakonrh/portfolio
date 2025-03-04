import React from "react";
import { Link } from "react-router";
import './Navbar.css'

const Nav = () => {
    return (
        <nav>
            <ul>
                <div className="nav-left">
                    <li><Link to=".home" className="nav-item">Håkon</Link></li>
                </div>
                <div className="nav-right">
                    <li><Link to=".home" className="nav-item">Hjem</Link></li>
                    <li><Link to="#" className="nav-item">Prosjekter</Link></li>
                    <li><Link to="#" className="nav-item">Om meg</Link></li>
                    <li><Link to="#" className="nav-item">Kontakt</Link></li>
                </div>
            </ul>
        </nav>
    )
};

export default Nav;