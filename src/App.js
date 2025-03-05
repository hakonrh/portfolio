import React from "react";
import Nav from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main";
import { Routes, Route, BrowserRouter } from "react-router";
import SuperAssessor from "./components/ProjectPage/SuperAssessor";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Nav />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/SuperAssessor" element={<SuperAssessor />} />
      </Routes>

      <br />
      <br />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
