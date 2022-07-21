import React from "react";
import HomeCarousel from "../components/Carousel/Carousel";
import LatestMovie from "../components/LatestMovie/LatestMovie";

const HomePage = () => {

  return (
    <>
        <LatestMovie/>
        <HomeCarousel/>
    </>
  );
};

export default HomePage;
