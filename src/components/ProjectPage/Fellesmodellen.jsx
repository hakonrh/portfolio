import React from "react";
import './ProjectPage.css';
import cover from "../../images/projects/Fellesmodellen/cover.png"
import { Link } from "react-router";

import css from "../../images/logos/css.png";
import express from "../../images/logos/expressjs.png";
import html from "../../images/logos/html.png";
import js from "../../images/logos/js.png";
import mongodb from "../../images/logos/mongodb.png";
import node from "../../images/logos/nodejs.png";
import reactimg from "../../images/logos/react.png";

const Fellesmodellen = () => {
    return (
        <div className="project-page">
            <h1>Fellesmodellen elæringsnettside</h1>
            <section className="project-text">
                <img src={cover} alt="Framside til fellesmodell elæringsnettside" /><br />
                Dette prosjektet er i utvikling av meg og 2 andre studenter som vår bacheloroppgave. Dette er en nettside med elæringsmodul for Fellesmodellen,
                som er en enkel retningslinje for hvordan sykehus og kommune bør jobbe i samarbeidsprosjekt.
            </section>

            <div className="tech-section">
                <h2>
                    Lagd med:
                </h2>
                <div className="tech-list">
                    <div className="tech-image">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={html} alt="html" /></a>
                        <span>
                            HTML
                        </span>
                    </div>
                    <div className="tech-image">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={css} alt="css" /></a>
                        <span>
                            CSS
                        </span>
                    </div>
                    <div className="tech-image">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={js} alt="javascript" /></a>
                        <span>
                            Javascript
                        </span>
                    </div>
                    <div className="tech-image">
                        <a href="https://react.dev/" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={reactimg} alt="react" /></a>
                        <span>
                            React
                        </span>
                    </div>
                    <div className="tech-image">
                        <a href="https://nodejs.org/en" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={node} alt="node js" /></a>
                        <span>
                            Node.js
                        </span>
                    </div>
                    <div className="tech-image">
                        <a href="https://expressjs.com/" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={express} alt="express js" /></a>
                        <span>
                            Express.js
                        </span>
                    </div>
                    <div className="tech-image">
                        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={mongodb} alt="mongodb" /></a>
                        <span>
                            MongoDB
                        </span>
                    </div>
                </div>
                <br />
            </div>

            <section className="project-text">
                <h2>Nøkkelfunksjoner</h2>
                <ul>
                    <li>Framside med informasjon om fellesmodellen</li>
                    <li>Elæringskurs med 5 moduler</li>
                    <li>Rapportskjema til utfylling underveis i prosjekter</li>
                    <li>Ressursside med lenker til eksterne ressurser</li>
                    <li>CMS for å redigere og skape nye elæringsmoduler</li>
                </ul>
            </section>

            <section className="project-text">
                <h2>Mine bidrag:</h2>
                <ul>
                    <li>Dette fyller jeg ut senere.</li>
                </ul>
            </section>

            <section className="gallery-container">
                <h2>Galleri</h2>

                <div className="gallery">
                    <span className="gallery-image">
                        <img src={cover} alt="placeholder" />
                        <span>Her kommer jeg til å ha masse fine flotte bilder av fellesmodellsiden.</span>
                    </span>
                </div>
            </section>

            <div className="project-navigation">
                <Link to="/Ruckus" className="link-style project-link">&#9664; Ruckus</Link>
                <Link to="/SuperAssessor" className="link-style project-link">Super Assessor &#9654;</Link>
            </div>
        </div>
    )
};

export default Fellesmodellen;