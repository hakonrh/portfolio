import React from "react";
import './Footer.css';
import email from "../../images/logos/email.png";
import github from "../../images/logos/github.png";

const Footer = () => {
    return (
        <div className="footer" id="contact">
            <p>Denne nettsiden er laget av Håkon Riis Haugen</p>
            <div className="contact-container">
                <div>Kontakt meg:
                    <div className="contact-links">
                        <div className="tech-image">
                            <a href="mailto:hukonriisu@gmail.com" className="tech-link"><img className="tech-logo" src={email} alt="my email" /></a>
                            <span>Email</span>
                        </div>
                        <div className="tech-image">
                            <a href="https://github.com/hakonrh" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={github} alt="my github profile" /></a>
                            <span>Github</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;