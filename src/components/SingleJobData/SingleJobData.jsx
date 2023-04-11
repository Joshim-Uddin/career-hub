import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

const SingleJobData = ({ job }) => {
  const { company, title, remote, employment, location, salary, logo, id } =
    job;
  // const [jobId, setJobId] = useContext(MyContext);
  console.log(job);
  return (
    <div className="border rounded-lg p-5 bg-[#E8E8E8] flex justify-between items-center ">
      <div className="flex items-center gap-5">
        <div className="bg-gray-300 h-48 w-48 flex justify-center items-center ">
          <img src={logo} alt="" className="h-12" />
        </div>
        <div className="flex flex-col gap-3">
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
          <div className="flex gap-5">
            <p>
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-gray-500 me-3"
              />
              {location}
            </p>
            <p>{salary}</p>
          </div>
        </div>
      </div>

      <Link to={`/jobdetails/${id}`}>
        <button className="my-btn">View Details</button>
      </Link>
    </div>
  );
};

export default SingleJobData;
