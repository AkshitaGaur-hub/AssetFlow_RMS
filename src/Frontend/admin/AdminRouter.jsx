// import React from 'react'
import Requests from "./pages/Requests";
import { Route } from "react-router-dom";
import AllocateAsset from "./pages/AllocateAsset";

const AdminRouter = () => {
  return (
    <div>
      <Route
        path="/requests"
        element={<Requests />}
      />
      <Route
        path="/allocate"
        element={<AllocateAsset />}
      />
    </div>
  )
}

export default AdminRouter
