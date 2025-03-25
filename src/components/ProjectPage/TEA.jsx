import React from "react";
import './ProjectPage.css';
import cover from "../../images/projects/TEA/cover.png";

import loggedOut from "../../images/projects/TEA/logged-out.png"
import myPosts from "../../images/projects/TEA/my-posts.png"
import accountList from "../../images/projects/TEA/account-list.png"

import { Link } from "react-router";

const TEA = () => {
    return (
        <div className="project-page">
            <h1>TEA - The Everything App</h1>
            <section className="project-text">
                <img src={cover} alt="Hovedsiden på TEA - The Everything App" /><br />
                Dette er en enkel Twitterklone jeg har laget på egenhånd som arbeidskrav i faget Cloud Technologies vår 2025.
                Hovedfokuset på oppgaven ligger i utviklingen av backend i Python med FastAPI, og database med PostgreSQL. Siden er hostet via Render, med tre forskjellige "web services"
                som kommuniserer med hverandre for en fungerende nettside.
            </section>

            <section className="project-text">
                <h2>Nøkkelfunksjoner</h2>
                <ul>
                    <li>Enkelt kontosystem satt opp med JWT</li>
                    <li>Lag, rediger, og slett egne poster</li>
                    <li>Se liste over alle eller egne poster.</li>
                    <li>Se liste over alle registrerte kontoer</li>
                    <li>Søk etter poster, kontoer, eller hashtags</li>
                </ul>
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
                <span>Se annet prosjekt</span>
                <Link to="/Ruckus" className="link-style project-link">Ruckus &#9654;</Link>
            </div>
        </div>
    )
};

export default TEA;