import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-regular-svg-icons";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error.status);
  return (
    <div className="text-center h-screen py-12">
      <FontAwesomeIcon icon={faFaceFrown} className="w-48 h-48" />
      <h3 className="text-8xl font-extrabold my-5">
        4<span className="text-red-500">0</span>4
      </h3>
      <p className="text-4xl font-semibold mb-8 ">{error.error.message}</p>
      <Link to="/">
        <button className="my-btn">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
