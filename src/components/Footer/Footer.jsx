import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-white">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="https://www.ourworldindata.org/" target="_blank">
              Orion data visualisation
            </a>
          </div>
          <div className="year">2023</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
