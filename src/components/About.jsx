import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import profilePic from "../assets/profile.jpg";
import "./About.css"; // custom styling

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Profile Image */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <div className="profile-pic-container">
              <img
                src={profilePic}
                alt="Hidayat Shah"
                className="img-fluid rounded-circle shadow-lg profile-pic"
              />
            </div>
          </div>

          {/* About Text */}
          <div className="col-md-8">
            <h2 className="fw-bold mb-3 text-primary">About Me</h2>
            <p className="lead text-secondary">
              Hello! I’m <strong className="text-dark">Hidayat Shah</strong>, a passionate 
              <span className="text-primary"> Web Developer</span> with expertise in 
              React.js, Node.js, and modern web development. I focus on creating 
              interactive, responsive, and user-friendly applications.
            </p>
            <p className="text-muted">
              I love learning new technologies, solving real-world problems, 
              and working on projects that make a meaningful impact. My goal 
              is to continuously grow as a developer and contribute to 
              innovative, high-quality software solutions.
            </p>

            <a href="#contact" className="btn btn-primary rounded-pill px-4 mt-3">
              Let’s Connect
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;








// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import profilePic from "../assets/profile.png";
// import "./About.css";

// const About = () => {
//   // ✅ Get values from .env
//   const name = import.meta.env.VITE_NAME;
//   const email = import.meta.env.VITE_EMAIL;
//   const linkedin = import.meta.env.VITE_LINKEDIN;
//   const github = import.meta.env.VITE_GITHUB;
//   const whatsapp = import.meta.env.VITE_WHATSAPP_NUMBER;

//   return (
//     <section id="about" className="about-section py-5">
//       <div className="container">
//         <div className="row align-items-center">

//           {/* Profile Image */}
//           <div className="col-md-4 text-center mb-4 mb-md-0">
//             <div className="profile-pic-container">
//               <img
//                 src={profilePic}
//                 alt={name}
//                 className="img-fluid rounded-circle shadow-lg profile-pic"
//               />
//             </div>
//           </div>

//           {/* About Text */}
//           <div className="col-md-8">
//             <h2 className="fw-bold mb-3 text-primary">About Me</h2>
//             <p className="lead text-secondary">
//               Hello! I’m <strong className="text-dark">{name}</strong>, a passionate 
//               <span className="text-primary"> Software Developer</span> skilled in modern 
//               web technologies like React.js and Node.js. I build clean, user-friendly, 
//               and responsive applications that deliver great user experiences.
//             </p>
//             <p className="text-muted">
//               I enjoy solving problems, learning new tools, and turning ideas into real-world 
//               projects that make a difference. I’m always eager to collaborate and grow 
//               in this fast-changing tech world.
//             </p>

//             {/* Contact Buttons */}
//             <div className="d-flex flex-wrap gap-3 mt-4">
//               <a href={`mailto:${email}`} className="btn btn-outline-primary rounded-pill px-4">
//                 Email Me
//               </a>
//               <a href={linkedin} target="_blank" rel="noreferrer" className="btn btn-outline-info rounded-pill px-4">
//                 LinkedIn
//               </a>
//               <a href={github} target="_blank" rel="noreferrer" className="btn btn-outline-dark rounded-pill px-4">
//                 GitHub
//               </a>
//               <a
//                 href={`https://wa.me/${whatsapp}`}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="btn btn-outline-success rounded-pill px-4"
//               >
//                 WhatsApp
//               </a>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
