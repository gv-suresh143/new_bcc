import React from "react";
import { ToastContainer } from "react-toastify";
import Sidebar from "../GlobalFiles/Sidebar";
import { Navigate } from "react-router-dom";
import "./AddPatient.css"; // Import your CSS file

const Add_Patient = () => {
  // Simulated user data
  const data = { isAuthenticated: true, user: { userType: "nurse" } };

  if (!data.isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  if (data.user.userType !== "nurse") {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <>
      <ToastContainer />
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Main_Add_Doctor_div">
            <h1>Add Patient</h1>
            <p>Please fill out the form below to add a new patient.</p>
            <form className="patient-form">
              <h2>Patient Details</h2>
              <div className="form-group">
                <label htmlFor="patientName">Patient Name</label>
                <input type="text" id="patientName" placeholder="Enter patient name" required />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input type="number" id="age" placeholder="Enter age" required />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select id="gender" required>
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="bloodGroup">Blood Group</label>
                <input type="text" id="bloodGroup" placeholder="Enter blood group" required />
              </div>
              <div className="form-group">
                <label htmlFor="mobile">Mobile</label>
                <input type="tel" id="mobile" placeholder="Enter mobile number" required />
              </div>
              <button type="submit" className="submit-btn">Add Patient</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add_Patient;
