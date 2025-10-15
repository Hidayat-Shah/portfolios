import React from "react";
import './SkillsRadial.css';

const skills = [
  { name: "React.js", level: 90, color: "#61dafb" },
  { name: "JavaScript", level: 85, color: "#f7df1e" },
  { name: "Node.js", level: 80, color: "#3c873a" },
  { name: "HTML & CSS", level: 95, color: "#e44d26" },
  { name: "Bootstrap", level: 85, color: "#7952b3" },
  { name: "MongoDB", level: 70, color: "#4db33d" }
];

const SkillsRadial = () => {
  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">My Skills</h2>
        <div className="row justify-content-center">
          {skills.map((skill, index) => {
            const radius = 50;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (skill.level / 100) * circumference;
            return (
              <div key={index} className="col-6 col-md-4 mb-4 d-flex justify-content-center">
                <div className="radial-skill">
                  <svg width="120" height="120">
                    <circle
                      className="bg-circle"
                      cx="60"
                      cy="60"
                      r={radius}
                    />
                    <circle
                      className="progress-circle"
                      cx="60"
                      cy="60"
                      r={radius}
                      stroke={skill.color}
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                    />
                    <text x="50%" y="50%" textAnchor="middle" dy="0.3em" fontSize="18" fill="#333">
                      {skill.level}%
                    </text>
                  </svg>
                  <p className="text-center mt-2">{skill.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsRadial;
