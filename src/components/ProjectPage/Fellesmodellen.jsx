import React from "react";
import './ProjectPage.css';
import cover from "../../images/projects/Fellesmodellen/cover.png"
import { Link } from "react-router";



const Fellesmodellen = () => {
    return (
        <div className="project-page">
            <h1>Fellesmodellen elæringsnettside</h1>
            <section className="project-text">
                <img src={cover} alt="Framside til fellesmodell elæringsnettside" /><br />
                Dette prosjektet er i utvikling av meg og 2 andre studenter som vår bacheloroppgave. Dette er en nettside med elæringsmodul for Fellesmodellen,
                som er en enkel retningslinje for hvordan sykehus og kommune bør jobbe i samarbeidsprosjekt.
            </section>

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
                <span>Se annet prosjekt</span>
                <Link to="/SuperAssessor" className="link-style project-link">Super Assessor &#9654;</Link>
            </div>
        </div>
    )
};

export default Fellesmodellen;