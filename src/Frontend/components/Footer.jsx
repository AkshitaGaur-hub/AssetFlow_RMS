import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (

    <nav className="navbar navbar-expand-lg footer">
      <div className="container-fluid d-flex flex-column align-items-center py-2 bg-transparent">

        <span className="navbar-brand">
          © {new Date().getFullYear()} Dashboard
        </span>

        <ul className="navbar-nav d-flex flex-row footer-links">
          <li className="nav-item mx-2">
            <a className="nav-link" href="/">
              <FaFacebook /> <span>facebook</span>
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="/about">
              <FaInstagram /> <span>Instagram</span>
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="/contact">
              <FaTwitter /> <span>Twitter</span>
            </a>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Footer;