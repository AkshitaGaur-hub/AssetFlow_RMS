import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

function EmployeeRouter(){

    return(
        <Routes>

            <Route 
              path="/dashboard" 
              element={<Dashboard />}
            />

        </Routes>
    );

}

export default EmployeeRouter;