import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const prods = useLoaderData();
  return (
    <div className="text-center my-24">
      <h4 className="text-5xl font-semibold my-5">Job Catergory List</h4>
      <p>
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid md:grid-cols-4 items-center gap-5 justify-center my-container my-12 px-10 mx-auto">
        {prods.map((prod) => (
          <>
            <div className="flex p-4 rounded flex-col items-center bg-gradient-to-r from-indigo-100 to-purple-100 h-40">
              <img src={prod.icon} alt="" className="w-12" />
              <p className="text-xl">{prod.type}</p>
              <small>{prod.jobs} Jobs Available</small>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Category;
