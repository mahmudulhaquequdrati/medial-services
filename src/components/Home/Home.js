import React from "react";
import Facilitys from "../Facilitys/Facilitys";
import Slider from "../Slider/Slider";
import HomeServices from "./HomeServices/HomeServices";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Facilitys></Facilitys>
      <HomeServices></HomeServices>
    </div>
  );
};

export default Home;
