import React from "react";
import { Logo2 } from "../img";

const Header = () => {
  return (
    <div>
      <nav className="navBar">
        <ul>
          <img src={Logo2} alt="logo" />
          <li>경매</li>
          <li>게시판</li>
          <li>도감</li>
          <li>상점</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
