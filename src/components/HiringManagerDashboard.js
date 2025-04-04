import React, { useState } from "react";
import { FaPen, FaBriefcase, FaChartLine, FaHistory, FaUsers, FaClipboardList } from "react-icons/fa";

const HiringManagerDashboard = () => {
  // State to manage modal visibility
  const [isPostJobModalOpen, setPostJobModalOpen] = useState(false);
  const [isViewApplicationsModalOpen, setViewApplicationsModalOpen] = useState(false);
  
  // Dummy application data for the View Applications modal
  const applications = [
    { id: 1, name: "John Doe", position: "Frontend Developer", status: "Under Review" },
    { id: 2, name: "Jane Smith", position: "Backend Developer", status: "Interview Scheduled" },
    { id: 3, name: "David Lee", position: "Full Stack Developer", status: "Rejected" },
  ];

  // Toggle modal visibility
  const togglePostJobModal = () => setPostJobModalOpen(!isPostJobModalOpen);
  const toggleViewApplicationsModal = () => setViewApplicationsModalOpen(!isViewApplicationsModalOpen);

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 min-h-screen text-white">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center mb-8">Hiring Manager Dashboard</h1>

        {/* Dashboard Container */}
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Manage Job Posts, Candidates, and Track Analytics
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Manage all your job postings, candidates, and track analytics to make informed decisions.
          </p>

          {/* Action Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Post a Job Card */}
            <div className="bg-blue-600 hover:bg-blue-700 text-white p-6 rounded-lg shadow-lg text-center transition duration-300 ease-in-out">
              <FaPen className="text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-medium mb-4">Post a New Job</h3>
              <p className="text-gray-200 mb-4">
                Create a new job post to find the perfect candidates for your team.
              </p>
              <button className="bg-white text-blue-600 p-2 rounded-lg shadow-md hover:bg-blue-200" onClick={togglePostJobModal}>
                Post a Job
              </button>
            </div>

            {/* View Applications Card */}
            <div className="bg-green-600 hover:bg-green-700 text-white p-6 rounded-lg shadow-lg text-center transition duration-300 ease-in-out">
              <FaUsers className="text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-medium mb-4">View Applications</h3>
              <p className="text-gray-200 mb-4">
                Track and review applications from job seekers interested in your posts.
              </p>
              <button className="bg-white text-green-600 p-2 rounded-lg shadow-md hover:bg-green-200" onClick={toggleViewApplicationsModal}>
                View Applications
              </button>
            </div>

            {/* Manage Candidates Card */}
            <div className="bg-purple-600 hover:bg-purple-700 text-white p-6 rounded-lg shadow-lg text-center transition duration-300 ease-in-out">
              <FaUsers className="text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-medium mb-4">Manage Candidates</h3>
              <p className="text-gray-200 mb-4">
                Evaluate, shortlist, and manage candidates for the roles you've posted.
              </p>
              <button className="bg-white text-purple-600 p-2 rounded-lg shadow-md hover:bg-purple-200">
                Manage Candidates
              </button>
            </div>

            {/* Job Analytics Card */}
            <div className="bg-indigo-600 hover:bg-indigo-700 text-white p-6 rounded-lg shadow-lg text-center transition duration-300 ease-in-out">
              <FaChartLine className="text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-medium mb-4">Job Analytics</h3>
              <p className="text-gray-200 mb-4">
                View data insights about your job posts, including applicants, views, and engagement.
              </p>
              <button className="bg-white text-indigo-600 p-2 rounded-lg shadow-md hover:bg-indigo-200">
                View Analytics
              </button>
            </div>

            {/* Job Post History Card */}
            <div className="bg-teal-600 hover:bg-teal-700 text-white p-6 rounded-lg shadow-lg text-center transition duration-300 ease-in-out">
              <FaHistory className="text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-medium mb-4">Job Post History</h3>
              <p className="text-gray-200 mb-4">
                Revisit your previous job posts and track the progress of applicants.
              </p>
              <button className="bg-white text-teal-600 p-2 rounded-lg shadow-md hover:bg-teal-200">
                View History
              </button>
            </div>

            {/* Manage Job Post Settings Card */}
            <div className="bg-yellow-600 hover:bg-yellow-700 text-white p-6 rounded-lg shadow-lg text-center transition duration-300 ease-in-out">
              <FaBriefcase className="text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-medium mb-4">Manage Post Settings</h3>
              <p className="text-gray-200 mb-4">
                Adjust your job post settings and customize what applicants will see.
              </p>
              <button className="bg-white text-yellow-600 p-2 rounded-lg shadow-md hover:bg-yellow-200">
                Manage Settings
              </button>
            </div>

            {/* View Applicants for Job Card */}
            <div className="bg-red-600 hover:bg-red-700 text-white p-6 rounded-lg shadow-lg text-center transition duration-300 ease-in-out">
              <FaClipboardList className="text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-medium mb-4">View Applicants</h3>
              <p className="text-gray-200 mb-4">
                View all the applicants for your job postings and evaluate them.
              </p>
              <button className="bg-white text-red-600 p-2 rounded-lg shadow-md hover:bg-red-200">
                View Applicants
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Post Job Modal */}
      {isPostJobModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h3 className="text-2xl font-semibold mb-4">Post a New Job</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Job Title</label>
                <input type="text" className="w-full p-2 border rounded-lg" placeholder="Job Title" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Job Description</label>
                <textarea className="w-full p-2 border rounded-lg" placeholder="Job Description"></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Location</label>
                <input type="text" className="w-full p-2 border rounded-lg" placeholder="Location" />
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={togglePostJobModal} className="bg-red-500 text-white px-4 py-2 rounded-lg mr-4">Cancel</button>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Post Job</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* View Applications Modal */}
      {isViewApplicationsModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h3 className="text-2xl font-semibold mb-4">Applications</h3>
            <ul className="mb-4">
              {applications.map((app) => (
                <li key={app.id} className="border-b py-2">
                  <div className="flex justify-between">
                    <p className="font-medium">{app.name}</p>
                    <p className="text-gray-600">{app.position}</p>
                  </div>
                  <p className="text-sm text-gray-500">Status: {app.status}</p>
                </li>
              ))}
            </ul>
            <div className="flex justify-end">
              <button type="button" onClick={toggleViewApplicationsModal} className="bg-red-500 text-white px-4 py-2 rounded-lg">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HiringManagerDashboard;
