import "./LandingFooter.css";

export default function LandingFooter() {
  return (
    <footer className="landing-footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>📦 AssetFlow ERP</h2>

          <p>
            Simplifying asset and resource management through a centralized,
            secure, and intelligent platform for organizations of all sizes.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">

          <div>
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#modules">Modules</a>
            <a href="#faq">FAQ</a>
          </div>

          <div>
            <h3>Platform</h3>

            <a href="/admin/login">Admin Login</a>
            <a href="/employee/login">Employee Login</a>
            <a href="#">Dashboard</a>
            <a href="#">Reports</a>
            <a href="#">Support</a>
          </div>

          <div>
            <h3>Contact</h3>

            <p>📍 Jaipur, Rajasthan</p>
            <p>📧 support@assetflow.com</p>
            <p>📞 +91 98765 43210</p>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 <strong>AssetFlow ERP</strong>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}