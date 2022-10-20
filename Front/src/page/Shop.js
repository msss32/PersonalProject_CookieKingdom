import React, { useRef, useEffect } from "react";
import { Header } from "../component";
import CardPick from "../component/CardPick";

const Shop = () => {
  useEffect(() => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "css/shop.css";

    document.head.appendChild(css);

    return () => {
      document.head.removeChild(css);
    };
  }, []);
  const cardPickRef = useRef();
  const cardPick = () => {
    cardPickRef.current.cardPick();
    document.querySelector(".cardPickBtn").style.display = "none";
  };
  return (
    <div>
      <Header></Header>
      <CardPick ref={cardPickRef} />
      <button className="cardPickBtn" onClick={cardPick}>
        카드뽑기
      </button>
    </div>
  );
};

export default Shop;
