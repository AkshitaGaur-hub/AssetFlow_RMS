import "../CSS/About.css";
import aboutImg from "../../../assets/office.png"; // Replace with your image

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-image">
        <img src={aboutImg} alt="About AssetFlow" />
      </div>

      <div className="about-content">
        <span className="section-tag">About AssetFlow</span>

        <h2>
          Simplifying Asset & Resource
          <span> Management</span>
        </h2>

        <p>
          AssetFlow is an Enterprise Asset & Resource Management System
          designed to help organizations efficiently track, allocate,
          maintain, and monitor physical assets from a centralized platform.
          Whether it's equipment, furniture, vehicles, or shared resources,
          AssetFlow ensures transparency and improves operational efficiency.
        </p>

        <div className="about-list">
          <div>✔ Centralized Asset Database</div>
          <div>✔ QR/Barcode Based Tracking</div>
          <div>✔ Maintenance Scheduling</div>
          <div>✔ Resource Allocation</div>
          <div>✔ Real-Time Analytics</div>
          <div>✔ Role-Based Access Control</div>
        </div>

        <button className="about-btn">
          Learn More
        </button>
      </div>
    </section>
  );
}