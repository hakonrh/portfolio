import React from "react";
import './ProjectPage.css';
import { Link } from "react-router";

import cover from "../../images/projects/Fellesmodellen/cover.png"
import frontpage from "../../images/projects/Fellesmodellen/frontpage.png"
import kursside from "../../images/projects/Fellesmodellen/kursside.png"
import lagnyttkurs from "../../images/projects/Fellesmodellen/lag-nytt-kurs.png"
import minekurs from "../../images/projects/Fellesmodellen/minekurs.png"
import oftestilt from "../../images/projects/Fellesmodellen/ofte-stilte-sporsmal.png"
import ressurser from "../../images/projects/Fellesmodellen/ressurser.png"
import gratulerer from "../../images/projects/Fellesmodellen/gratulerer.png"

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
            <h1>Fellesmodellen læringsplattform</h1>
            <section className="project-text">
                <img src={cover} alt="Framside til fellesmodell elæringsnettside" /><br />
                Fellesmodellen er utviklet av Helseinn for Helsefellesskapet Innlandet.
                Modellen er basert på double-diamond, og skal støtte samarbeidsprosjekter mellom sykehus og kommunen.
                Jeg og 2 andre studenter har hatt som bacheloroppgave å lage en nettside med e-læringskurs om Fellesmodellen.
                Nettsiden inneholder infoside om fellesmodellen, e-læringskurs med 5 moduler, en forms-side for å fylle ut skjema, og mer for vanlige brukere.
                Admin-brukere kan lage nye eller redigere de eksisterende e-læringsmodulene, og lage nye eller redigere eksisterende skjema for utfylling.
                De kan også legge til nye ressurser på ressurssiden.
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
                <div>
                    <h2>Nøkkelfunksjoner</h2>
                    <ul>
                        <li>Framside med informasjon om fellesmodellen</li>
                        <li>Elæringskurs med 5 moduler</li>
                        <li>Rapportskjema til utfylling underveis i prosjekter</li>
                        <li>Ressursside med lenker til eksterne ressurser</li>
                        <li>Kursbygger for adminbrukere til å redigere og skape nye elæringsmoduler</li>
                    </ul>
                </div>
                <img src={gratulerer} alt="gratulasjonsmelding når du har fullført alle kursmodulene" />
            </section>

            <section className="project-text">
                <img src={oftestilt} alt="ofte stilte spørsmål" />
                <div>
                    <h2>Mine bidrag:</h2>
                    <ul>
                        <li>Innsiktsarbeid med litteraturanalyse</li>
                        <li>Utvikling av figma prototyper til bruk i brukertesting</li>
                        <li>Dybdeintervjuer og to runder brukertesting med figma prototype og ferdig nettside</li>
                        <li>Analyse av utførte intervjuer og brukertesting</li>
                        <li>Databasestruktur</li>
                        <li>Design av nettsiden</li>
                    </ul>
                </div>
            </section>

            <section className="gallery-container">
                <h2>Galleri</h2>

                <div className="gallery">
                    <span className="gallery-image">
                        <img src={frontpage} alt="forside" />
                        <span>Forsiden av nettsiden. Her kan du lære om fellesmodellen.</span>
                    </span>

                    <span className="gallery-image">
                        <img src={minekurs} alt="mine kurs" />
                        <span>Oversikt over de tilgjengelige modulene i e-læringskurset.</span>
                    </span>

                    <span className="gallery-image">
                        <img src={kursside} alt="kursside" />
                        <span>En av sidene i første modul. Her er det til og med quiz!</span>
                    </span>

                    <span className="gallery-image">
                        <img src={lagnyttkurs} alt="lag nytt kurs" />
                        <span>Adminside for å lage nytt kurs.</span>
                    </span>

                    <span className="gallery-image">
                        <img src={ressurser} alt="ressurser" />
                        <span>Diverse nyttige ressurser relatert til fellesmodellen.</span>
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