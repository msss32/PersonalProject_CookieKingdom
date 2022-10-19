import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <Link to="/main">
            <img src={`img/Logo2.png`} alt="logo" width="130px" />
          </Link>
        </li>
        <li>
          <Link to="/auction">경매</Link>
        </li>
        <li>
          <Link to="/board">게시판</Link>
        </li>
        <li>
          <Link to="/collection">도감</Link>
        </li>
        <li>
          <Link to="/shop">상점</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
