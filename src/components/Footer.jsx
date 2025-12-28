import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="footer-container">
        {/* LEFT SIDE */}
        <div className="footer-left">
          <span>© 2024 Shopping Complex</span>
          <a href="/faq" className="faq-link" title="FAQ">
            <i className="fa fa-circle-question"></i>
          </a>
        </div>

        {/* RIGHT SIDE */}
        <div className="footer-right">
          <a
            href="https://github.com/nknitin121"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <i className="fa fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/nitin-kashyap-67b636250/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fa fa-linkedin"></i>
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
