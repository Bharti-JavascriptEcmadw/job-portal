import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import JobSeekerDashboard from "./components/JobSeekerDashboard";
import HiringManagerDashboard from "./components/HiringManagerDashboard";
import RecruiterDashboard from "./components/RecruiterDashboard";
import LoginPage from "./components/LoginPage";

function App() {
  const [userRole, setUserRole] = useState(null); // Store user role state

  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          {/* Login Route */}
          <Route path="/" element={<LoginPage setUserRole={setUserRole} />} />
          
          {/* Conditionally render the routes based on userRole */}
          {userRole && (
            <>
              <Route path="/job-seeker" element={<JobSeekerDashboard />} />
              <Route path="/hiring-manager" element={<HiringManagerDashboard />} />
              <Route path="/recruiter" element={<RecruiterDashboard />} />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
