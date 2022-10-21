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
      document.querySelector(".skip").style.display = "block";
      setVideoUrl("video/CookiePick.mp4");
    },
  }));

  const endVideo = () => {
    setVideoUrl(null);
    document.querySelector(".skip").style.display = "none";
    document.querySelector(".cardPack").style.display = "block";
    setTimeout(() => {
      document.querySelector(".cardEffect").style.animationName = "lightBoom";
    }, 500);
    setTimeout(() => {
      document.querySelector(".cardOne").style.animationName = "upOut1";
    }, 4500);
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
          <div className="skip">
            <button onClick={endVideo} className="skipBtn"></button>
          </div>
          <div className="cardPack">
            <div className="card">
              <img src="img/Card_Back.png" alt="card" className="cardOne" />
              <div className="cardEffect"></div>
            </div>
            <div className="card">
              <img src="img/Card_Back.png" alt="card" className="cardTwo" />
            </div>
            <div className="card">
              <img src="img/Card_Back.png" alt="card" className="cardThree" />
            </div>
            <div className="card">
              <img src="img/Card_Back.png" alt="card" className="cardFour" />
            </div>
            <div className="card">
              <img src="img/Card_Back.png" alt="card" className="cardFive" />
            </div>
            <div className="card">
              <img src="img/Card_Back.png" alt="card" className="cardSix" />
            </div>
            <div className="card">
              <img src="img/Card_Back.png" alt="card" className="cardSeven" />
            </div>
            <div className="card">
              <img src="img/Card_Back.png" alt="card" className="cardEight" />
            </div>
            <div className="card">
              <img src="img/Card_Back.png" alt="card" className="cardNine" />
            </div>
            <div className="card">
              <img src="img/Card_Back.png" alt="card" className="cardTen" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CardPick;
