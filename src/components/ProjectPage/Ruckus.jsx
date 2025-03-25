import React from "react";
import './ProjectPage.css';
import cover from "../../images/projects/Ruckus/splash.gif";
import screenshots from "../../images/projects/Ruckus/screenshots.png";

import { Link } from "react-router";

const Ruckus = () => {
    return (
        <div className="project-page">
            <h1>Ruckus</h1>
            <section className="project-text">
                <img src={cover} alt="Ruckus sin tittelskjerm" /><br />
                Dette er et hobbyprosjekt jeg har jobbet på på egenhånd i flere år nå.
                Spillet har vært gjennom mange iterasjoner, og er et helt spillbart Pokémon fanspill som foreløpig har et kort demo jeg slapp ut i februar 2025.
            </section>

            <section className="project-text">
                <h2>Nøkkelfunksjoner</h2>
                <ul>
                    <li>Standard Pokémon gameplay hvor du utforsker verden og sloss med andre trenere</li>
                    <li>90+ nye Pokémon</li>
                    <li>Varierte områder med mye mulighet for utforskning</li>
                    <li>Masse artig dialog</li>
                </ul>
            </section>

            <section className="gallery-container">
                <h2>Galleri</h2>

                <div className="gallery">
                    <span className="gallery-image">
                        <img src={screenshots} alt="a variety of screenshots from the game" />
                    </span>

                </div>
            </section>

            <div className="project-navigation">
                <Link to="/TEA" className="link-style project-link">&#9664; TEA - The Everything App</Link>
                <span>Se annet prosjekt</span>
                <Link to="/Fellesmodellen" className="link-style project-link">Fellesmodellen elæringsnettside &#9654;</Link>
            </div>
        </div>
    )
};

export default Ruckus;