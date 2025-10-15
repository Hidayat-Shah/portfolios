import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import project1 from "../assets/project1.jfif";
import project2 from "../assets/project2.PNG";
import "./Projects.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing my web development projects and skills.",
    image: project2,
    tech: "React, Bootstrap, CSS",
    demo: "#",
    github: "#",
  },
  {
    id: 4,
    title: "E-Commerce System",
    description:
      "An online shopping platform with cart, billing, and stock management features.",
    image: project1,
    tech: "React, Node.js, MySQL",
    demo: "#",
    github: "#",
  },
];

const Projects = () => {
  // 🔹 Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768, // for mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 text-primary fw-bold">
          My <span className="text-dark">Projects</span>
        </h2>

        <Slider {...settings}>
          {projects.map((project) => (
            <div key={project.id} className="p-3">
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
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
