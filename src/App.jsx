import React, { createContext, useState } from "react";
import Header from "./components/Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import toast, { Toaster } from "react-hot-toast";

export const error = () => toast.error("Already Applied.");

export const MyContext = createContext();
export const JobsContext = createContext();

const App = () => {
  const [JobId, setJobId] = useState(0);
  const data = useLoaderData();
  return (
    <div>
      <div className="my-container">
        <Header />
        <JobsContext.Provider value={data}>
          <MyContext.Provider value={[JobId, setJobId]}>
            <Outlet />
            <Toaster />
          </MyContext.Provider>
        </JobsContext.Provider>
      </div>
      <Footer />
    </div>
  );
};

export default App;
