import React, { useEffect, useState } from "react";

import "../dashboard_css/Dashboard.css";

import StatsCards from "./StatsCards";
import AnalyticsChart from "./AnalyticsChart";
import UpcomingEvents from "./UpcomingEvents";
import RecentRegistrations from "./RecentRegistrations";
import RecentActivities from "./RecentActivities";

const Dashboard = () => {

  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      setCurrentTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

      setCurrentDate(
        now.toLocaleDateString("en-IN", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      );
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (

    <div className="dashboard">

      {/* Header */}
      <div className="dashboard-header">
        <div>
<h1>Event Management Dashboard</h1>
<p>Monitor events, registrations, volunteers, and analytics from one place.</p>

        </div>
        <div className="dashboard-date">
          <h3>{currentTime}</h3>
          <p>{currentDate}</p>
        </div>
      </div>

      {/* Cards */}
      <StatsCards />

      {/* Middle */}

      <div className="dashboard-row">
        <div className="left">
          <AnalyticsChart />
        </div>

        <div className="right">
          <RecentActivities />
        </div>
      </div>

      {/* Bottom */}

      <div className="dashboard-row">
        <div className="left">
          <UpcomingEvents />
        </div>

        <div className="right">
          <RecentRegistrations />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;