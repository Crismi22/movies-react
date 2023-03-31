import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-3">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
          <span style={{ fontSize: "28px", fontFamily: "Fasthand" }}>
            Realizado por Cris y Caro
          </span>

          <div className="d-flex flex-wrap justify-content-center justify-content-md-between align-items-center mt-3 mt-md-0">
            <a
              href="https://www.linkedin.com/in/cristinabenitezcb/"
              className="d-flex align-items-center text-decoration-none me-3"
            >
              <SiLinkedin size={24} className="me-2" /> Cristina Benitez
            </a>
            <a
              href="https://github.com/Crismi22"
              className="d-flex align-items-center text-decoration-none me-3"
            >
              <SiGithub size={24} className="me-2" /> Crismi22
            </a>
            <a
              href="https://github.com/CarolinaWilberg"
              className="d-flex align-items-center text-decoration-none me-3"
            >
              <SiGithub size={24} className="me-2" /> CarolinaWilberg
            </a>
            <a
              href="https://www.linkedin.com/in/carolina-wilberg"
              className="d-flex align-items-center text-decoration-none me-3"
            >
              <SiLinkedin size={24} className="me-2" /> Carolina Wilberg
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <span>
            {" "}
            <i>
              <FaRegCopyright />
            </i>{" "}
            Copyright 2023
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
