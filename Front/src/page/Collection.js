import React, { useEffect, useState } from "react";
import { Header } from "../component";

const Collection = () => {
  useEffect(() => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "css/collection.css";

    document.head.appendChild(css);

    return () => {
      document.head.removeChild(css);
    };
  }, []);

  const [collectionList, setCollectionList] = useState(null);
  function collectTab(el, index) {
    setCollectionList(index);
  }
  useEffect(() => {
    if (collectionList != null) {
      document.querySelectorAll(".btn").forEach((e) => {
        e.classList.remove("active");
      });
      document
        .querySelectorAll(".btn")
        [collectionList - 1].classList.add("active");
    }
  }, [collectionList]);

  return (
    <div>
      <Header></Header>
      <div>
        <div className="gradeBtn">
          <div
            className="common btn"
            onClick={(e) => {
              collectTab(e, 1);
            }}
          >
            Common
          </div>
          <div
            className="magic btn"
            onClick={(e) => {
              collectTab(e, 2);
            }}
          >
            Magic
          </div>
          <div
            className="rare btn"
            onClick={(e) => {
              collectTab(e, 3);
            }}
          >
            Rare
          </div>
          <div
            className="unique btn"
            onClick={(e) => {
              collectTab(e, 4);
            }}
          >
            Unique
          </div>
          <div
            className="epic btn"
            onClick={(e) => {
              collectTab(e, 5);
            }}
          >
            Epic
          </div>
          <div
            className="legendary btn"
            onClick={(e) => {
              collectTab(e, 6);
            }}
          >
            Legendary
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {collectionList === 1 ? (
          <>
            <ul className="gradeList">
              <li className="gradeCard">
                <img
                  src="img/Common/Blueberry.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Common/Brave.png"
                  alt="?????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Common/Bumbleberry.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Common/Cherry.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Common/Gumball.png"
                  alt="?????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Common/Knight.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Common/Muscle.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Common/Princess.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Common/Reporter.png"
                  alt="?????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Common/Reverend.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
            </ul>
          </>
        ) : collectionList === 2 ? (
          <>
            <ul className="gradeList">
              <li className="gradeCard">
                <img
                  src="img/Magic/Alchemist.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Angel.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Avocado.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Bat.png"
                  alt="???"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Beet.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Custard.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Devil.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Herb.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Kumiho.png"
                  alt="?????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Moon.png"
                  alt="?????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Pancake.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Pomegranate.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Snow.png"
                  alt="?????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Strawberry.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Sugar.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Werewolf.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Wizard.png"
                  alt="?????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
            </ul>
          </>
        ) : collectionList === 3 ? (
          <>
            <ul className="gradeList">
              <li className="gradeCard">
                <img
                  src="img/Rare/Adventurer.png"
                  alt="?????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Almond.png"
                  alt="?????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Blackberry.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Blossom.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Carrot.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Chili.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Cocoa.png"
                  alt="?????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Cream.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Fig.png"
                  alt="?????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Licorice.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Mala.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Mango.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Milk.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Mint.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Onion.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Parfait.png"
                  alt="?????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Poison.png"
                  alt="?????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Pumpkin.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Sorbet.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Sparkling.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Squid.png"
                  alt="?????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Tiger.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Vampire.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Yam.png"
                  alt="???????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
            </ul>
          </>
        ) : collectionList === 4 ? (
          <>
            <ul className="gradeList">
              <li className="gradeCard">
                <img
                  src="img/Unique/Affogato.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/CaramelArrow.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/ClottedCream.png"
                  alt="??????????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/Clover.png"
                  alt="?????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/Cotton.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/DarkChoco.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/Eclair.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/Latte.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/Lilac.png"
                  alt="?????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/Pastry.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/Raspberry.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/Rye.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/TwizzlyGummy.png"
                  alt="?????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
            </ul>
          </>
        ) : collectionList === 5 ? (
          <>
            <ul className="gradeList">
              <li className="gradeCard">
                <img
                  src="img/Epic/BlackRaisin.png"
                  alt="???????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Epic/DarkKakao.png"
                  alt="???????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Epic/GoldCheese.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Epic/HollyBerry.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Epic/Madeleine.png"
                  alt="?????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Epic/PureVanilla.png"
                  alt="???????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Epic/SaintLily.png"
                  alt="???????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Epic/TeaKnight.png"
                  alt="???????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Epic/Velvet.png"
                  alt="??????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
            </ul>
          </>
        ) : collectionList === 6 ? (
          <>
            <ul className="gradeList">
              <li className="gradeCard">
                <img
                  src="img/Legendary/DarknessWitch.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Legendary/FireFairy.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Legendary/FrostQueen.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Legendary/MoonLight.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Legendary/SeaFairy.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Legendary/WindArcher.png"
                  alt="????????????"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
            </ul>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Collection;
