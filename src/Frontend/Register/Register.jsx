import { useState } from "react";
import axios from "axios";
import "./Register.css";
import toast from "react-hot-toast";
import LandingNavbar from "../Landing/Components/LandingNavbar";
import LandingFooter from "../Landing/Components/LandingFooter";

const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Employee"
  });


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleRegister = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "http://127.0.0.1:8000/users/register",
        formData
      );


      console.log(response.data);

      toast.success(
        "Registration submitted. Wait for approval."
      );


      setFormData({
        name: "",
        email: "",
        password: "",
        role: "Employee"
      });


    } catch(error) {

      console.log(
        error.response?.data || error.message
      );

      toast.error("Registration failed");

    }

  };


  return (
    <>
      <LandingNavbar />

      <div className="register-page">

        <div className="register-card">

          <h1>Create Account 🚀</h1>

          <p>
            Join AssetFlow RMS
          </p>


          <form onSubmit={handleRegister}>


            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>


            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
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


            <div className="input-box">

              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
              >

                <option value="Employee">
                  Employee
                </option>

                <option value="Asset Manager">
                  Asset Manager
                </option>

                <option value="Department Head">
                  Department Head
                </option>

              </select>

            </div>



            <button className="register-btn">
              Register
            </button>


          </form>


        </div>

      </div>


      <LandingFooter />

    </>
  );
};


export default Register;