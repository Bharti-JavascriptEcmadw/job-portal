import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const JobSeekerDashboard = () => {
  const navigate = useNavigate();

  // Dummy data for job listings
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Corp",
      location: "New York, NY",
      description: "Join our team of engineers to build amazing web applications.",
      postedDate: "2 days ago",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Productify",
      location: "Remote",
      description: "Lead product development in a fast-paced startup environment.",
      postedDate: "1 week ago",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "Design Innovations",
      location: "San Francisco, CA",
      description: "Help design innovative and user-friendly applications.",
      postedDate: "3 days ago",
    },
  ];

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
  });

  // Search query state
  const [searchQuery, setSearchQuery] = useState("");

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setFormData({
      name: "",
      email: "",
      resume: "",
    }); // Reset the form data
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted!");
    handleCloseModal();
  };

  const handleLogout = () => {
    alert("Logged out successfully!");
    navigate("/"); // Navigate to login page
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query state
  };

  // Filter jobs based on search query
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-yellow-200 min-h-screen text-black">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header and Logout Button */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-800">Job Seeker Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Logout
          </button>
        </div>

        {/* Centered and Smaller Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search jobs by title, company, or location..."
            className="w-2/3 sm:w-1/2 md:w-1/3 p-3 border border-gray-300 rounded-md text-gray-800"
          />
        </div>

        {/* Job Listings */}
        <div className="bg-teal-500 text-black p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-center mb-6">Job Listings for You</h2>
          <p className="text-center text-black mb-8">
            Browse available job opportunities and apply directly to the ones that match your skills.
          </p>

          {/* Job Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-102"
              >
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">{job.title}</h3>
                <p className="text-gray-500 mb-2 font-medium">{job.company}</p>
                <p className="text-gray-400 text-sm mb-4">{job.location}</p>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <p className="text-gray-400 text-xs italic mb-4">Posted: {job.postedDate}</p>
                <button
                  className="bg-indigo-600 text-white p-2 rounded-lg shadow-md hover:bg-indigo-700 w-full mt-4"
                  onClick={() => handleApplyClick(job)}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Application Form */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                Apply for {selectedJob?.title}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md mt-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md mt-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Resume</label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md mt-2"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="bg-gray-500 text-white p-2 rounded-md"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="bg-indigo-600 text-white p-2 rounded-md"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobSeekerDashboard;
