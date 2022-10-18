import React from "react";
import "./App.css";
import { Auction, Board, Collection, Main, Open, Shop } from "./page";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Open />} />
        <Route path="/main" element={<Main />} />
        <Route path="/auction" element={<Auction />} />
        <Route path="/board" element={<Board />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
