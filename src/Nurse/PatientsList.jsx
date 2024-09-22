import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Sidebar from "../GlobalFiles/Sidebar";
import { Navigate } from "react-router-dom";
import { FaUser, FaTrash, FaUserPlus } from "react-icons/fa"; // Import icons
import "./PatientsList.css"; // Import your CSS file

const PatientsList = () => {
  // Simulated user data
  const data = { isAuthenticated: true, user: { userType: "nurse" } };

  if (!data.isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  if (data.user.userType !== "nurse") {
    return <Navigate to={"/dashboard"} />;
  }

  // Sample patients data
  const initialPatients = [
    { id: 1, name: "John Doe", age: 30, gender: "Male" },
    { id: 2, name: "Jane Smith", age: 25, gender: "Female" },
    { id: 3, name: "Alice Johnson", age: 40, gender: "Female" },
    { id: 4, name: "Bob Brown", age: 35, gender: "Male" },
  ];

  const [patients, setPatients] = useState(initialPatients);

  const addPatient = () => {
    const newPatient = { id: patients.length + 1, name: "New Patient", age: 28, gender: "Not Specified" };
    setPatients([...patients, newPatient]);
    toast.success("Patient added!");
  };

  const removePatient = (id) => {
    setPatients(patients.filter(patient => patient.id !== id));
    toast.error("Patient removed!");
  };

  return (
    <>
      <ToastContainer />
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Main_Patients_List_div">
            <h1>Patients List</h1>
            <button className="add-patient-button" onClick={addPatient}>
              <FaUserPlus /> Add Patient
            </button>
            <p>Currently displaying {patients.length} patients.</p>
            <div className="patients-list">
              {patients.map((patient) => (
                <div key={patient.id} className="patient-item">
                  <FaUser className="patient-icon" />
                  <div className="patient-info">
                    <h3>{patient.name}</h3>
                    <p>Age: {patient.age}</p>
                    <p>Gender: {patient.gender}</p>
                  </div>
                  <button className="remove-patient-button" onClick={() => removePatient(patient.id)}>
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientsList;
