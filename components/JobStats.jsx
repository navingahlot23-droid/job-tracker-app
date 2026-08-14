function JobStats({ jobs }) {
    const totalJobs = jobs.length;

    const appliedJobs = jobs.filter(
        (job) => job.status === "Applied"
    ).length;

    const interviewJobs = jobs.filter(
        (job) => job.status === "Interview"
    ).length;

    const selectedJobs = jobs.filter(
        (job) => job.status === "Selected"
    ).length;

    const rejectedJobs = jobs.filter(
        (job) => job.status === "Rejected"
    ).length;

    const successRate =
        totalJobs === 0
            ? 0
            : Math.round((selectedJobs / totalJobs) * 100);

    return (
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">

            <div className="bg-white p-5 rounded-xl shadow-sm">
                <p className="text-gray-500 text-sm">Total Jobs</p>
                <h2 className="text-2xl font-bold text-gray-800">
                    {totalJobs}
                </h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
                <p className="text-gray-500 text-sm">Applied</p>
                <h2 className="text-2xl font-bold text-blue-600">
                    {appliedJobs}
                </h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
                <p className="text-gray-500 text-sm">Interviews</p>
                <h2 className="text-2xl font-bold text-yellow-600">
                    {interviewJobs}
                </h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
                <p className="text-gray-500 text-sm">Selected</p>
                <h2 className="text-2xl font-bold text-green-600">
                    {selectedJobs}
                </h2>
            </div>

            <div className="bg-white p-5 rounded-xl shadow-sm">
                <p className="text-gray-500 text-sm">Rejected</p>
                <h2 className="text-2xl font-bold text-red-600">
                    {rejectedJobs}
                </h2>
            </div>


            <div className="bg-white p-5 rounded-xl shadow-sm">
                <p className="text-gray-500 text-sm">Success Rate</p>

                <h2 className="text-2xl font-bold text-purple-600">
                    {successRate}%
                </h2>
            </div>
        </div>
    );
}

export default JobStats;