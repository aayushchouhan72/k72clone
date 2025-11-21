import React from "react";
import homeBg from "../../assets/home-bg.mp4";

const Video = () => {
  return (
    <div className="h-full w-full m-0 p-0">
      <video
        className="block h-full w-full object-cover m-0 p-0"
        autoPlay
        loop
        muted
        playsInline
        src={homeBg}
      />
    </div>
  );
};

export default Video;
