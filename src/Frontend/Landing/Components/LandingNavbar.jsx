import "./LandingNavbar.css";
import { Link } from "react-router-dom";

export default function LandingNavbar() {
  return (
    <nav className="landing-navbar">

      <div className="logo">
        <span className="logo-icon">🤝</span>
        <h2>Smart Volunteer Management</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#how">How It Works</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-buttons">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
        <Link to="/register">
          <button className="login-btn">Get started</button>
        </Link>

       
      </div>

    </nav>
  );
}