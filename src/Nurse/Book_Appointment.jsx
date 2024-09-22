import React, { useState } from "react";
import Sidebar from "../GlobalFiles/Sidebar";
import "./BookAppointment.css"; // Import your CSS file

const Book_Appointment = () => {
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [notes, setNotes] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate booking process
    setMessage(`Appointment booked for ${patientName} with Dr. ${doctorName} on ${date} at ${time}.`);
    // Reset the form
    setPatientName("");
    setDoctorName("");
    setDate("");
    setTime("");
    setNotes("");
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="AfterSideBar">
        <div className="Main_Add_Doctor_div">
          <h1>Book Appointment</h1>
          <p>Fill out the form below to book an appointment.</p>
          <form className="appointment-booking-form" onSubmit={handleSubmit}>
            <h2>Appointment Details</h2>
            <div className="form-group">
              <label htmlFor="patientName">Patient Name</label>
              <input
                type="text"
                id="patientName"
                placeholder="Enter patient name"
                required
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="doctorName">Doctor Name</label>
              <input
                type="text"
                id="doctorName"
                placeholder="Enter doctor name"
                required
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="notes">Notes</label>
              <textarea
                id="notes"
                rows="4"
                placeholder="Additional notes..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Book Appointment</button>
          </form>
          {message && <div className="confirmation-message">{message}</div>}
        </div>
      </div>
    </div>
  );
};

export default Book_Appointment;
