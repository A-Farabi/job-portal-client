import React from "react";
import { useParams } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const JobApply = () => {
  const {id} = useParams();
  const user = UseAuth()
  console.log(id);

  const submitJobApply = e =>{
    e.preventDefault()
    const form = e.target
    const linkedIn = form.linkedin.value
    const github = form.github.value
    console.log(linkedIn, github);

    const jobApplication = {
        job_id: id,
        applicant_email: user.email
    }

    fetch('http://localhost:5000/job-applications', {
        method: 'POST',
        headers: {
            'content-type' : "application/json"
        }, 
        body: JSON.stringify(jobApplication)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data);
    })

}

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={submitJobApply}>
              <fieldset className="fieldset">
                <label className="label">LinedIn Url</label>
                <input type="url" name="linkedin" className="input" placeholder="Linked In URL" />
                <label className="label">Github Url</label>
                <input
                  type="url"
                  name="github"
                  className="input"
                  placeholder="Github Url"
                />
                <button className="btn btn-neutral mt-4">Appply Job</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
