import React, { useRef } from "react";
import CardPick from "../component/CardPick";
import "../css/shop.css";

const Shop = () => {
  const cardPickRef = useRef();
  const cardPick = () => {
    cardPickRef.current.cardPick();
    document.querySelector(".cardPickBtn").style.display = "none";
  };
  return (
    <div>
      <CardPick ref={cardPickRef} />
      <button className="cardPickBtn" onClick={cardPick}>
        카드뽑기
      </button>
    </div>
  );
};

export default Shop;
