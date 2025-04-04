import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setUserRole }) => {
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (selectedRole) {
      setUserRole(selectedRole); // Set the selected role
      navigate(`/${selectedRole}`); // Navigate to the selected role's dashboard
    } else {
      alert("Please select a role.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600">
      <div className="p-8 bg-white shadow-xl rounded-xl w-96">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Welcome Back!
        </h2>
        <h3 className="text-xl font-medium text-center text-gray-600 mb-4">
          Please select your role to proceed
        </h3>

        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Select Your Role
          </label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          >
            <option value="">Select Role</option>
            <option value="job-seeker">Job Seeker</option>
            <option value="hiring-manager">Hiring Manager</option>
            <option value="recruiter">Recruiter</option>
          </select>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        >
          Login
        </button>

        <div className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
