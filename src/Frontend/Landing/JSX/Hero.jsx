import "../CSS/Hero.css";
import hero from "../../../assets/assest.png";

export default function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-left">

        <span className="hero-tag">
          📦 AssetFlow ERP
        </span>

        <h1>
          One Platform For
     All Your Enterprise
         Assets
        </h1>

        <p>
          Streamline the way your organization manages physical assets,
          equipment, vehicles, and shared resources with a centralized
          ERP platform designed for efficient tracking, allocation,
          maintenance, and reporting.
        </p>

        <div className="hero-features">
          <div>✔ Real-Time Asset Tracking</div>
          <div>✔ Resource Allocation</div>
          <div>✔ Maintenance Scheduling</div>
          <div>✔ Analytics & Reports</div>
        </div>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Started
          </button>

          <button className="secondary-btn">
            Explore Features
          </button>
        </div>

      </div>

      <div className="hero-right">
        <img src={hero} alt="Asset Management Illustration" />
      </div>

    </section>
  );
}