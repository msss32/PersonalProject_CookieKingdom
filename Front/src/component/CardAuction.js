import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import Timer from "./Timer";
import io from "socket.io-client";

const CardAuction = () => {
  const socket = io.connect();
  const userId = useSelector((state) => state.login.id);
  const bidRef = useRef();
  const [bidMoney, setBidMoney] = useState();
  const [bidder, setBidder] = useState();
  const legendary = [
    { url: "img/Legendary/DarknessWitch.png", name: "어둠마녀쿠키" },
    { url: "img/Legendary/FireFairy.png", name: "불꽃정령쿠키" },
    { url: "img/Legendary/FrostQueen.png", name: "서리여왕쿠키" },
    { url: "img/Legendary/MoonLight.png", name: "달빛술사쿠키" },
    { url: "img/Legendary/SeaFairy.png", name: "바다요정쿠키" },
    { url: "img/Legendary/WindArcher.png", name: "바람궁수쿠키" },
  ];
  const bid = () => {
    console.log(userId);
    setBidder(userId);
    setBidMoney(bidRef.current.value);
  };

  setTimeout(() => {
    const socketId = socket.id;
    socket.emit("enroll", userId, socketId);
    console.log(socketId);
  }, 1000);

  return (
    <div className="auction">
      <div className="container">
        <div className="cardInfo">
          <div className="cardImg">
            <img src={legendary[3].url} alt="card" width={"100%"} />
          </div>
        </div>
        <div className="cardView">
          <span>이름 : {legendary[3].name}</span>
          <br />
          <span>등급 : Legendary</span>
          <br />
          <span>남은시간</span>
          <Timer></Timer>
        </div>
      </div>
      <div className="content">
        <input ref={bidRef} type="text" />
        <button onClick={bid}>입찰</button>
      </div>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {bidder}님 {bidMoney}원 입찰
        </div>
      </div>
    </div>
  );
};

export default CardAuction;
