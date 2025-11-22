import React from "react";
import Video from "../components/home/Video";
import HomeHeroText from "../components/home/HomeHeroText";
import HomeHeroBottomText from "../components/home/HomeHeroBottomText";

const Home = () => {
  return (
    <div className="h-full w-full bg-black text-white">
      <div className="h-screen w-screen fixed bg-black z-0">
        <Video />
      </div>
      <div className="h-screen w-screen relative flex items-center justify-center">
        <div className="text-center">
          <HomeHeroText />
        </div>
      </div>
      <div className="fixed bottom-4 left-0 w-screen flex items-center justify-center px-8 z-20">
        <div className="text-center">
          <HomeHeroBottomText />
        </div>
      </div>
    </div>
  );
};

export default Home;
