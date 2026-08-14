'use client'
import JobForm from './JobForm';
import JobList from './JobList';
import JobStats from './JobStats';
import { useState, useEffect } from 'react'

function JobTracker() {

    const [jobs, setJobs] = useState([]);
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("Select");
    const [editId, setEditId] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [search, setSearch] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");
    const [error, setError] = useState("");

    const addJob = () => {
        if (!company.trim() || !role.trim() || status === "Select") {
            setError("Please fill all fields");
            return;
        }

        setError("");

        const newJob = {
            id: Date.now(),
            company,
            role,
            status,
        };

        setJobs([...jobs, newJob]);

        setCompany("");
        setRole("");
        setStatus("Select");
    };
    const deleteJob = (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete the jobs?"
        );

        if (!confirmDelete) return;
        setJobs(jobs.filter((job) => job.id !== id));
    };
    const clearAllJobs = () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete all jobs?"
        );

        if (!confirmDelete) return;

        setJobs([]);
    };
    const editJob = (job) => {
        setCompany(job.company);
        setRole(job.role);
        setStatus(job.status);
        setEditId(job.id);
    };
    const updateJob = () => {
        if (!company.trim() || !role.trim() || status === "Select") {
            setError("Please fill all fields");
            return;
        }

        setError("");

        setJobs(
            jobs.map((job) =>
                job.id === editId
                    ? {
                        ...job,
                        company,
                        role,
                        status,
                    }
                    : job
            )
        );

        setCompany("");
        setRole("");
        setStatus("Select");
        setEditId(null);
    };
    const cancelEdit = () => {
        setCompany("");
        setRole("");
        setStatus("Select");
        setEditId(null);
        setError("");
    };
    useEffect(() => {
        const savedJobs = localStorage.getItem("jobs");

        if (savedJobs) {
            setJobs(JSON.parse(savedJobs));
        }

        setIsLoaded(true);
    }, []);
    useEffect(() => {
        if (!isLoaded) return;

        localStorage.setItem("jobs", JSON.stringify(jobs));
    }, [jobs, isLoaded]);

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch =
            job.company.toLowerCase().includes(search.toLowerCase()) ||
            job.role.toLowerCase().includes(search.toLowerCase());

        const matchesStatus =
            filterStatus === "All" || job.status === filterStatus;

        return matchesSearch && matchesStatus;
    });
    return (
        <main className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Job Tracker</h1>

                <JobStats jobs={jobs} />
                <JobForm
                    company={company}
                    role={role}
                    setCompany={setCompany}
                    setRole={setRole}
                    status={status}
                    setStatus={setStatus}
                    onAdd={addJob}
                    onUpdate={updateJob}
                    editId={editId}
                    onCancel={cancelEdit}
                    error={error}
                    setError={setError}
                />

                {jobs.length > 0 && (
                    <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex flex-col md:flex-row gap-3 md:items-end">
                        <div className="flex-1">
                            <label
                                htmlFor="search"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Search
                            </label>

                            <input
                                id="search"
                                type="text"
                                placeholder="Search company or role"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="filterStatus"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Status
                            </label>

                            <select
                                id="filterStatus"
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="All">All</option>
                                <option value="Applied">Applied</option>
                                <option value="Interview">Interview</option>
                                <option value="Rejected">Rejected</option>
                                <option value="Selected">Selected</option>
                            </select>
                        </div>
                            <button
                                onClick={clearAllJobs}
                                className="bg-red-600 text-white px-5 py-3 rounded-lg hover:bg-red-700 transition cursor-pointer"
                            >
                                Clear All Jobs
                            </button>
                    </div>
                )}
                <JobList
                    jobs={filteredJobs}
                    allJobs={jobs}
                    onDelete={deleteJob}
                    onEdit={editJob}
                />
            </div>
        </main>
    )
}

export default JobTracker