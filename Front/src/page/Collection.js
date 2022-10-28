import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header } from "../component";
import { useCookies } from "react-cookie";
import { loginMdAction } from "../redux/middleware/loginMdAction";

const Collection = () => {
  const [cookie, setCookie] = useCookies(["dori_cookie"]);
  const user_Id = useSelector((state) => state.login.id);
  const isLogin = useSelector((state) => state.login.isLogin);
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    dispatch(
      loginMdAction.loginCheck(user_Id, cookie, setCookie, isLogin, nav)
    );
  }, [dispatch, cookie, setCookie, user_Id, isLogin, nav]);

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
                  alt="블루베리"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Common/Brave.png"
                  alt="용감한"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Common/Bumbleberry.png"
                  alt="믹스베리"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Common/Cherry.png"
                  alt="체리"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Common/Gumball.png"
                  alt="버블껌"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Common/Knight.png"
                  alt="기사"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Common/Muscle.png"
                  alt="근육"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Common/Princess.png"
                  alt="공주"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Common/Reporter.png"
                  alt="리포터"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Common/Reverend.png"
                  alt="은둔사제"
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
                  alt="연금술사"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Angel.png"
                  alt="천사"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Avocado.png"
                  alt="아보카도"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Bat.png"
                  alt="뱃"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Beet.png"
                  alt="비트"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Custard.png"
                  alt="커스타드"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Devil.png"
                  alt="악마"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Herb.png"
                  alt="허브"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Kumiho.png"
                  alt="구미호"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Moon.png"
                  alt="달토끼"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Pancake.png"
                  alt="팬케이크"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Pomegranate.png"
                  alt="석류"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Snow.png"
                  alt="눈설탕"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Strawberry.png"
                  alt="딸기"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Sugar.png"
                  alt="설탕"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Werewolf.png"
                  alt="웨어울프"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Magic/Wizard.png"
                  alt="마법사"
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
                  alt="탐험가"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Almond.png"
                  alt="아몬드"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Blackberry.png"
                  alt="블랙베리"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Blossom.png"
                  alt="벚꽃"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Carrot.png"
                  alt="당근"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Chili.png"
                  alt="칠리"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Cocoa.png"
                  alt="코코아"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Cream.png"
                  alt="크림"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Fig.png"
                  alt="무화과"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Licorice.png"
                  alt="감초"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Mala.png"
                  alt="마라"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Mango.png"
                  alt="망고"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Milk.png"
                  alt="우유"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Mint.png"
                  alt="민트"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Onion.png"
                  alt="양파"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Parfait.png"
                  alt="파르페"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Poison.png"
                  alt="독버섯"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Pumpkin.png"
                  alt="호박"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Sorbet.png"
                  alt="샤벳"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Sparkling.png"
                  alt="스파클링"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Squid.png"
                  alt="오징어"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Tiger.png"
                  alt="정글"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Vampire.png"
                  alt="뱀파이어"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Rare/Yam.png"
                  alt="자색고구마"
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
                  alt="아포가토"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/CaramelArrow.png"
                  alt="흑당"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/ClottedCream.png"
                  alt="클로티드크림"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/Clover.png"
                  alt="클로버"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/Cotton.png"
                  alt="목화"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/DarkChoco.png"
                  alt="다크초코"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/Eclair.png"
                  alt="에클레어"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/Latte.png"
                  alt="라떼"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/Lilac.png"
                  alt="라일락"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/Pastry.png"
                  alt="페스츄리"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/Raspberry.png"
                  alt="라즈베리"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/Rye.png"
                  alt="호밀"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Unique/TwizzlyGummy.png"
                  alt="트위즐"
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
                  alt="블랙레이즌"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Epic/DarkKakao.png"
                  alt="다크카카오"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Epic/GoldCheese.png"
                  alt="골드치즈"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Epic/HollyBerry.png"
                  alt="홀리베리"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Epic/Madeleine.png"
                  alt="마들렌"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Epic/PureVanilla.png"
                  alt="퓨어바닐라"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Epic/SaintLily.png"
                  alt="세인트릴리"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Epic/TeaKnight.png"
                  alt="실로나이트"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Epic/Velvet.png"
                  alt="벨벳"
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
                  alt="어둠마녀"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Legendary/FireFairy.png"
                  alt="불꽃정령"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Legendary/FrostQueen.png"
                  alt="서리여왕"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Legendary/MoonLight.png"
                  alt="달빛술사"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Legendary/SeaFairy.png"
                  alt="바다요정"
                  width={"200px"}
                  height={"300px"}
                />
              </li>
              <li className="gradeCard">
                <img
                  src="img/Legendary/WindArcher.png"
                  alt="바람궁수"
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
