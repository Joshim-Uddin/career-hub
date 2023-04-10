import React from "react";

const Jobitem = ({ job }) => {
  const { title, company, logo, location, salary, remote, employment } = job;
  return (
    <div className="border rounded p-5 bg-[#E8E8E8] flex flex-col gap-3 items-start ">
      <img src={logo} alt="" className="h-10 w-20" />
      <h3>{title}</h3>
      <h4>{company}</h4>
      <div className="flex gap-5 items-center">
        <p className="border border-purple-400 rounded text-purple-400 py-2 px-3">
          {remote ? "remote" : "onsite"}
        </p>
        <p className="border border-purple-400 rounded text-purple-400 py-2 px-3">
          {employment}
        </p>
      </div>
      <p>{location}</p>
      <p>{salary}</p>
      <button className="my-btn">View Details</button>
    </div>
  );
};

export default Jobitem;
