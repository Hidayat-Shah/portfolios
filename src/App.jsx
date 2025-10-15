import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  // ✅ Initialize AOS once when the app loads
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <main style={{ marginTop: "70px" }}>
        <Hero data-aos="fade-up" />
        <About data-aos="fade-right" />
        <Projects data-aos="zoom-in-up" />
        <Skills data-aos="fade-left" />
        <Contact data-aos="fade-up" />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
