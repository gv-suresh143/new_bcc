import React from "react";
import { ToastContainer } from "react-toastify";
import Sidebar from "../GlobalFiles/Sidebar";
import { Navigate } from "react-router-dom";
import { FaFileAlt, FaClipboardList, FaChartBar } from "react-icons/fa"; // Import report icons
import { Bar, Pie } from "react-chartjs-2"; // Import charts
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from 'chart.js'; // Import necessary components
import "./Reports.css"; // Import your CSS file

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const Reports = () => {
  // Simulated user data
  const data = { isAuthenticated: true, user: { userType: "nurse" } };

  if (!data.isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  if (data.user.userType !== "nurse") {
    return <Navigate to={"/dashboard"} />;
  }

  const reports = [
    { id: 1, title: "Patient Health Reports", icon: <FaFileAlt /> },
    { id: 2, title: "Medication Administration Records", icon: <FaClipboardList /> },
    { id: 3, title: "Patient Progress Reports", icon: <FaChartBar /> },
  ];

  // Sample chart data
  const barChartData = {
    labels: ["Report 1", "Report 2", "Report 3"],
    datasets: [
      {
        label: "Number of Records",
        data: [12, 19, 3], // Example data
        backgroundColor: ["rgba(75,192,192,0.4)"],
        borderColor: ["rgba(75,192,192,1)"],
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ["Health Reports", "Medication Records", "Progress Reports"],
    datasets: [
      {
        data: [45, 25, 30], // Example data
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <>
      <ToastContainer />
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Main_Reports_div">
            <h1>Reports</h1>
            <p>Here are the available reports:</p>
            <div className="reports-list">
              {reports.map((report) => (
                <div key={report.id} className="report-item">
                  <div className="report-icon">{report.icon}</div>
                  <div className="report-title">{report.title}</div>
                </div>
              ))}
            </div>

            {/* Chart Section */}
            <div className="chartSection">
              <h2>Statistics</h2>
              <div className="charts">
                <div className="chart">
                  <h3>Bar Chart</h3>
                  <Bar data={barChartData} options={{ responsive: true }} />
                </div>
                <div className="chart">
                  <h3>Pie Chart</h3>
                  <Pie data={pieChartData} options={{ responsive: true }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
