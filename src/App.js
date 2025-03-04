import React from 'react';
import Nav from './components/Nav/Navbar';
import Home from './components/Home/Home';
import Technologies from './components/Technologies/Technologies';
import ProjectOverview from './components/ProjectOverview/ProjectOverview';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router';

function App() {
  return (
    <BrowserRouter>
        <Nav />
        <Home />
        <br /><br />
        <Technologies />
        <br /><br />
        <ProjectOverview />
        <br /><br />
        <AboutMe />
        <br /><br />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
