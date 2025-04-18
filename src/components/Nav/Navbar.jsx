import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router";
import { slide as Menu } from "react-burger-menu";

const Nav = ({ theme, setTheme }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 750);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 750);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    };

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

    const ThemeButton = () => (
        <button onClick={toggleTheme} className="theme-toggle">
            {theme === "dark" ? "☀️ Lys" : "🌙 Mørk"}
        </button>
    );

    return (
        <nav className="navbar">
            {isMobile ? (
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
                        <div className="menu-item"><ThemeButton /></div>
                    </Menu>
                </div>
            ) : (
                <ul className="nav-links">
                    <li onClick={() => scrollToSection("home")}>Hjem</li>
                    <li onClick={() => scrollToSection("projects")}>Prosjekter</li>
                    <li onClick={() => scrollToSection("about")}>Om meg</li>
                    <li onClick={() => scrollToSection("contact")}>Kontakt</li>
                    <li><ThemeButton /></li>
                </ul>
            )}
        </nav>
    );
};

export default Nav;
