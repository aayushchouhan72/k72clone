import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="text-[9vw] items-center justify-center uppercase leading-[8.5vw]">
        The spark for
      </div>
      <div className=" flex items-center justify-center text-[9vw] uppercase leading-[8.5vw]">
        all
        <div className="h-[7vw] w-[16vw] rounded-full mt-4 overflow-hidden">
          <Video />
        </div>
        things
      </div>
      <div className="text-[9vw] items-center justify-center uppercase leading-[8.5vw]">
        creative
      </div>
    </div>
  );
};

export default HomeHeroText;
