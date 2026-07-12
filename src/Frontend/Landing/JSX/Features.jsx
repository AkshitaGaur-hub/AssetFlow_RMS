import "../CSS/Features.css";
import {
  FaBoxOpen,
  FaQrcode,
  FaTools,
  FaChartLine,
  FaUsersCog,
  FaBell,
} from "react-icons/fa";

const features = [
  {
    icon: <FaBoxOpen />,
    title: "Asset Tracking",
    description:
      "Monitor and manage all organizational assets from a centralized dashboard.",
  },
  {
    icon: <FaQrcode />,
    title: "QR/Barcode Support",
    description:
      "Quickly identify and update assets using QR codes or barcodes.",
  },
  {
    icon: <FaTools />,
    title: "Maintenance Management",
    description:
      "Schedule preventive maintenance and track repair history efficiently.",
  },
  {
    icon: <FaChartLine />,
    title: "Analytics & Reports",
    description:
      "Gain insights with real-time dashboards and detailed reports.",
  },
  {
    icon: <FaUsersCog />,
    title: "Role-Based Access",
    description:
      "Securely manage admins, departments, and employees with role permissions.",
  },
  {
    icon: <FaBell />,
    title: "Smart Notifications",
    description:
      "Receive alerts for maintenance, asset assignments, and important updates.",
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="section-header">
        <h2>Powerful Features</h2>
        <p>
          Everything you need to efficiently manage assets, resources, and
          maintenance in one place.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}