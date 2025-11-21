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
        <div className="w-[16vw] h-[7vw] rounded-l-full rounded-r-full overflow-hidden relative z-10">
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
