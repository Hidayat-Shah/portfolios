import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Skills.css";

const skills = [
  { name: "React.js", level: 90, icon: "⚛️", category: "Frontend" },
  { name: "JavaScript", level: 85, icon: "🟨", category: "Frontend" },
  { name: "HTML & CSS", level: 95, icon: "🌐", category: "Frontend" },
  { name: "Bootstrap", level: 85, icon: "📦", category: "Frontend" },
  { name: "Node.js", level: 80, icon: "🟩", category: "Backend" },
  { name: "MongoDB", level: 70, icon: "🍃", category: "Database" },
];

const Skills = () => {
  useEffect(() => {
    const bars = document.querySelectorAll(".progress-bar");
    bars.forEach((bar) => {
      const value = bar.getAttribute("aria-valuenow");
      bar.style.width = "0%";
      setTimeout(() => {
        bar.style.width = `${value}%`;
      }, 200);
    });
  }, []);

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <h2 className="text-center mb-5 text-primary fw-bold">
          Technical <span className="text-dark">Skills</span>
        </h2>

        {/* Skill Cards */}
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div
                className="skill-card p-4 shadow-sm rounded bg-white"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="d-flex align-items-center mb-2">
                  <span className="skill-icon me-2">{skill.icon}</span>
                  <h5 className="mb-0">{skill.name}</h5>
                  <span className="ms-auto fw-bold text-muted">
                    {skill.level}%
                  </span>
                </div>

                <div className="progress skill-progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "0%" }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>

                <small className="text-muted">{skill.category}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
