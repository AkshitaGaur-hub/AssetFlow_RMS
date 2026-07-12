import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";

import Landing from "./Frontend/Landing/JSX/Landing";

import AdminRouter from "./Frontend/admin/AdminRouter";
import EmployeeRouter from "./Frontend/employee/EmployeeRouter";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />

      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Admin */}
        <Route path="/admin/*" element={<AdminRouter />} />

        {/* Employee */}
        <Route path="/employee/*" element={<EmployeeRouter />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;