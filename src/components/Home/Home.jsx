import React from "react";
import Category from "../Category/Category";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Featured />
    </div>
  );
};

export default Home;
