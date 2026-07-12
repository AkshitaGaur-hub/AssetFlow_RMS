import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Siderbar";

import "./dashboard.css";


const MyAssets = () => {

    const [assets, setAssets] = useState([]);

    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);



    useEffect(() => {

        const token = localStorage.getItem("token");


        axios.get(
            "http://127.0.0.1:8000/assets/my-assets",
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )
        .then((res)=>{

            console.log("My Assets:", res.data);

            setAssets(res.data);

        })
        .catch((err)=>{

            console.log(
                err.response?.data || err.message
            );

        });


    },[]);



    return (

        <>
        <Navbar
            onSidebarToggle={()=>
                setSidebarOpen(!sidebarOpen)
            }
        />


        <Sidebar
            collapsed={sidebarCollapsed}
            setCollapsed={setSidebarCollapsed}
            isOpen={sidebarOpen}
            setIsOpen={setSidebarOpen}
        />



        <div className={`dashboard ${
            sidebarCollapsed ? "collapsed" : ""
        }`}>



            <h1>
                My Assets 💻
            </h1>


            <div className="dashboard-cards">


            {
                assets.length === 0 ?

                <h3>
                    No Assets Assigned
                </h3>

                :

                assets.map((asset)=>(

                    <div 
                    className="chart-card"
                    key={asset.id}
                    >

                        <h2>
                            {asset.name}
                        </h2>

                        <p>
                            Tag: {asset.tag}
                        </p>

                        <p>
                            Category: {asset.category}
                        </p>

                        <p>
                            Condition: {asset.condition}
                        </p>

                        <p>
                            Status: {asset.status}
                        </p>


                    </div>

                ))
            }


            </div>


        </div>


        <Footer/>

        </>

    );
};


export default MyAssets;