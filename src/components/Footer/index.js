import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white" style={{ marginTop: "50px" }}>
      <div className="container py-3">
      <span style={{ fontSize: '28px', fontFamily: 'Fasthand' }}>Realizado por Cris y Caro</span>

        <div className="d-flex justify-content-center" style={{ marginTop: "15px" }}>
          <div className="d-flex align-items-center justify-content-between w-50 me-5" >
            <a
              href="https://www.linkedin.com/in/cristinabenitezcb/"
              className="d-flex align-items-center text-decoration-none"
            >
              <SiLinkedin size={24} className="me-2" /> Cristina Benitez
            </a>
            <a
              href="https://github.com/Crismi22"
              className="d-flex align-items-center text-decoration-none"
            >
              <SiGithub size={24} className="me-2" /> Crismi22
            </a>
          </div>
          <div className="d-flex align-items-center justify-content-between w-50">
            <a
              href="https://github.com/CarolinaWilberg"
              className="d-flex align-items-center text-decoration-none"
            >
              <SiGithub size={24} className="me-2" /> CarolinaWilberg
            </a>
            <a
              href="https://www.linkedin.com/in/carolina-wilberg"
              className="d-flex align-items-center text-decoration-none"
            >
              <SiLinkedin size={24} className="me-2" /> Carolina Wilberg
            </a>
          </div>
        </div>
      </div>
      <span>
        {" "}
        <i>
          <FaRegCopyright /> 
        </i> 
         Copyright 2023
      </span>
    </footer>
  );
};

export default Footer;
