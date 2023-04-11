import React, { useContext } from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLoaderData } from "react-router-dom";
import JobDetails from "../JobDetails/JobDetails";
import { MyContext } from "../../App";

const Jobitem = ({ job }) => {
  const { id, title, company, logo, location, salary, remote, employment } =
    job;
  const [jobId, setJobId] = useContext(MyContext);
  return (
    <div className="border rounded-lg p-5 bg-[#E8E8E8] flex flex-col gap-3 items-start ">
      <img src={logo} alt="" className="h-12" />
      <h3 className="text-2xl font-bold">{title}</h3>
      <h4>{company}</h4>
      <div className="flex gap-5 items-center">
        <p className="border border-purple-400 rounded text-purple-400 py-2 px-3">
          {remote ? "remote" : "onsite"}
        </p>
        <p className="border border-purple-400 rounded text-purple-400 py-2 px-3">
          {employment}
        </p>
      </div>
      <div className="flex gap-12">
        <p>
          <FontAwesomeIcon
            icon={faLocationDot}
            className="text-gray-500 me-3"
          />
          {location}
        </p>
        <p>{salary}</p>
      </div>

      <Link to={`/jobdetails/${id}`}>
        <button className="my-btn" onClick={() => setJobId(id)}>
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Jobitem;
