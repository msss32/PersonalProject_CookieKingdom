import React, { useEffect } from "react";
import { Header, CardAuction } from "../component";

const Auction = () => {
  useEffect(() => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "css/auction.css";

    document.head.appendChild(css);

    return () => {
      document.head.removeChild(css);
    };
  }, []);
  return (
    <div>
      <Header></Header>
      <CardAuction />
    </div>
  );
};

export default Auction;
