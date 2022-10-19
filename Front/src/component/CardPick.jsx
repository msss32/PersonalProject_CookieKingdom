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
      setVideoUrl("video/CookiePick.mp4");
    },
  }));

  const endVideo = (a) => {
    document.querySelector(".cardPickBack").style.display = "none";
    setVideoUrl(null);
  };

  const videoPlayerStyle = { margin: 0, height: "1070px", overflow: "hidden" };

  const videoRef = useRef();
  const [videoUrl, setVideoUrl] = useState(null);

  return (
    <div>
      <div className="cardPickBack">
        <div className="background"></div>
        <div className="cardPick">
          <ReactPlayer
            ref={videoRef}
            className="CookiePickPlayer"
            url={videoUrl}
            width="100%"
            height="100%"
            playing={true}
            muted={true}
            controls={false}
            onEnded={() => {
              endVideo();
            }}
            style={videoPlayerStyle}
          />
        </div>
        <div className="skip">
          <button onClick={endVideo}>스킵</button>
        </div>
      </div>
    </div>
  );
});

export default CardPick;
