  import "../CSS/Benefits.css";
import {
  FaClock,
  FaShieldAlt,
  FaChartLine,
  FaTools,
  FaDatabase,
  FaLeaf,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaClock />,
    title: "Save Time",
    description:
      "Automate asset tracking, allocation, and maintenance to reduce manual work.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Management",
    description:
      "Protect your asset information with role-based access and secure records.",
  },
  {
    icon: <FaChartLine />,
    title: "Data-Driven Decisions",
    description:
      "Use real-time reports and analytics to make informed business decisions.",
  },
  {
    icon: <FaTools />,
    title: "Reduce Maintenance Costs",
    description:
      "Schedule preventive maintenance to avoid unexpected equipment failures.",
  },
  {
    icon: <FaDatabase />,
    title: "Centralized Records",
    description:
      "Keep all asset information in one place for easy access and management.",
  },
  {
    icon: <FaLeaf />,
    title: "Improve Efficiency",
    description:
      "Optimize resource utilization and increase organizational productivity.",
  },
];

export default function Benefits() {
  return (
    <section className="benefits" id="benefits">
      <div className="section-title">
        <h2>Why Choose AssetFlow?</h2>
        <p>
          AssetFlow helps organizations manage assets efficiently while reducing
          operational costs and improving productivity.
        </p>
      </div>

      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div className="benefit-card" key={index}>
            <div className="benefit-icon">{benefit.icon}</div>

            <h3>{benefit.title}</h3>

            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}