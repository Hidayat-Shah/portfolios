import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Hero from "./components/Hero";

function App() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <main style={{ marginTop: "70px" }}> {/* Adjust top margin so content is not hidden behind navbar */}
      {/* <Hero /> */}
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
