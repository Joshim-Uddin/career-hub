import React, { useEffect, useState } from "react";
import Jobitem from "../Jobitem/Jobitem";

const Featured = () => {
  const [jobs, setJobs] = useState([]);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    fetch("jobdata.json")
      .then((res) => res.json())
      .then((data) => setJobs([...data]));
  }, []);

  const handleShowAll = () => {
    setClicked(true);
  };

  return (
    <>
      <h2 className="my-container text-5xl font-bold text-center mb-4">
        Fetured Jobs
      </h2>
      <p className="text-center mb-5">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-2 gap-5 my-container px-12">
        {clicked
          ? jobs.slice(0, 6).map((job) => <Jobitem key={job.id} job={job} />)
          : jobs.slice(0, 4).map((job) => <Jobitem key={job.id} job={job} />)}
      </div>
      <div className="flex flex-col justify-center items-center my-12">
        <button className="my-btn" onClick={handleShowAll}>
          Show All
        </button>
      </div>
    </>
  );
};

export default Featured;
