import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "../assets/profile.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero text-center py-5 bg-light">
      <div className="container">
        <div className="row align-items-center justify-content-center">

          {/* Profile Image */}
          <div className="col-md-4 mb-4">
            <img
              src={profilePic}
              alt="Hidayat Shah"
              className="img-fluid rounded-4 shadow-lg hero-img"
            />
          </div>

          {/* Text Content */}
          <div className="col-md-8">
            <h1 className="display-4 fw-bold mb-4">
              <span className="text-gradient">I’m Hidayat Shah,</span> <br />
              a MERN stack developer turning ideas into reality.
            </h1>
            <p className="lead text-secondary mb-4">
              I am a MERN Stack Developer from KPK, Pakistan with 2 years of
              experience working on multiple real-world projects.
            </p>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a
                href="#contact"
                className="btn btn-primary btn-lg px-4 rounded-pill"
              >
                Connect with Me
              </a>
              <a
                href="/resume.pdf" // replace with your actual resume path or link
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary btn-lg px-4 rounded-pill"
              >
                My Resume
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
