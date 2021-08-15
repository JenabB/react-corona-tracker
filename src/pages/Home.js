import React from "react";
import Header from "./home/Header";
import RumahSakit from "./home/RumahSakit";
import Vaksin from "./home/Vaksin";

const Home = () => {
  return (
    <div>
      <Header />
      <Vaksin />
      <RumahSakit />
    </div>
  );
};

export default Home;
