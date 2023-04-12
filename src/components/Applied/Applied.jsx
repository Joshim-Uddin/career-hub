import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../utils/fakedb";
import { useLoaderData } from "react-router-dom";
import SingleJobData from "../SingleJobData/SingleJobData";

const Applied = () => {
  const [filteredJob, setFilteredJob] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const appliedJob = [];
  let newJobs;
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJob = getShoppingCart();
    if (storedJob) {
      for (const id in storedJob) {
        const foundJob = jobs.find((job) => job.id == id);
        appliedJob.push(foundJob);
      }
    }
    setAppliedJobs(appliedJob);
    // console.log(appliedJobs);
  }, []);

  const handleOnChange = (e) => {
    const input = e.target.value;
    if (input == "remote") {
      newJobs = appliedJobs.filter((job) => job.remote == true);
    } else if (input == "onsite") {
      newJobs = appliedJobs.filter((job) => job.remote == false);
    }
    setAppliedJobs(newJobs);
  };
  return (
    <div className="px-12 relative">
      <h2 className="text-center text-4xl font-bold my-4">Applied Jobs</h2>
      <select
        name="selectedJob"
        defaultValue="Filter Job"
        onChange={(e) => handleOnChange(e)}
        className="absolute right-16 w-48 p-2 rounded top-12 block"
      >
        <option>Filter Job</option>
        <option value="remote">Remote</option>
        <option value="onsite">Onsite</option>
        <option value="fulltime">Full Time</option>
        <option value="parttime">Part Time</option>
      </select>

      <div className="flex flex-col gap-4 mt-32">
        {appliedJobs.map((job) => (
          <SingleJobData key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Applied;
