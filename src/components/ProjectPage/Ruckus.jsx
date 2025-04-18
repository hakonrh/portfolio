import React from "react";
import './ProjectPage.css';
import cover from "../../images/projects/Ruckus/splash.gif";
import screenshots from "../../images/projects/Ruckus/screenshots.png";

import ruby from "../../images/logos/ruby.png";
import rmxp from "../../images/logos/rmxp.png";

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

            <div className="tech-section">
                <h3>Lagd med:</h3>
                <div className="tech-list">
                    <div className="tech-image">
                        <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={ruby} alt="ruby" /></a>
                        <span>
                            Ruby
                        </span>
                    </div>
                    <div className="tech-image">
                        <a href="https://www.rpgmakerweb.com/products/rpg-maker-xp" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={rmxp} alt="RPG Maker XP" /></a>
                        <span>
                            RMXP
                        </span>
                    </div>

                </div>
                <br />
            </div>

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
                <Link to="/Fellesmodellen" className="link-style project-link">Fellesmodellen elæringsnettside &#9654;</Link>
            </div>
        </div>
    )
};

export default Ruckus;