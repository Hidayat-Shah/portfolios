import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import project1 from "../assets/project1.jfif";
import project2 from "../assets/project2.PNG";

const projects = [
  {
    id: 1,
    title: "Medical Store Management System",
    description:
      "A full-stack web app that manages inventory, billing, and suppliers for medical stores.",
    image: project1,
    tech: "React, Node.js, MySQL, Bootstrap",
    demo: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Real Estate Website",
    description:
      "A responsive property listing website that connects buyers, sellers, and agents.",
    image: project2,
    tech: "HTML, CSS, JavaScript, React.js",
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 text-primary fw-bold">
          My <span className="text-dark">Projects</span>
        </h2>

        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-md-6 mb-4">
              <div className="project-card shadow-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid project-img"
                />
                <div className="overlay">
                  <div className="overlay-content">
                    <h5>{project.title}</h5>
                    <p>{project.description}</p>
                    <p className="tech">
                      <strong>Tech Stack:</strong> {project.tech}
                    </p>
                    <div className="buttons">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-light me-2"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-light text-dark"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
