import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();
    
    // Format salary range
    const formatSalary = () => {
        const { min, max, currency } = job.salaryRange;
        const currencySymbol = currency === "bdt" ? "৳" : "$";
        return `${currencySymbol}${min.toLocaleString()} - ${currencySymbol}${max.toLocaleString()}`;
    };

    // Format deadline date
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-start space-x-4 mb-4 md:mb-0">
                        <img 
                            src={job.company_logo} 
                            alt={job.company} 
                            className="w-16 h-16 object-contain rounded-md border"
                        />
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
                            <p className="text-lg text-gray-600">{job.company}</p>
                            <p className="text-gray-500">{job.location}</p>
                        </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">Salary:</span>
                            <span className="font-semibold text-blue-600">{formatSalary()}</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-medium">Job Type:</span>
                            <span className="capitalize font-semibold">{job.jobType}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="font-medium">Deadline:</span>
                            <span className="font-semibold">{formatDate(job.applicationDeadline)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Job Details */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Description Section */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-4 text-gray-800">Job Description</h2>
                        <p className="text-gray-700 whitespace-pre-line">{job.description}</p>
                    </div>

                    {/* Responsibilities Section */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-4 text-gray-800">Responsibilities</h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            {job.responsibilities.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Requirements Section */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-4 text-gray-800">Requirements</h2>
                        <div className="flex flex-wrap gap-2">
                            {job.requirements.map((skill, index) => (
                                <span 
                                    key={index} 
                                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Company/Apply Info */}
                <div className="space-y-6">
                    {/* Company Info */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-4 text-gray-800">About {job.company}</h2>
                        <div className="flex items-center space-x-3 mb-4">
                            <img 
                                src={job.company_logo} 
                                alt={job.company} 
                                className="w-12 h-12 object-contain rounded-md border"
                            />
                            <h3 className="text-lg font-semibold">{job.company}</h3>
                        </div>
                        <p className="text-gray-700">We're looking for talented individuals to join our team. If you're passionate about what you do, we'd love to hear from you.</p>
                    </div>

                    {/* HR Contact */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-bold mb-4 text-gray-800">Contact HR</h2>
                        <div className="space-y-2">
                            <p className="text-gray-700">
                                <span className="font-medium">Name:</span> {job.hr_name}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-medium">Email:</span> {job.hr_email}
                            </p>
                        </div>
                    </div>

                    {/* Apply Button */}
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;