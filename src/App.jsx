import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="my-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
