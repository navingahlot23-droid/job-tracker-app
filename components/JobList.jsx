function JobList({ jobs, allJobs, onDelete, onEdit }) {
    const getStatusStyle = (status) => {
        switch (status) {
          case "Applied":
            return "bg-blue-100 text-blue-700";
      
          case "Interview":
            return "bg-yellow-100 text-yellow-700";
      
          case "Selected":
            return "bg-green-100 text-green-700";
      
          case "Rejected":
            return "bg-red-100 text-red-700";
      
          default:
            return "bg-gray-100 text-gray-700";
        }
      };
    return (
        <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Job Applications
            </h2>

            {jobs.length === 0 && allJobs.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 text-center py-12 px-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        No job applications yet
                    </h3>

                    <p className="text-gray-500">
                        Add your first job application using the form above.
                    </p>
                </div>
            ) : jobs.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 text-center py-12 px-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        No matching jobs
                    </h3>

                    <p className="text-gray-500">
                        Try changing your search or filter.
                    </p>
                </div>
            ) : (
                <div className="space-y-4">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="bg-white p-5 rounded-xl shadow-sm border border-gray-200"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {job.company}
                                    </h3>

                                    <p className="text-gray-600">
                                        {job.role}
                                    </p>

                                    <span
                                        className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${getStatusStyle(
                                            job.status
                                        )}`}
                                    >
                                        {job.status}
                                    </span>
                                </div>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => onEdit(job)}
                                        className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition cursor-pointer"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => onDelete(job.id)}
                                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition cursor-pointer"
                                    >
                                        Delete
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default JobList;