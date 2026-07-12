import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LandingNavbar from "../Landing/Components/LandingNavbar";
import LandingFooter from "../Landing/Components/LandingFooter";
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

   const handleLogin = async (e) => {
    e.preventDefault();

    try {

        const form = new FormData();

        form.append(
            "username",
            formData.username
        );

        form.append(
            "password",
            formData.password
        );


        const response = await axios.post(
            "http://127.0.0.1:8000/users/login",
            form,
            {
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            }
        );


        console.log("Login Response:", response.data);


        localStorage.setItem(
            "token",
            response.data.access_token
        );


        // get current user
        const user = response.data;
        localStorage.setItem(
            "role",
            user.role
        );

        localStorage.setItem(
            "userId",
            user.id
        );

        localStorage.setItem(
            "username",
            user.name
        );


        const role = user.role.toLowerCase();


        if(role==="admin"){
            navigate("/admin/dashboard");
        }
        else if(role==="asset manager"){
            navigate("/assetmanager/dashboard");
        }
        else if(role==="department head"){
            navigate("/department/dashboard");
        }
        else{
            navigate("/employee/dashboard");
        }


    }
    catch(error){

        console.log(
            "STATUS:",
            error.response?.status
        );

        console.log(
            "ERROR:",
            error.response?.data
        );

        alert(
            error.response?.data?.detail ||
            "Login Failed"
        );

    }
};

    return (
        <div className="login-page">
            <LandingNavbar />

            <div className="login-content">
                <div className="login-card">

                    <h1>Welcome Back </h1>

                    <p>Login to continue</p>

                    <form onSubmit={handleLogin}>

                        <div className="input-box">
                            <input
                                type="email"
                                name="username"
                                placeholder="Email"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input-box">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="login-btn">
                            Login
                        </button>

                    </form>

                </div>
            </div>

            <LandingFooter />
        </div>
    );
};

export default Login;