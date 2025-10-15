import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  const linkedIn = import.meta.env.VITE_LINKEDIN;
  const github = import.meta.env.VITE_GITHUB;
  const email = import.meta.env.VITE_EMAIL;
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  const name = import.meta.env.VITE_NAME;

  return (
    <footer className="footer text-light py-4">
      <div className="container text-center">
        <div className="footer-social mb-3">
          <a href={linkedIn} target="_blank" rel="noreferrer" className="social-icon linkedin">
            <FaLinkedin />
          </a>

          <a href={github} target="_blank" rel="noreferrer" className="social-icon github">
            <FaGithub />
          </a>

          <a href={`mailto:${email}`} className="social-icon email">
            <FaEnvelope />
          </a>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            className="social-icon whatsapp"
          >
            <FaWhatsapp />
          </a>
        </div>

        <p className="mb-0 fade-in">
          &copy; {new Date().getFullYear()} <strong>{name}</strong>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

























// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa"; // ✅ Added WhatsApp
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer text-light py-4">
//       <div className="container text-center">
//         <div className="footer-social mb-3">
//           <a href="https://www.linkedin.com/in/hidayat-shah-khan-bb333b2b9/" target="_blank" rel="noreferrer" className="social-icon">
//             <FaLinkedin />
//           </a>
//           <a href="https://github.com/hidayat-Shah" target="_blank" rel="noreferrer" className="social-icon">
//             <FaGithub />
//           </a>
//           <a href="mailto:hidayatshahwebdeveloper@gmail.com" className="social-icon">
//             <FaEnvelope />
//           </a>

//           {/* ✅ WhatsApp link (replace YOURNUMBER) */}
//           <a 
//             href="https://wa.me/923035134610"  // 👉 change to your WhatsApp number (without + or 0)
//             target="_blank" 
//             rel="noreferrer" 
//             className="social-icon whatsapp"
//           >
//             <FaWhatsapp />
//           </a>
//         </div>

//         <p className="mb-0">
//           &copy; {new Date().getFullYear()} <strong>Hidayat Shah</strong>. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
