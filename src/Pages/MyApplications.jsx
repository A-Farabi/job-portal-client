import React, { useEffect, useState } from 'react';
import UseAuth from '../Hooks/UseAuth';


const MyApplications = () => {

    const {user} = UseAuth()
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/job-applications?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [user.email])

    return (
        <div>
            <h1>my MyApplication: {jobs.length}</h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        jobs.map(job => <tr key={job._id}>
      
    
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={job.company_logo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{job.title}</div>
              <div className="text-sm opacity-50">{job.location}</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">X</button>
        </th>
      </tr>       
      )}
    </tbody>
    {/* foot */}
  </table>
</div>
        </div>
    );
};

export default MyApplications;