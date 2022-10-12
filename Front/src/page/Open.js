import React, { useState } from "react";
import ReactPlayer from "react-player";

const Open = () => {
  const [playIndex, setPlayIndex] = useState(0);
  const playList = [
    { index: 1, url: "../video/video1.mp4" },
    { index: 2, url: "../video/video2.mp4" },
    { index: 3, url: "../video/video3.mp4" },
    { index: 4, url: "../video/video4.mp4" },
    { index: 5, url: "../video/video5.mp4" },
  ];

  const handleNextVideo = (video, playIndex) => {
    if (playIndex === video.length - 1) {
      setPlayIndex(0);
    } else {
      setPlayIndex(playIndex + 1);
    }
  };

  const videoPlayerStyle = {
    overflow: "hidden",
  };

  return (
    <div>
      <ReactPlayer
        className="opening_player"
        url={[playList[playIndex].url]}
        width="100%"
        height="500px"
        playing={true}
        muted={true}
        controls={true}
        onEnded={() => {
          handleNextVideo(playList, playIndex);
        }}
        light={false}
        style={videoPlayerStyle}
        onReady={true}
      />
    </div>
  );
};

export default Open;
