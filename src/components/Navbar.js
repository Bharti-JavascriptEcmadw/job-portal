import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // State to manage user type (Job Seeker or Recruiter)
  const [userType, setUserType] = useState("jobSeeker"); // Change to 'recruiter' for recruiter

  // Handle logout
  const handleLogout = () => {
    alert(`${userType === "jobSeeker" ? "Job Seeker" : "Recruiter"} logged out successfully!`);
    navigate("/"); // Redirect to login page or home
  };

  return (
    <div className="bg-indigo-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Conditional Rendering of Title */}
        <h1 className="text-2xl font-semibold">
          {userType === "jobSeeker" ? "Job Seeker Dashboard" : "Recruiter Dashboard"}
        </h1>

        {/* Navbar links and logout button */}
        <div className="space-x-4">
          {/* Render different links if needed */}
          {userType === "jobSeeker" ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200"
            >
              Logout as Job Seeker
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-600 py-2 px-4 rounded-lg hover:bg-red-700 transition duration-200"
            >
              Logout as Recruiter
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
