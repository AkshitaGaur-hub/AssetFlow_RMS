import { Routes, Route } from "react-router-dom";

import RequestAsset from "./pages/RequestAsset";
import Dashboard from "./pages/Dashboard";
import MyAssets from "./pages/MyAssests.jsx";


const EmployeeRouter = () => {

    return (

        <Routes>

            <Route
                path="/dashboard"
                element={<Dashboard />}
            />


            <Route
                path="/my-assets"
                element={<MyAssets />}
            />


            <Route
                path="/request-asset"
                element={<RequestAsset />}
            />

        </Routes>

    )

}


export default EmployeeRouter;