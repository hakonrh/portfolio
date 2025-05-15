import React from "react";
import './ProjectPage.css';
import cover from "../../images/projects/Ruckus/splash.gif";
import battle from "../../images/projects/Ruckus/battle.png";
import leader from "../../images/projects/Ruckus/leader.png";
import mountain from "../../images/projects/Ruckus/mountain.png";
import path from "../../images/projects/Ruckus/path.png";
import pause from "../../images/projects/Ruckus/pause.png";
import trash from "../../images/projects/Ruckus/trash.png";
import welcome from "../../images/projects/Ruckus/welcome.png";

import ruby from "../../images/logos/ruby.png";
import rmxp from "../../images/logos/rmxp.png";

import { Link } from "react-router";

const Ruckus = () => {
    return (
        <div className="project-page">
            <h1>Ruckus</h1>
            <section className="project-text">
                <img src={cover} alt="Ruckus sin tittelskjerm" />
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
                <div>
                    <h2>Nøkkelfunksjoner</h2>
                    <ul>
                        <li>Standard Pokémon gameplay hvor du utforsker verden og sloss med andre trenere</li>
                        <li>90+ nye Pokémon</li>
                        <li>Varierte områder med mye mulighet for utforskning</li>
                        <li>Masse artig dialog</li>
                    </ul>
                </div>
                <img src={mountain} alt="the player stands on a bridge on the way up Whiterock Mountain" />
            </section>

            <section className="gallery-container">
                <h2>Galleri</h2>

                <div className="gallery">
                        <span className="gallery-image">
                            <img src={welcome} alt="a cutscene featuring Ernest, one of the game's Elite Four, welcoming a crowd to the world of Pokémon" />
                            <span>En cutscene med Ernest som er i ferd med å få baggen hans stjålet.</span>
                        </span>
                        
                        <span className="gallery-image">
                            <img src={battle} alt="a battle against a wild Chickpeace" />
                            <span>En kamp med en vill Chickpeace.</span>
                        </span>

                        <span className="gallery-image">
                            <img src={leader} alt="battle transition for a Gym Leader" />
                            <span>Overgang før en kamp med en Gym Leder.</span>
                        </span>

                        <span className="gallery-image">
                            <img src={pause} alt="pause menu" />
                            <span>Pausemenyen, med rikelig viktig informasjon tilgjengelig.</span>
                        </span>

                        <span className="gallery-image">
                            <img src={trash} alt="talking to a humble trash can" />
                            <span>Mange objekter i spillet kan interageres med og har unik dialog. Dette er en av mange søppelbøtter, for eksempel.</span>
                        </span>

                        <span className="gallery-image">
                            <img src={path} alt="an overview of Whiterock Path, an are you can explore in the game" />
                            <span>En oversikt av Whiterock Path, et av områdene du kan utforske i spillet.</span>
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