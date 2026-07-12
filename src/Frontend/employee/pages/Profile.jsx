import "../Employee_css/Profile.css";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaEdit,
} from "react-icons/fa";

import { useEffect, useState } from "react";
import axios from "axios";


const Profile = () => {

    const [user, setUser] = useState(null);


    useEffect(() => {

        const fetchUser = async () => {

            try {

                const token = localStorage.getItem("token");


                if (!token) {
                    console.log("No token found");
                    return;
                }


                const response = await axios.get(
                    "http://127.0.0.1:8000/auth/me",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );


                console.log(response.data);

                setUser(response.data);


            } catch (error) {

                console.log(
                    "Fetch User Error:",
                    error.response?.data || error.message
                );

            }

        };


        fetchUser();


    }, []);

    if (!user) {
        return <h2>Loading profile...</h2>;
    }



    return (
        <div className="profile">


            <div className="profile-card">


                <img
                    src={`https://api.dicebear.com/9.x/notionists/svg?seed=${user.name}`}
                    alt="Profile"
                    className="profile-image"
                />


                <h2>{user.name}</h2>


                <p className="role">
                    {user.role}
                </p>


                <button className="edit-btn">
                    <FaEdit /> Edit Profile
                </button>


            </div>



            <div className="profile-details">


                <h2>
                    Personal Information
                </h2>


                <div className="info">


                    <p>
                        <FaEnvelope />
                        {user.email}
                    </p>


                    <p>
                        <FaPhone />
                        {user.phone || "Not added"}
                    </p>


                    <p>
                        <FaMapMarkerAlt />
                        Rajasthan
                    </p>


                    <p>
                        <FaUser />
                        {user.skills || "No skills added"}
                    </p>


                </div>


            </div>


        </div>
    );
};


export default Profile;