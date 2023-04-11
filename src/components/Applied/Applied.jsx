import React from "react";
import { getShoppingCart } from "../../utils/fakedb";
import { useLoaderData } from "react-router-dom";
import SingleJobData from "../SingleJobData/SingleJobData";

const Applied = () => {
  const jobs = useLoaderData();
  const storedJob = getShoppingCart();
  const appliedJob = [];
  if (storedJob) {
    for (const id in storedJob) {
      const foundJob = jobs.find((job) => job.id == id);
      appliedJob.push(foundJob);
    }
  }
  console.log(appliedJob);
  return (
    <div className="px-12">
      <h2 className="text-center text-4xl font-bold my-4">Applied Jobs</h2>
      <div className="flex flex-col gap-4">
        {appliedJob.map((job) => (
          <SingleJobData key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Applied;
