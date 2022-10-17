import React from "react";
import CardPick from "../component/CardPick";

const Shop = () => {
  const hide = () => {
    document.querySelector(".cardPickBack").style.display = "block";
  };

  return (
    <div>
      <CardPick />
      <button onClick={hide}>카드뽑기</button>
    </div>
  );
};

export default Shop;
