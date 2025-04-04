import React, { useState } from "react";

const HiringManagerDashboard = () => {
  // Dummy data for job postings and applicants (in a real-world scenario, this will be fetched from an API)
  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Solutions",
      location: "San Francisco, CA",
      applicants: 5,
      skills: "React, Node.js, JavaScript",
      postedDate: "2 days ago",
    },
    {
      id: 2,
      title: "Product Manager",
      company: "Innovate Corp.",
      location: "New York, NY",
      applicants: 3,
      skills: "Agile, Product Strategy, Leadership",
      postedDate: "1 week ago",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      company: "Design Innovators",
      location: "Remote",
      applicants: 7,
      skills: "Figma, UX Research, Design Systems",
      postedDate: "1 month ago",
    },
  ];

  const [selectedJob, setSelectedJob] = useState(null);
  const [showPostJobModal, setShowPostJobModal] = useState(false);

  // Handle job selection for viewing applicants
  const handleSelectJob = (job) => {
    setSelectedJob(job);
  };

  // Handle opening and closing of the "Post Job" modal
  const handlePostJobModal = () => {
    setShowPostJobModal(!showPostJobModal);
  };

  return (
    <div className="bg-gradient-to-r from-green-600 to-teal-600 min-h-screen text-white">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center text-white mb-10">
          Hiring Manager Dashboard
        </h1>

        {/* Profile Summary */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg mb-8">
          <div className="flex items-center">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Profile"
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-semibold">John Doe</h2>
              <p className="text-gray-600">Hiring Manager at Tech Solutions</p>
              <p className="text-gray-400">San Francisco, CA</p>
            </div>
          </div>
        </div>

        {/* Job Postings Section */}
        <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl mb-8">
          <h2 className="text-2xl font-semibold mb-6">Job Postings</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition duration-300 ease-in-out"
                onClick={() => handleSelectJob(job)}
              >
                <h3 className="text-xl font-semibold text-teal-600 mb-2">{job.title}</h3>
                <p className="text-gray-500">{job.company}</p>
                <p className="text-gray-400">{job.location}</p>
                <p className="text-gray-600 mt-2">{job.skills}</p>
                <p className="text-gray-500 mt-2">
                  Posted {job.postedDate} | {job.applicants} Applicants
                </p>
              </div>
            ))}
          </div>

          {/* Button to Post a Job */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handlePostJobModal}
              className="bg-green-500 text-white p-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
            >
              Post a Job
            </button>
          </div>
        </div>

        {/* View Applicants Modal */}
        {selectedJob && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
              <h2 className="text-2xl font-semibold mb-4 text-center">
                Applicants for {selectedJob.title}
              </h2>
              <div className="mb-4">
                <ul>
                  <li className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <img
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="Applicant"
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <div>
                        <p className="text-lg font-semibold">Jane Smith</p>
                        <p className="text-gray-500">Software Engineer</p>
                      </div>
                    </div>
                    <button className="bg-blue-500 text-white p-2 rounded-lg">View Profile</button>
                  </li>
                  <li className="flex justify-between items-center mb-4">
                    <div className="flex items-center">
                      <img
                        src="https://randomuser.me/api/portraits/women/1.jpg"
                        alt="Applicant"
                        className="w-10 h-10 rounded-full mr-4"
                      />
                      <div>
                        <p className="text-lg font-semibold">Alice Johnson</p>
                        <p className="text-gray-500">Product Manager</p>
                      </div>
                    </div>
                    <button className="bg-blue-500 text-white p-2 rounded-lg">View Profile</button>
                  </li>
                </ul>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Post Job Modal */}
        {showPostJobModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
              <h2 className="text-2xl font-semibold mb-4 text-center">Post a New Job</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Job Title</label>
                  <input
                    type="text"
                    placeholder="Enter job title"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    placeholder="Enter company name"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <input
                    type="text"
                    placeholder="Enter job location"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Job Description</label>
                  <textarea
                    rows="5"
                    placeholder="Enter job description"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
                  />
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={handlePostJobModal}
                    className="bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out"
                  >
                    Close
                  </button>
                  <button className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out">
                    Post Job
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

export default HiringManagerDashboard;
