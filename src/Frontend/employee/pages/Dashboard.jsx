import { useEffect, useState } from "react";
import axios from "axios";
import DashboardCard from "../../components/DashboardCard";
import EventChart from "../../components/EventChart";
// import CategoryChart from "../../../components/CategoryChart";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Siderbar"

import {
    FaCalendarAlt,
    FaClock,
    FaCertificate,
    FaUserCheck,
} from "react-icons/fa";

import "../../employee/pages/dashboard.css";


const Dashboard = () => {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [dashboardData, setDashboardData] = useState(null);


    useEffect(() => {
        const token = localStorage.getItem("token");

        console.log("Dashboard token:", token);

        axios.get(
            "http://127.0.0.1:8000/dashboard/stats",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
            .then((res) => {
                console.log(res.data);
                setDashboardData(res.data);
            })
            .catch((err) => {
                console.log(
                    "Dashboard error:",
                    err.response?.data || err.message
                );
            });
    }, []);

    if (!dashboardData) {
        return <h1>Loading dashboard...</h1>;
    }

    const totalAssets = dashboardData.total_assets || 0;
    const assignedAssets = dashboardData.assigned_assets || 0;
    const availableAssets = dashboardData.available_assets || 0;
    const activeAllocations = dashboardData.active_allocations || 0;

    const attendanceData = [
        {
            event: "Available",
            attendance: totalAssets > 0 ? Math.round((availableAssets / totalAssets) * 100) : 0,
        },
        {
            event: "Assigned",
            attendance: totalAssets > 0 ? Math.round((assignedAssets / totalAssets) * 100) : 0,
        },
    ];




    return (
        <>
            <Navbar onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />
            <Sidebar
                collapsed={sidebarCollapsed}
                setCollapsed={setSidebarCollapsed}
                isOpen={sidebarOpen}
                setIsOpen={setSidebarOpen}
            />
            <div className={`dashboard ${sidebarCollapsed ? "collapsed" : ""}`}>
                <div className="dashboard-header">
                    <div>
                        <h1>Employee Dashboard</h1>
                        <p>
                            Your asset and allocation overview.
                        </p>
                    </div>
                    <Link to="/events">
                        <button className="browse-btn">
                            Browse Events
                        </button>
                    </Link>
                </div>
                <div className="dashboard-cards">
                    <DashboardCard
                        title="Total Assets"
                        value={totalAssets}
                        icon={<FaCalendarAlt />}
                    />
                    <DashboardCard
                        title="Assigned Assets"
                        value={assignedAssets}
                        icon={<FaClock />}
                    />
                    <DashboardCard
                        title="Available Assets"
                        value={availableAssets}
                        icon={<FaCertificate />}
                    />
                    <DashboardCard
                        title="Active Allocations"
                        value={activeAllocations}
                        icon={<FaUserCheck />}
                    />
                </div>
                <div className="chart-grid">
                    <div className="chart-card">
                        <div className="chart-header">
                            <div>
                                <h3>
                                    📊 Joined Events
                                </h3>
                                <p>
                                    Your registered events
                                </p>
                            </div>
                        </div>
                        <EventChart data={attendanceData} />
                    </div>
                    <div className="chart-card">
                        <div className="chart-header">
                            <div>
                                <h3>
                                    📅 Event Summary
                                </h3>
                                <p>
                                    Your contribution overview
                                </p>
                            </div>
                        </div>
                        {/* <CategoryChart data={eventStatusData} /> */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};


export default Dashboard;