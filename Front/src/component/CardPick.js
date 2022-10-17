import React from "react";

const CardPick = () => {
  const exit = () => {
    document.querySelector(".cardPickBack").style.display = "none";
  };
  return (
    <div>
      <div className="cardPickBack">
        <div className="cardPick">테스트</div>
        <button onClick={exit}>닫기</button>
      </div>
    </div>
  );
};

export default CardPick;
