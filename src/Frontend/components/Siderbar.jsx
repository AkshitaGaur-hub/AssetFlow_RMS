import { NavLink } from "react-router-dom";
import "./Sidebar.css";

import {
  FaHome,
  FaClipboardList,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Sidebar = ({ collapsed, setCollapsed, isOpen = true, setIsOpen = () => { } }) => {
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
        <h2>Employee</h2>
      </div>

      <ul className="menu">

        <li>
          <NavLink
            to="/employee/dashboard"
            className="menu-link"
          >
            <FaHome className="icon" />
            <span>Dashboard</span>
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/employee/my-assets"
            className="menu-link"
          >
            <FaClipboardList className="icon" />
            <span>My Assets</span>
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/employee/profile"
            className="menu-link"
          >
            <FaUser className="icon" />
            <span>Profile</span>
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/employee/settings"
            className="menu-link"
          >
            <FaCog className="icon" />
            <span>Settings</span>
          </NavLink>
        </li>


        <li>
          <NavLink
            to="/login"
            className="menu-link"
            onClick={() => {
              localStorage.clear();
            }}
          >
            <FaSignOutAlt className="icon" />
            <span>Logout</span>
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;