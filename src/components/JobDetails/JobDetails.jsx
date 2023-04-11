import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { MyContext } from "../../App";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CalendarIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";

const JobDetails = () => {
  const [jobId, setJobId] = useContext(MyContext);

  const jobs = useLoaderData();
  const foundJob = jobs.find((job) => job.id === jobId);

  const {
    description,
    responsibility,
    title,
    education,
    experience,
    salary,
    contact,
    location,
  } = foundJob;

  console.log(foundJob);
  return (
    <div>
      <h3 className="text-center text-4xl font-bold my-8">Job Details</h3>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="md:w-3/5 pe-4 flex flex-col gap-5">
          <p>
            <span className="font-bold">Job Description:</span> {description}
          </p>
          <p>
            <span className="font-bold">Job Responsibility:</span>{" "}
            {responsibility}
          </p>
          <p>
            <span className="font-bold">Educational Requirements:</span>{" "}
            {education}
          </p>
          <p>
            <span className="font-bold">Experience:</span> {experience}
          </p>
        </div>
        <div className="flex flex-col">
          <div className="bg-purple-200 p-3 rounded-md">
            <h3 className="border-b-2 border-gray-300 mb-3 py-2 font-bold text-xl">
              Job Details
            </h3>
            <div className="flex flex-col gap-3 mb-2">
              <p className="flex gap-2">
                <CurrencyDollarIcon className="w-5 text-purple-500" /> Salary :
                {salary}
              </p>
              <p className="flex gap-2">
                <CalendarIcon className="w-6 text-purple-500" /> Job Title :
                {title}
              </p>
            </div>
            <h3 className="border-b-2 border-gray-300 mb-3 py-2 font-bold text-xl">
              Contact Information
            </h3>
            <div className="flex flex-col gap-3">
              <p className="flex gap-2">
                <PhoneIcon className="w-5 text-purple-500" /> {contact.phone}
              </p>
              <p className="flex gap-2">
                <EnvelopeIcon className="w-5 text-purple-500" /> {contact.email}
              </p>
              <p className="flex gap-2">
                <MapPinIcon className="w-5 text-purple-500" /> {location}
              </p>
            </div>
          </div>
          <button className="my-btn mt-4">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
