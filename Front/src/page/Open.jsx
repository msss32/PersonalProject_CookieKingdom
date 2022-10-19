import React, { useState, useEffect } from "react";
import "../css/open.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

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
      document.querySelector(".leftTxt").classList.remove("fadeOutLeft");
      document.querySelector(".leftTxt").classList.add("fadeInLeft");
      document.querySelector(".rightTxt").classList.remove("fadeOutRight");
      document.querySelector(".rightTxt").classList.add("fadeInRight");
      document.querySelector(".openImg").classList.remove("cardRotateOut");
      document.querySelector(".openImg").classList.add("cardRotateIn");
    } else {
      document.querySelector(".leftTxt").classList.remove("fadeInLeft");
      document.querySelector(".leftTxt").classList.add("fadeOutLeft");
      document.querySelector(".rightTxt").classList.remove("fadeInRight");
      document.querySelector(".rightTxt").classList.add("fadeOutRight");
      document.querySelector(".openImg").classList.remove("cardRotateIn");
      document.querySelector(".openImg").classList.add("cardRotateOut");
    }
  };

  useEffect(() => {
    window.onscroll = handleFollow;
  });

  const legendaryCard = [
    { url: "img/Legendary/DarknessWitch.png" },
    { url: "img/Legendary/FireFairy.png" },
    { url: "img/Legendary/FrostQueen.png" },
    { url: "img/Legendary/MoonLight.png" },
    { url: "img/Legendary/SeaFairy.png" },
    { url: "img/Legendary/WindArcher.png" },
  ];

  const handleRandomCard =
    legendaryCard[Math.floor(Math.random() * legendaryCard.length)].url;

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
          <a
            rel="noreferrer"
            href="https://play.google.com/store/apps/details?id=com.devsisters.ck"
            target="_blank"
          >
            <img src={`img/store1.png`} alt="스토어1" className="store" />
            Google Play
          </a>
        </div>
        <div className="linkBlock">
          <a
            rel="noreferrer"
            href="https://apps.apple.com/kr/app/%EC%BF%A0%ED%82%A4%EB%9F%B0-%ED%82%B9%EB%8D%A4/id1509450845"
            target="_blank"
          >
            <img src={`img/store2.png`} alt="스토어2" className="store" />
            App Store
          </a>
        </div>
        <div className="linkBlock">
          <a
            rel="noreferrer"
            href="https://m.onestore.co.kr/mobilepoc/apps/appsDetail.omp?prodId=0000751155"
            target="_blank"
          >
            <img src={`img/store3.png`} alt="스토어3" className="store" />
            One Store
          </a>
        </div>
        <div className="linkBlock">
          <a
            rel="noreferrer"
            href="https://galaxystore.samsung.com/detail/com.devsisters.ck"
            target="_blank"
          >
            <img src={`img/store4.png`} alt="스토어4" className="store" />
            Galaxy Store
          </a>
        </div>
      </div>
      <Link to={"/main"} target="_blank">
        <img src={`img/Logo.png`} alt="로고" className="logo" />
      </Link>
      <img src={`img/sign.png`} alt="사인" className="sign" />
      <div className="cgTxt">카드게임</div>
      <Link>
        <span className="scroll" onClick={scrollIntro}></span>
      </Link>
      <div className="scrollTxt">아래로</div>
      <div className="opening">
        <img
          src={`img/backgroundOpen.jpg`}
          alt="배경"
          className="backgroundOpen"
        />
        <div className="leftTxt">
          <img src={`img/Logo2.png`} alt="logo" className="logo2" />
        </div>
        <div className="openImg">
          <div className="card front">
            <img src={handleRandomCard} alt="card" />
          </div>
          <div className="card back">
            <img src={`img/Card_Back.png`} alt="card" />
          </div>
        </div>
        <div className="rightTxt">
          <img src={`img/rightImg.png`} alt="text" width="450px"></img>
        </div>
      </div>
    </div>
  );
};

export default Open;
