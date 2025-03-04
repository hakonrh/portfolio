import React from "react";
import './Home.css';
import selfie from "../../images/Kq70rdc.jpeg";

const Home = () => {
    return (
        <div className="home">
            <p>
                Jeg er en full-stack webutvikler fra Stavanger, og studerer Webutvikling på NTNU Gjøvik.<br/>
                Interessen min for koding startet da jeg var 15, da jeg begynte å utvikle Pokémon fanspill med RPGMaker XP.<br/><br/>
                Jeg er opptatt av å lage enkel, lesbar kode for å løse problemer på en god måte.
            </p>
            <img className="homeImg" src={selfie} alt="haha that's me" />
        </div>
    )
};

export default Home;