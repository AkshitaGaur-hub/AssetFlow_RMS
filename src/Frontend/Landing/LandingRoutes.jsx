import { Routes, Route } from "react-router-dom";

import Landing from "./JSX/Landing";
import About from "./JSX/About";
import Contact from "./JSX/Contact";


export default function LandingRoutes() {
  return (
    
    <Routes>
        <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}