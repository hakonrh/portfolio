import React from "react";
import './ProjectOverview.css';
import Fellesmodellen from "../../images/projects/Fellesmodellen/cover.png"
import SuperAssessor from "../../images/projects/fullstack-cover.png";
import Ruckus  from "../../images/projects/Ruckus/splash.gif";
import TEA  from "../../images/projects/TEA/cover.png";
import { Link } from "react-router";

const ProjectOverview = () => {
    return (
        <div className="project-overview" id="projects">
            <h2>Prosjekter</h2>
            <div className="project-wrapper">
                <div className="project-container">
                    <h3>Fellesmodellen elæringsnettside</h3>
                    <img src={Fellesmodellen} alt="The Super Assessor game" className="project-image" />
                    <div className="project-description">Dette prosjektet er i utvikling av meg og 2 andre studenter som vår bacheloroppgave. Dette er en nettside med elæringsmodul for Fellesmodellen,
                        som er en enkel retningslinje for hvordan sykehus og kommune bør jobbe i samarbeidsprosjekt. 
                    </div>
                    <Link to="/Fellesmodellen" className="link-style">Les mer</Link>
                </div>

                <div className="project-container">
                    <h3>The Super Assessor</h3>
                    <img src={SuperAssessor} alt="The Super Assessor game" className="project-image" />
                    <div className="project-description">Dette prosjektet ble lagd som en del av eksamen i faget "Full-Stack webutvikling i Vår 2024. Vi var en gruppe på 3 stykker, og hadde i
                        oppgave å lage en digital versjon av Super Assessor spillet, som skal hjelpe undervisere med å komme opp med nye vurderingsmetoder for studentene sine.
                    </div>
                    <Link to="/SuperAssessor" className="link-style">Les mer</Link>
                </div>

                <div className="project-container">
                    <h3>TEA - The Everything App</h3>
                    <img src={TEA} alt="TEA - The Everything App" className="project-image" />
                    <div className="project-description">Dette er en enkel Twitterklone jeg har laget på egenhånd som arbeidskrav i faget Cloud Technologies vår 2025. 
                        Hovedfokuset på oppgaven ligger i utviklingen av backend i Python med FastAPI, og database med PostgreSQL. Siden er hostet via Render, med tre forskjellige "web services"
                        som kommuniserer med hverandre for en fungerende nettside.
                    </div>
                    <Link to="/TEA" className="link-style">Les mer</Link>
                </div>

                <div className="project-container">
                    <h3>Ruckus</h3>
                    <img src={Ruckus} alt="Pokémon Ruckus game" className="project-image" />
                    <div className="project-description">Dette er et hobbyprosjekt jeg har jobbet på på egenhånd i flere år nå.
                         Spillet har vært gjennom mange iterasjoner, og er et helt spillbart Pokémon fanspill som foreløpig har et kort demo jeg slapp ut i februar 2025.
                    </div>
                    <Link to="/Ruckus" className="link-style">Les mer</Link>
                </div>
            </div>
        </div>
    )
};

export default ProjectOverview;