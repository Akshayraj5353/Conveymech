import React from "react";
import Conveyer from "../assects/Conveyer.mp4";

function VideoPlayer() {
  return (
    <div className="relative h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        controls
        className="absolute top-0 left-0 w-full h-screen object-cover bg-opacity-80"
      >
        <source src={Conveyer} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay text */}
      <div className="absolute inset-0 flex p-20">
        <h1 className="text-white text-center text-sm md:text-6xl px-4">
          Experience the future of material handling with our state-of-the-art
          conveyor systems, designed for optimal efficiency and enduring
          reliability.
        </h1>
      </div>
    </div>
  );
}

export default VideoPlayer;
