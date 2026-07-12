import "../CSS/Modules.css";
import {
  FaBoxes,
  FaUsersCog,
  FaTools,
  FaClipboardList,
  FaChartBar,
  FaWarehouse,
} from "react-icons/fa";

const modules = [
  {
    icon: <FaBoxes />,
    title: "Asset Management",
    description:
      "Add, update, categorize, and monitor all organizational assets from one place.",
  },
  {
    icon: <FaUsersCog />,
    title: "User Management",
    description:
      "Manage employees, departments, and role-based permissions securely.",
  },
  {
    icon: <FaWarehouse />,
    title: "Resource Allocation",
    description:
      "Allocate rooms, vehicles, equipment, and other shared resources efficiently.",
  },
  {
    icon: <FaTools />,
    title: "Maintenance",
    description:
      "Schedule preventive maintenance and track repair history effortlessly.",
  },
  {
    icon: <FaClipboardList />,
    title: "Asset Requests",
    description:
      "Handle asset requests, approvals, returns, and issue tracking digitally.",
  },
  {
    icon: <FaChartBar />,
    title: "Reports & Analytics",
    description:
      "Generate real-time reports and monitor asset performance with insightful dashboards.",
  },
];

export default function Modules() {
  return (
    <section className="modules" id="modules">
      <div className="section-title">
        <h2>Core Modules</h2>
        <p>
          AssetFlow provides everything your organization needs to manage
          assets efficiently.
        </p>
      </div>

      <div className="modules-grid">
        {modules.map((module, index) => (
          <div className="module-card" key={index}>
            <div className="module-icon">{module.icon}</div>

            <h3>{module.title}</h3>

            <p>{module.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}