import { NavLink } from "react-router-dom";
import "./Sidebar.css";

import {
  FaHome,
  FaCalendarAlt,
  FaClipboardList,
  FaCertificate,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = ({ collapsed, setCollapsed, isOpen = true, setIsOpen = () => {} }) => {
  return (
    <div className={`sidebar ${collapsed ? "collapsed" : "open"} ${isOpen ? "open" : "closed"}`}>
      <button
        className="toggle-btn"
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <FaBars /> : <FaTimes />}
      </button>
      {/* <button
        className="close-btn"
        onClick={() => setIsOpen(false)}
        aria-label="Close sidebar"
      >
        <FaTimes />
      </button> */}

      <div className="sidebar-header">
        <h2>Volunteer</h2>
      </div>

      <ul className="menu">
        <li>
          <NavLink to="/volunteer/dashboard" className="menu-link">
            <FaHome className="icon" />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/volunteer/events" className="menu-link">
            <FaCalendarAlt className="icon" />
            <span>Browse Events</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/volunteer/my-events" className="menu-link">
            <FaClipboardList className="icon" />
            <span>My Events</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/volunteer/certificates" className="menu-link">
            <FaCertificate className="icon" />
            <span>Certificates</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/volunteer/profile" className="menu-link">
            <FaUser className="icon" />
            <span>Profile</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/volunteer/settings" className="menu-link">
            <FaCog className="icon" />
            <span>Settings</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/login" className="menu-link">
            <FaSignOutAlt className="icon" />
            <span>Logout</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;