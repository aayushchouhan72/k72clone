import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-center leading-none">
      <div className="text-[8vw] md:text-[4vw] items-center justify-center uppercase m-0">
        The spark for
      </div>
      <div className=" flex items-center justify-center text-[8vw] md:text-[4vw] uppercase m-0">
        all
        <div className="w-[14vw] h-[6vw] md:w-[8vw] md:h-[3vw] rounded-l-full rounded-r-full overflow-hidden relative z-10">
          <Video />
        </div>
        things
      </div>
      <div className="text-[8vw] md:text-[4vw] items-center justify-center uppercase m-0">
        creative
      </div>
    </div>
  );
};

export default HomeHeroText;
