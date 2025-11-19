import React from "react";

const Video = () => {
  return (
    <div className="h-full w-full m-0 p-0">
      <video
        className="h-full w-full object-cover m-0 p-0"
        autoPlay
        loop
        muted
        src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1763563317~exp=1763566917~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=53c41057fb952048fb56740b5adcc70dadbb0527dc63e0b78dbe93421edab7ce&r=dXMtZWFzdDE%3D"
      ></video>
    </div>
  );
};

export default Video;
