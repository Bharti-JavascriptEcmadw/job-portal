import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate

const RecruiterDashboard = () => {
    const navigate = useNavigate();

  // Dummy data for candidates (in real-world, this data will be fetched from an API)
  const candidates = [
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      location: "New York, NY",
      skills: "JavaScript, React, Node.js",
      experience: "3 years",
      profile: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Product Manager",
      location: "San Francisco, CA",
      skills: "Agile, Product Strategy, Leadership",
      experience: "5 years",
      profile: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 3,
      name: "Alice Johnson",
      position: "UX/UI Designer",
      location: "Remote",
      skills: "Figma, UX Research, Prototyping",
      experience: "4 years",
      profile: "https://randomuser.me/api/portraits/women/2.jpg",
    },
  ];

  // State for search and selected candidate
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  // Use navigate to redirect on logout

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle candidate selection
  const handleSelectCandidate = (candidate) => {
    setSelectedCandidate(candidate);
  };

  // Filter candidates based on search term
  const filteredCandidates = candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Logout function to navigate to login page
  const handleLogout = () => {
    alert("Logout")
    // Perform any necessary cleanup here (like removing tokens from local storage, etc.)
    navigate("/"); // Navigate to the login page
  };

  return (
    <div className="bg-green-300 min-h-screen text-white flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-900 p-6">
        <h1 className="text-3xl font-extrabold text-center text-white mb-8">Recruiter Dashboard</h1>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search candidates by name"
            className="w-full p-4 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Action Buttons */}
        <div className="mt-10">
          <button className="bg-blue-500 w-full text-white p-3 rounded-lg mb-4 hover:bg-blue-600 transition duration-300 ease-in-out">
            Post Job
          </button>
          <button className="bg-green-500 w-full text-white p-3 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">
            Conduct Interview
          </button>
        </div>

        {/* Logout Button */}
        <div className="mt-10">
          <button
            onClick={handleLogout}
            className="bg-red-500 w-full text-white p-3 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8 overflow-y-auto">
        {/* Candidate Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCandidates.map((candidate) => (
            <div
              key={candidate.id}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"
              onClick={() => handleSelectCandidate(candidate)}
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={candidate.profile}
                  alt={candidate.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  {candidate.name}
                </h3>
                <p className="text-gray-500">{candidate.position}</p>
                <p className="text-gray-400">{candidate.location}</p>
                <p className="text-gray-600 mt-2">{candidate.skills}</p>
                <p className="text-gray-500 mt-1">{candidate.experience}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Candidate Details Modal */}
        {selectedCandidate && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Candidate Details: {selectedCandidate.name}
              </h2>
              <div className="flex justify-center mb-4">
                <img
                  src={selectedCandidate.profile}
                  alt={selectedCandidate.name}
                  className="w-32 h-32 rounded-full"
                />
              </div>
              <p className="text-center text-gray-600 mb-2">
                <strong>Position:</strong> {selectedCandidate.position}
              </p>
              <p className="text-center text-gray-600 mb-2">
                <strong>Location:</strong> {selectedCandidate.location}
              </p>
              <p className="text-center text-gray-600 mb-2">
                <strong>Skills:</strong> {selectedCandidate.skills}
              </p>
              <p className="text-center text-gray-600 mb-4">
                <strong>Experience:</strong> {selectedCandidate.experience}
              </p>

              {/* Modal Actions */}
              <div className="flex justify-between gap-4">
                <button
                  onClick={() => setSelectedCandidate(null)}
                  className="bg-gray-500 text-white p-2 rounded-md w-full"
                >
                  Close
                </button>
                <button className="bg-blue-500 text-white p-2 rounded-md w-full">
                  Invite to Interview
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecruiterDashboard;
