import React, { useState } from "react";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router";
import { slide as Menu } from "react-burger-menu";

const Nav = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id) => {
        setMenuOpen(false);
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
        <div id="burger-menu-wrapper">
            <Menu 
                right 
                isOpen={menuOpen} 
                onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
            >
                <button className="menu-item" onClick={() => scrollToSection("home")}>Hjem</button>
                <button className="menu-item" onClick={() => scrollToSection("projects")}>Prosjekter</button>
                <button className="menu-item" onClick={() => scrollToSection("about")}>Om meg</button>
                <button className="menu-item" onClick={() => scrollToSection("contact")}>Kontakt</button>
            </Menu>
        </div>
    );
};

export default Nav;
