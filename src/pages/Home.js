import React from "react";
import DataProvinsi from "./home/DataProvinsi";
import Header from "./home/Header";
import RumahSakit from "./home/RumahSakit";
import Vaksin from "./home/Vaksin";

const Home = () => {
  return (
    <div>
      <Header />
      <DataProvinsi />
      <Vaksin />
      <RumahSakit />
    </div>
  );
};

export default Home;
