import React from "react";
import { Route, Routes } from "react-router-dom";
import DLogin from "./DLogin";
import FrontPage from "./GlobalFiles/FrontPage";
import Patient_Details from "./GlobalFiles/Patient_Details";


const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* Define your app routes here */}
        <Route path="/new_bcc" element={<DLogin />} />
        <Route path="/dashboard" element={<FrontPage />} /> {/* Example for another route */}
        {/* Add more routes as needed */}
        
        {/* Fallback route for undefined paths (optional) */}
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </>
  );
};

export default AllRoutes;
