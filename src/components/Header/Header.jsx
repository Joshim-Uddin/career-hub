import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex flex-col gap-5 md:flex-row md:justify-between items-center py-5 px-10">
      <NavLink to="/">
        <h2 className="text-3xl font-bold">CareerMatch</h2>
      </NavLink>
      <ul className="flex gap-5 text-gray-600">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/statistics">Statistics</NavLink>
        <NavLink to="/appliedjob">Applied Jobs</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </ul>
      <button className="my-btn">Start Applying</button>
    </nav>
  );
};

export default Header;
