import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ReactPlayer from "react-player";

const CardPick = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    cardPick: () => {
      document.querySelector(".cardPickBack").style.display = "block";
    },
  }));

  const endVideo = () => {
    document.querySelector(".cardPickBack").style.display = "none";
    document.querySelector(".cardPickBtn").style.display = "block";
    videoRef.current.player.prevPlayed = 0;
    console.log(videoRef.current.player.prevPlayed);
  };

  const videoPlayerStyle = { margin: 0, height: "1070px", overflow: "hidden" };

  const videoRef = useRef();
  const [video, setVideo] = useState(false);

  return (
    <div>
      <div className="cardPickBack">
        <div className="background"></div>
        <div className="cardPick">
          <ReactPlayer
            ref={videoRef}
            className="CookiePickPlayer"
            url={"video/CookiePick.mp4"}
            width="100%"
            height="100%"
            playing={video}
            muted={true}
            controls={false}
            onEnded={() => {
              endVideo();
            }}
            style={videoPlayerStyle}
          />
        </div>
        <div className="exit">
          <button onClick={endVideo}>닫기</button>
          <button
            onClick={() => {
              setVideo(!video);
            }}
          >
            재생하기
          </button>
        </div>
      </div>
    </div>
  );
});

export default CardPick;
