import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <div className="my-container">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
