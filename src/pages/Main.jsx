import React from 'react';
import Home from '../components/Home/Home';
import Technologies from '../components/Technologies/Technologies';
import ProjectOverview from '../components/ProjectOverview/ProjectOverview';
import AboutMe from '../components/AboutMe/AboutMe';

function Main() {
    return (
        <div>
            <Home />
            <br /><br />
            <Technologies />
            <br /><br />
            <ProjectOverview />
            <br /><br />
            <AboutMe />
        </div>
    );
}

export default Main;
