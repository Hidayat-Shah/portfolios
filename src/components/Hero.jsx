import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic1 from "../assets/profile1.jfif";
import { ReactTyped } from "react-typed";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center text-center text-md-start"
    >
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Side - Text Content */}
          <div className="col-md-7">
            <h1 className="display-5 fw-bold text-dark mb-3">
              Hi, I'm <span className="text-primary">Hidayat Shah</span>
            </h1>

            {/* 🔹 Typing animation */}
            <h4 className="mb-3 text-secondary">
              <ReactTyped
                strings={[
                  "Web Developer",
                  "MERN Stack Developer",
                  "Freelancer",
                  "Frontend Enthusiast",
                ]}
                typeSpeed={80}
                backSpeed={40}
                backDelay={1000}
                loop
              />
            </h4>

            <p className="lead text-muted mb-4">
              I specialize in building modern, responsive, and user-friendly web
              applications using <strong>React.js</strong>,{" "}
              <strong>Node.js</strong>, and <strong>Bootstrap</strong>.
            </p>

            <a
              href="#about"
              className="btn btn-primary rounded-pill px-4 me-2"
            >
              About Me
            </a>
            <a
              href="#projects"
              className="btn btn-outline-primary rounded-pill px-4"
            >
              View Projects
            </a>
          </div>

          {/* Right Side - Profile Image */}
          <div className="col-md-5 text-center mt-4 mt-md-0">
            <div className="hero-img-container">
              <img
                src={profilePic1}
                alt="Hidayat Shah"
                className="img-fluid rounded-circle shadow-lg hero-img"
                style={{
                  width: "280px",
                  height: "280px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
