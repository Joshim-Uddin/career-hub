import React, { createContext, useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

export const MyContext = createContext();

const App = () => {
  const [JobId, setJobId] = useState(0);
  return (
    <div>
      <div className="my-container">
        <Header />
        <MyContext.Provider value={[JobId, setJobId]}>
          <Outlet />
        </MyContext.Provider>
      </div>
      <Footer />
    </div>
  );
};

export default App;
