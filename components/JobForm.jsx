'use client'
function JobForm({ company, role, setCompany, setRole, status, setStatus, onAdd, onUpdate, onCancel, editId, error, setError }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {editId ? "Edit Job Application" : "Add Job Application"}
            </h2>
            {error && (
                <p className="text-red-600 text-sm mb-3">
                    {error}
                </p>
            )}
            <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-1"
            >
                Company
            </label>
            <input
                id="company"
                type="text"
                placeholder="Enter company name"
                value={company}
                onChange={(e) => {
                    setCompany(e.target.value);
                    setError("");
                }}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg mb-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label
                htmlFor="role"
                className="block text-sm font-medium text-gray-700 mb-1"
            >
                Role
            </label>

            <input
                id="role"
                type="text"
                placeholder="Enter job role"
                value={role}
                onChange={(e) => {
                    setRole(e.target.value);
                    setError("");
                }}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg mb-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 mb-1"
            >
                Status
            </label>

            <select
                id="status"
                value={status}
                onChange={(e) => {
                    setStatus(e.target.value);
                    setError("");
                }}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="Select">Select</option>
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Rejected">Rejected</option>
                <option value="Selected">Selected</option>
            </select>
            {editId !== null ? (
                <div className="flex gap-3">
                    <button
                        type="button"
                        onClick={onUpdate}
                        className="flex-1 bg-green-600 text-white font-medium py-3 rounded-lg hover:bg-green-700 transition duration-200 cursor-pointer"
                    >
                        Update Job
                    </button>
                    <button
                        type="button"
                        onClick={onCancel}
                        className="flex-1 bg-gray-500 text-white font-medium py-3 rounded-lg hover:bg-gray-600 transition duration-200 cursor-pointer"
                    >
                        Cancel
                    </button>
                </div>
            ) : <button
                type="button"
                onClick={onAdd}
                className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition duration-200 cursor-pointer"
            >
                Add Job
            </button>}
        </div>
    )
}

export default JobForm