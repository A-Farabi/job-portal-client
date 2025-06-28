import React, { useState } from "react";
import { Link } from "react-router-dom";

const HotJobCard = ({ job }) => {
  // Format salary range
  const formatSalary = () => {
    const { min, max, currency } = job.salaryRange;
    const currencySymbol = currency === "bdt" ? "৳" : "$";
    return `${currencySymbol}${min.toLocaleString()}-${currencySymbol}${max.toLocaleString()}/Month`;
  };

// Generate a fixed random number of days when component mounts
  const [daysAgo] = useState(() => Math.floor(Math.random() * 10) + 1);

  // Format time ago
  const formatTimeAgo = () => {
    return `${daysAgo} ${daysAgo === 1 ? 'day' : 'days'} ago`;
  };

  return (
    <div className="border rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center">
          <img 
            src={job.company_logo} 
            alt={job.company} 
            className="w-10 h-10 rounded-full mr-3 object-contain"
          />
          <div>
            <h3 className="font-semibold">{job.company}</h3>
            <p className="text-gray-600 text-sm">{job.location}</p>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <h2 className="font-bold text-lg">{job.title}</h2>
        <div className="flex items-center text-sm text-gray-500">
          <span className="capitalize">{job.jobType}</span>
          <span className="mx-2">•</span>
          <span>{formatTimeAgo()}</span>
        </div>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.requirements.slice(0, 3).map((skill, index) => (
          <span 
            key={index} 
            className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="font-bold text-blue-600">{formatSalary()}</span>
        <Link to={`/jobs/${job._id}`} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default HotJobCard;