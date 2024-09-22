import React from "react";
import { ToastContainer } from "react-toastify";
import Sidebar from "../GlobalFiles/Sidebar";
import { Navigate } from "react-router-dom";
import "./CalendarPage.css"; // Import your CSS file

const CalendarPage = () => {
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
          <div className="Main_Schedule_div">
            <h1>Calendar</h1>
            <p>Schedule your appointments below:</p>
            <div className="calendar-container">
              {/* Simple Calendar Layout */}
              <div className="calendar">
                <div className="calendar-header">
                  <div className="calendar-day">Sun</div>
                  <div className="calendar-day">Mon</div>
                  <div className="calendar-day">Tue</div>
                  <div className="calendar-day">Wed</div>
                  <div className="calendar-day">Thu</div>
                  <div className="calendar-day">Fri</div>
                  <div className="calendar-day">Sat</div>
                </div>
                <div className="calendar-body">
                  {/* Sample Days */}
                  {Array.from({ length: 42 }).map((_, index) => (
                    <div key={index} className="calendar-day-box">
                      {index + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarPage;
