import React from "react";

const Banner = () => {
  return (
    <div className="md:flex items-center my-8">
      <div className="flex flex-col gap-5 md:items-start items-center">
        <h2 className="text-6xl font-black flex flex-col gap-5 text-center md:text-left">
          Next Step to Your
          <span className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-6xl font-black">
            Desired Job
          </span>
        </h2>
        <p className="md:w-4/6 text-justify px-5 md:px-0">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <button className="my-btn">Get Started</button>
      </div>
      <div>
        <img src="P3OLGJ1 copy 1.png" alt="Profile image" />
      </div>
    </div>
  );
};

export default Banner;
