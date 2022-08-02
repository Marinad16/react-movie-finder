import React from "react";
import HomeCarousel from "../components/Carousel/Carousel";
import LatestMoviePoster from "../components/LatestMovie/LatestMoviePoster";

const HomePage = () => {

  return (
    <>
        <LatestMoviePoster/>
        <HomeCarousel/>
    </>
  );
};

export default HomePage;
