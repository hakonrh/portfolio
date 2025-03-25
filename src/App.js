import React from "react";
import Nav from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main";
import {  Routes, Route } from "react-router";
import Fellesmodellen from "./components/ProjectPage/Fellesmodellen";
import SuperAssessor from "./components/ProjectPage/SuperAssessor";
import TEA from "./components/ProjectPage/TEA";
import Ruckus from "./components/ProjectPage/Ruckus";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      
      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Fellesmodellen" element={<Fellesmodellen />} />
        <Route path="/SuperAssessor" element={<SuperAssessor />} />
        <Route path="/TEA" element={<TEA />} />
        <Route path="/Ruckus" element={<Ruckus />} />
      </Routes>

      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
