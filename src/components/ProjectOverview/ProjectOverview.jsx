import React from "react";
import './ProjectOverview.css';
import SuperAssessor from "../../images/projects/fullstack-cover.png";
import { Link } from "react-router";

const ProjectOverview = () => {
    return (
        <div className="project-overview" id="projects">
            <h2>Prosjekter</h2>
            <div className="project-wrapper">
                <div className="project-container">
                    <h3>The Super Assessor</h3>
                    <img src={SuperAssessor} alt="The Super Assessor game" className="project-image" />
                    <div className="project-description">Dette prosjektet ble lagd som en del av eksamen i faget "Full-Stack webutvikling i Vår 2024. Vi var en gruppe på 3 stykker, og hadde i
                        oppgave å lage en digital versjon av Super Assessor spillet, som skal hjelpe undervisere med å komme opp med nye vurderingsmetoder for studentene sine.
                    </div>
                    <Link to="/SuperAssessor" className="link-style">Les mer</Link>
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
                    <h3>The Super Assessor</h3>
                    <img src={SuperAssessor} alt="The Super Assessor game" className="project-image" />
                    <div className="project-description">Dette prosjektet ble lagd som en del av eksamen i faget "Full-Stack webutvikling i Vår 2024. Vi var en gruppe på 3 stykker, og hadde i
                        oppgave å lage en digital versjon av Super Assessor spillet, som skal hjelpe undervisere med å komme opp med nye vurderingsmetoder for studentene sine.
                    </div>
                    <Link to="/SuperAssessor" className="link-style">Les mer</Link>
                </div>
            </div>
        </div>
    )
};

export default ProjectOverview;