import React from "react";
import './Navbar.css'
import { useLocation, useNavigate } from "react-router";

const Nav = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToSection = (id) => {
        if (location.pathname === "/") {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
            navigate("/");
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    };

    return (
        <nav>
            <ul>
                <div className="nav-left">
                    <li><button className="nav-item" onClick={() => scrollToSection("home")}>Håkon</button></li>
                </div>
                <div className="nav-right">
                    <li><button className="nav-item" onClick={() => scrollToSection("home")}>Hjem</button></li>
                    <li><button className="nav-item" onClick={() => scrollToSection("projects")}>Prosjekter</button></li>
                    <li><button className="nav-item" onClick={() => scrollToSection("about")}>Om meg</button></li>
                    <li><button className="nav-item" onClick={() => scrollToSection("contact")}>Kontakt</button></li>
                </div>
            </ul>
        </nav>
    )
};

export default Nav;