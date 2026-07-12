import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";

import Landing from "./Frontend/Landing/JSX/Landing";
import Login from "./Frontend/Login/Login";
import Register from "./Frontend/Register/Register";

import AdminRouter from "./Frontend/admin/AdminRouter";
import EmployeeRouter from "./Frontend/employee/EmployeeRouter";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/admin/*" element={<AdminRouter />} />
        <Route path="/employee/*" element={<EmployeeRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;