import React from "react";
import { ToastContainer } from "react-toastify";
import Sidebar from "../GlobalFiles/Sidebar";
import { Navigate } from "react-router-dom";
import "./Messages.css"; // Import your CSS file

const Messages = () => {
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
          <div className="Main_Messages_div">
            <h1>Messages</h1>
            <p>Your messages will appear here.</p>
            <div className="messages-container">
              {/* Simulated Messages */}
              <div className="message">
                <div className="message-sender">Nurse John:</div>
                <div className="message-text">Don't forget to check the patient vitals.</div>
              </div>
              <div className="message">
                <div className="message-sender">Dr. Smith:</div>
                <div className="message-text">Patient in Room 3 needs immediate attention.</div>
              </div>
              {/* More messages can be added here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
