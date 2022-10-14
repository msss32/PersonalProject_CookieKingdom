import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import {
  background1,
  Logo,
  Logo2,
  sign,
  store1,
  store2,
  store3,
  store4,
} from "../img";
import {
  DarknessWitch,
  FireFairy,
  FrostQueen,
  MoonLight,
  SeaFairy,
  WindArcher,
} from "../img/Legendary";

const Open = () => {
  const [playIndex, setPlayIndex] = useState(0);
  const playList = [
    { index: 0, url: "video/video1.mp4" },
    { index: 1, url: "video/video2.mp4" },
    { index: 2, url: "video/video3.mp4" },
    { index: 3, url: "video/video4.mp4" },
    { index: 4, url: "video/video5.mp4" },
  ];
  const handleNextVideo = (video, playIndex) => {
    if (playIndex === video.length - 1) {
      setPlayIndex(0);
    } else {
      setPlayIndex(playIndex + 1);
    }
  };
  const videoPlayerStyle = {
    margin: 0,
    height: "1070px",
    overflow: "hidden",
  };

  const scrollIntro = () => {
    window.scrollTo({
      top: 1100,
      behavior: "smooth",
    });
  };

  const handleFollow = () => {
    if (window.pageYOffset >= 750) {
      document.querySelector(".rightTxt").style.visibility = "visible";
      document.querySelector(".leftTxt").classList.remove("fadeOutLeft");
      document.querySelector(".leftTxt").classList.add("fadeInLeft");
      document.querySelector(".openImg").style.visibility = "visible";
    } else {
      document.querySelector(".rightTxt").style.visibility = "hidden";
      document.querySelector(".leftTxt").classList.remove("fadeInLeft");
      document.querySelector(".leftTxt").classList.add("fadeOutLeft");
      document.querySelector(".openImg").style.visibility = "hidden";
    }
  };

  useEffect(() => {
    window.onscroll = handleFollow;
  }, []);

  const openCard = [
    DarknessWitch,
    FireFairy,
    FrostQueen,
    MoonLight,
    SeaFairy,
    WindArcher,
  ];

  const openCardPick = () => {
    console.log(openCard[Math.floor(Math.random() * openCard.length)]);
  };

  return (
    <div>
      <ReactPlayer
        className="opening_player"
        url={[playList[playIndex].url]}
        width="100%"
        height="100%"
        playing={true}
        muted={true}
        controls={false}
        onEnded={() => {
          handleNextVideo(playList, playIndex);
        }}
        light={false}
        style={videoPlayerStyle}
      />
      <div className="dark"></div>
      <div className="link">
        <div className="linkBlock">
          <Link to={"/main"}>
            <img src={store1} alt="스토어1" className="store" />
            Google Play
          </Link>
        </div>
        <div className="linkBlock">
          <Link to={"/main"}>
            <img src={store2} alt="스토어2" className="store" />
            App Store
          </Link>
        </div>
        <div className="linkBlock">
          <Link to="intro">
            <img src={store3} alt="스토어3" className="store" />
            One Store
          </Link>
        </div>
        <div className="linkBlock">
          <Link to={"/main"}>
            <img src={store4} alt="스토어4" className="store" />
            Galaxy Store
          </Link>
        </div>
      </div>
      <Link to={"/main"}>
        <img src={Logo} alt="로고" className="logo" />
      </Link>
      <img src={sign} alt="사인" className="sign" />
      <div className="cgTxt">카드게임</div>
      <Link>
        <span className="scroll" onClick={scrollIntro}></span>
      </Link>
      <div className="scrollTxt">아래로</div>
      <div className="opening">
        <img src={background1} alt="배경" className="background" />
        <div className="leftTxt">
          <img src={Logo2} alt="card" className="logo2" />
        </div>
        <div className="openImg"></div>
        <div className="rightTxt"></div>
      </div>
    </div>
  );
};

export default Open;
