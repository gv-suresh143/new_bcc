import React from "react";
import { Route, Routes } from "react-router-dom";
import DLogin from "./DLogin";
import FrontPage from "./GlobalFiles/FrontPage";
import Add_Patient from "./Nurse/Add_Patient";
import Book_Appointment from "./Nurse/Book_Appointment";
import Nurse_Profile from "./Nurse/Nurse_Profile";
import PatientsList from "./Nurse/PatientsList";
import Messages from "./Nurse/Messages";
import Schedule from "./Nurse/Schedule";
import Reports from "./Nurse/Reports";
import CalendarPage from "./Nurse/CalendarPage";
import Appointments from "./Nurse/Appointments";
import Patient_Details from "./Nurse/Patient_Details";


const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* Define your app routes here */}
        <Route path="/new_bcc" element={<DLogin />} />
        <Route path="/dashboard" element={<FrontPage />} /> 
        ******************** Nurse Part *************************
        <Route path="/addpatient" element={<Add_Patient />} />
        <Route path="/bookappointment" element={<Book_Appointment />} />
        <Route path="/nurseprofile" element={<Nurse_Profile />} />
        <Route path="/patientslist" element={<PatientsList />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/reports" element={<Reports />} />   
        <Route path="/calendar" element={<CalendarPage />} />      
        <Route path="/appointments" element={<Appointments />} />
        
        {/* Fallback route for undefined paths (optional) */}
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </>
  );
};

export default AllRoutes;
