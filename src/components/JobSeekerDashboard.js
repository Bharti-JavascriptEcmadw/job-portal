import React, { useState } from "react";

const JobSeekerDashboard = () => {
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

  return (
    <div className="bg-gradient-to-r from-green-600 to-teal-600 min-h-screen text-white">
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-4xl font-extrabold text-center text-white mb-8">
          Job Seeker Dashboard
        </h1>

        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Job Listings for You
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Browse available job opportunities and apply directly to the ones
            that match your skills.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Job Cards */}
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
              >
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                  {job.title}
                </h3>
                <p className="text-gray-500 mb-2">{job.company}</p>
                <p className="text-gray-400 text-sm mb-4">{job.location}</p>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <p className="text-gray-400 text-xs italic mb-4">
                  Posted: {job.postedDate}
                </p>
                <button
                  className="bg-teal-600 text-white p-2 rounded-lg shadow-md hover:bg-teal-700 w-full mt-4"
                  onClick={() => handleApplyClick(job)}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-semibold mb-4">
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
                    className="w-full p-2 border border-gray-300 rounded mt-2"
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
                    className="w-full p-2 border border-gray-300 rounded mt-2"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Resume</label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded mt-2"
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
                    className="bg-teal-600 text-white p-2 rounded-md"
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
