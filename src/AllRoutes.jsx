import React from "react";
import { Route, Routes } from "react-router-dom";
import DLogin from "./DLogin";
import App from "./App";  // Example of importing another component for routing

const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* Define your app routes here */}
        <Route path="/new_bcc/" element={<DLogin />} />
        <Route path="/dashboard" element={<App />} /> {/* Example for another route */}
        {/* Add more routes as needed */}
        
        {/* Fallback route for undefined paths (optional) */}
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </>
  );
};

export default AllRoutes;
