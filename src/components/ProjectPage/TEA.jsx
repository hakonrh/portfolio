import React from "react";
import './ProjectPage.css';
import cover from "../../images/projects/TEA/cover.png";

import loggedOut from "../../images/projects/TEA/logged-out.png"
import myPosts from "../../images/projects/TEA/my-posts.png"
import accountList from "../../images/projects/TEA/account-list.png"
import register from "../../images/projects/TEA/register.png"

import css from "../../images/logos/css.png";
import html from "../../images/logos/html.png";
import js from "../../images/logos/js.png";
import reactimg from "../../images/logos/react.png";
import sql from "../../images/logos/sql.png";
import python from "../../images/logos/python.png";
import postgresql from "../../images/logos/postgresql.png"

import { Link } from "react-router";

const TEA = () => {
    return (
        <div className="project-page">
            <h1>TEA - The Everything App</h1>
            <section className="project-text">
                <img src={cover} alt="Hovedsiden på TEA - The Everything App" />
                Dette er en enkel Twitterklone jeg har laget på egenhånd som arbeidskrav i faget Cloud Technologies vår 2025.
                Hovedfokuset på oppgaven ligger i utviklingen av backend i Python med FastAPI, og database med PostgreSQL. Siden er hostet via Render, med tre forskjellige "web services"
                som kommuniserer med hverandre for en fungerende nettside.
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
                        <a href="https://www.python.org/" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={python} alt="python" /></a>
                        <span>
                            Python
                        </span>
                    </div>
                    <div className="tech-image">
                        <a href="https://developer.mozilla.org/en-US/docs/Glossary/SQL" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={sql} alt="sql" /></a>
                        <span>
                            SQL
                        </span>
                    </div>
                    <div className="tech-image">
                        <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer" className="tech-link"><img className="tech-logo" src={postgresql} alt="postgresql" /></a>
                        <span>
                            PostgreSQL
                        </span>
                    </div>
                </div>
                <br />
            </div>

            <section className="project-text">
                <div>
                    <h2>Nøkkelfunksjoner</h2>
                    <ul>
                        <li>Enkelt kontosystem satt opp med JWT</li>
                        <li>Lag, rediger, og slett egne poster</li>
                        <li>Se liste over alle eller egne poster.</li>
                        <li>Se liste over alle registrerte kontoer</li>
                        <li>Søk etter poster, kontoer, eller hashtags</li>
                    </ul>
                </div>
                <img src={register} alt="the registration page" />
            </section>

            <section className="gallery-container">
                <h2>Galleri</h2>

                <div className="gallery">
                    <span className="gallery-image">
                        <img src={loggedOut} alt="the main page of TEA while logged out" />
                        <span>Brukere som ikke er logget inn kan se andres poster, men kan ikke lage sine egne.</span>
                    </span>
                    <span className="gallery-image">
                        <img src={myPosts} alt="a list of the logged in user's posts" />
                        <span>Innloggede brukere kan se en liste over sine egne poster. Her kan de også redigere eller slette disse postene.</span>
                    </span>
                    <span className="gallery-image">
                        <img src={accountList} alt="a list of every registered account on TEA" />
                        <span>Du kan også se en liste over alle kontoene registrert på TEA.</span>
                    </span>
                </div>
            </section>

            <div className="project-navigation">
                <Link to="/SuperAssessor" className="link-style project-link">&#9664; Super Assessor</Link>
                <Link to="/Ruckus" className="link-style project-link">Ruckus &#9654;</Link>
            </div>
        </div>
    )
};

export default TEA;