import React from "react";
import './ProjectPage.css';
import cover from "../../images/projects/fullstack-cover.png"

import exploreSchemas from "../../images/projects/SuperAssessor/explore-schemas.png"
import gameMain from "../../images/projects/SuperAssessor/game-main.png"
import gamemode from "../../images/projects/SuperAssessor/gamemode-select.png"
import missioncardSelect from "../../images/projects/SuperAssessor/missioncard-select.png"
import mySchemas from "../../images/projects/SuperAssessor/my-schemas.png"
import replaceCard from "../../images/projects/SuperAssessor/replace-card.png"

import missioncards from "../../images/projects/SuperAssessor/missioncards.png"
import assessmentcards from "../../images/projects/SuperAssessor/assessmentcards.png"

import { Link } from "react-router";

const SuperAssessor = () => {
    return (
        <div className="project-page">
            <h1>Super Assessor</h1>
            <section className="project-text">
                <img src={cover} alt="example of the game board provided in exam text" /><br />
                Dette prosjektet ble lagd som en del av eksamen i faget Full-Stack webutvikling i Vår 2024. Vi var en gruppe på 3 stykker.
                Oppgaven vår var å lage en digital versjon av Super Assessor spillet, med diverse nye funksjoner.
                Den opprinnelige fysiske versjonen av spillet er et kortspill hvor undervisere samler kort og bruker dem til å lage nye vurderingsmetoder.
                Alle på gruppen jobbet på forskjellige deler av prosjektet og gjorde arbeid på frontend, backend, og databasen. Vi jobbet også alle sammen på figma prototypene vi lagde.
            </section>

            <section className="project-text">
                <h2>Nøkkelfunksjoner</h2>
                <img src={missioncards} alt="example of the game board provided in exam text" />
                <ul>
                    <li>Spillbart Super Assessor spill alene eller i gruppe</li>
                    <li>Etter fullført spill kan skjema lagres og deles med andre på nettsiden</li>
                    <li>Brukere kan vurdere og bookmarke andres skjema</li>
                    <li>Trygt loginsystem med roller og protected routes</li>
                    <li>Admin dashboard hvor du kan gjøre CRUD funksjoner på kortene</li>
                </ul>
            </section>

            <section className="project-text">
                <h2>Mine bidrag:</h2>
                <img src={assessmentcards} alt="example of the game board provided in exam text" /><br />
                <ul>
                    <li>Jeg satte opp trygg innlogging for brukere med json web tokens i backend.</li>
                    <li>Jeg lagde funksjoner for å selecte kort, erstatte et kort med et annet tilfeldig et, og erstatte kort med et annet utvalg av kort.</li>
                    <li>Jeg satte opp backend dokumentasjon med SWAGGER.</li>
                    <li>Jeg lagde funksjon for å bookmarke et assessment scheme i backend, og lagde en knapp for å få det til å funke i frontend (noen andre fikk det til å se fint ut)</li>
                    <li>Jeg satte opp Protected Routes i frontend</li>
                    <li>Jeg lagde en turncounter komponent for lagversjonen av spillet, som viser hvem sin tur det er og hvor mange runder dere har spilt</li>
                </ul>
            </section>

            <section className="gallery-container">
                <h2>Galleri</h2>

                <div className="gallery">
                    <span className="gallery-image">
                        <img src={gamemode} alt="choose between playing solo or in groups" />
                        <span>Før du starter spillet, velger du om du vil spille alene eller i gruppe.</span>
                    </span>
                    <span className="gallery-image">
                        <img src={missioncardSelect} alt="select up to three mission cards before starting the game" />
                        <span>Du velger opp til 3 oppdragskort som du skal prøve å oppfylle med vurderingsskjemaet ditt.</span>
                    </span>
                    <span className="gallery-image">
                        <img src={gameMain} alt="the game's main screen, where you select cards to replace or randomize" />
                        <span>Spill ved å flippe vurderingskort og erstatt dem.
                            Om du er alene kan du erstatte så mange du vil på en gang.
                            I gruppe kan hver spiller erstatte ett om gangen.
                        </span>
                    </span>
                    <span className="gallery-image">
                        <img src={replaceCard} alt="choose one of three cards of the same category to replace your selected card" />
                        <span>Når du erstatter et kort får du velge ett av tre kort fra samme kategori.</span>
                    </span>
                    <span className="gallery-image">
                        <img src={mySchemas} alt="a list of all the schemas you have made with their ratings" />
                        <span>Når du er ferdig med spillet lagres skjemaet sånn at du kan se på det senere og dele med andre.</span>
                    </span>
                    <span className="gallery-image">
                        <img src={exploreSchemas} alt="a list of all schemas made by other users, sorted by highest rating." />
                        <span>Du kan også se på andre sine skjemaer, gi dem en vurdering, og bookmarke de du liker best.</span>
                    </span>
                </div>
            </section>

            <div className="project-navigation">
                <Link to="/Fellesmodellen" className="link-style project-link">&#9664; Fellesmodellen elæringsnettside</Link>
                <span>Se annet prosjekt</span>
                <Link to="/TEA" className="link-style project-link">TEA - The Everything App &#9654;</Link>
            </div>
        </div>
    )
};

export default SuperAssessor;