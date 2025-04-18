import React from "react";
import './ContactMe.css';

const ContactMe = () => {
    return (
        <div className="contact-container">
            <form className="contact-form" action="mailto:hukonriisu@gmail.com" method="post" encType="text/plain">
                <h2>Kontakt meg</h2>
                <input type="text" name="name" placeholder="Ditt navn" required />
                <input type="email" name="email" placeholder="Din Email" required />
                <textarea name="message" rows="5" placeholder="Melding...!" required></textarea>
                <button className="link-style" type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactMe;
