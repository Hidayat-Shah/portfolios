import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'; // We'll add custom styles here

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  // Add shadow when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll and active link
  const handleClick = (e, section) => {
    e.preventDefault();
    setActive(section);
    const target = document.querySelector(section);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${scrolled ? "shadow-lg" : ""}`}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home" onClick={(e) => handleClick(e, "#home")}>
          Hidayat Shah
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["#about", "#projects", "#skills", "#contact"].map((section, index) => (
              <li className="nav-item" key={index}>
                <a 
                  href={section} 
                  className={`nav-link ${active === section ? "active-link" : ""}`} 
                  onClick={(e) => handleClick(e, section)}
                >
                  {section.replace("#", "").charAt(0).toUpperCase() + section.slice(2)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
