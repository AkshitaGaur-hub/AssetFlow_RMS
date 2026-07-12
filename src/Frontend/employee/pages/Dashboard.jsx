import { useEffect, useState } from "react";
import axios from "axios";

import DashboardCard from "../../../components/DashboardCard";
import EventChart from "../../../components/EventChart";
import CategoryChart from "../../../components/CategoryChart";
import { Link } from "react-router-dom";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import DashboardCard from "../../../components/DashboardCard";
import EventChart from "../../../components/EventChart";

import {
    FaCalendarAlt,
    FaClock,
    FaCertificate,
    FaUserCheck,
} from "react-icons/fa";

import "../Employee_css/Dashboard.css";


const Dashboard = () => {


    const [dashboardData, setDashboardData] = useState(null);


    // Temporary logged in user id


    useEffect(() => {

        const token = localStorage.getItem("token");

        console.log("Dashboard token:", token);


        axios.get(
            "http://127.0.0.1:8000/dashboard/volunteer",
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
                    err.response?.data
                );

            });


    }, []);

    if (!dashboardData) {

        return (
            <h2>
                Loading Dashboard...
            </h2>
        )

    }



    // Event attendance chart
    const attendanceData = dashboardData.events.map(
        (event) => ({

            event: event.title,

            attendance: 100

        })
    );



    // Event status chart

    const eventStatusData = [

        {
            name: "Approved",
            value: dashboardData.events_joined
        },

        {
            name: "Hours",
            value: dashboardData.hours_completed
        }

    ];




    return (

        <div className="dashboard">


            <div className="dashboard-header">

                <div>

                    <h1>
                        Volunteer Dashboard
                    </h1>


                    <p>
                        Welcome back {dashboardData.name}! Track your volunteer journey.
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

                    title="Events Joined"

                    value={dashboardData.events_joined}

                    icon={<FaCalendarAlt />}

                />



                <DashboardCard

                    title="Hours Completed"

                    value={dashboardData.hours_completed}

                    icon={<FaClock />}

                />



                <DashboardCard

                    title="Certificates"

                    value="1"

                    icon={<FaCertificate />}

                />



                <DashboardCard

                    title="Attendance"

                    value="42%"

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




                    <CategoryChart data={eventStatusData} />



                </div>


            </div>


        </div>

    );


};


export default Dashboard;