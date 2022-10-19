import React, { useRef } from "react";
import "../css/main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Header from "../component/Header";
import CardPick from "../component/CardPick";

const Main = () => {
  const collection = [
    { url: "img/Common/Blueberry.png" },
    { url: "img/Common/Brave.png" },
    { url: "img/Common/Bumbleberry.png" },
    { url: "img/Common/Cherry.png" },
    { url: "img/Common/Gumball.png" },
    { url: "img/Common/Knight.png" },
    { url: "img/Common/Muscle.png" },
    { url: "img/Common/Princess.png" },
    { url: "img/Common/Reporter.png" },
    { url: "img/Common/Reverend.png" },
    { url: "img/Magic/Alchemist.png" },
    { url: "img/Magic/Angel.png" },
    { url: "img/Magic/Avocado.png" },
    { url: "img/Magic/Bat.png" },
    { url: "img/Magic/Beet.png" },
    { url: "img/Magic/Custard.png" },
    { url: "img/Magic/Devil.png" },
    { url: "img/Magic/Herb.png" },
    { url: "img/Magic/Kumiho.png" },
    { url: "img/Magic/Moon.png" },
    { url: "img/Magic/Pancake.png" },
    { url: "img/Magic/Pomegranate.png" },
    { url: "img/Magic/Snow.png" },
    { url: "img/Magic/Strawberry.png" },
    { url: "img/Magic/Sugar.png" },
    { url: "img/Magic/Werewolf.png" },
    { url: "img/Magic/Wizard.png" },
    { url: "img/Rare/Adventurer.png" },
    { url: "img/Rare/Almond.png" },
    { url: "img/Rare/Blackberry.png" },
    { url: "img/Rare/Blossom.png" },
    { url: "img/Rare/Carrot.png" },
    { url: "img/Rare/Chili.png" },
    { url: "img/Rare/Cocoa.png" },
    { url: "img/Rare/Cream.png" },
    { url: "img/Rare/Fig.png" },
    { url: "img/Rare/Licorice.png" },
    { url: "img/Rare/Mala.png" },
    { url: "img/Rare/Mango.png" },
    { url: "img/Rare/Milk.png" },
    { url: "img/Rare/Mint.png" },
    { url: "img/Rare/Onion.png" },
    { url: "img/Rare/Parfait.png" },
    { url: "img/Rare/Poison.png" },
    { url: "img/Rare/Pumpkin.png" },
    { url: "img/Rare/Sorbet.png" },
    { url: "img/Rare/Sparkling.png" },
    { url: "img/Rare/Squid.png" },
    { url: "img/Rare/Tiger.png" },
    { url: "img/Rare/Vampire.png" },
    { url: "img/Rare/Yam.png" },
    { url: "img/Unique/Affogato.png" },
    { url: "img/Unique/CaramelArrow.png" },
    { url: "img/Unique/ClottedCream.png" },
    { url: "img/Unique/Clover.png" },
    { url: "img/Unique/Cotton.png" },
    { url: "img/Unique/DarkChoco.png" },
    { url: "img/Unique/Eclair.png" },
    { url: "img/Unique/Espresso.png" },
    { url: "img/Unique/Latte.png" },
    { url: "img/Unique/Lilac.png" },
    { url: "img/Unique/Pastry.png" },
    { url: "img/Unique/Raspberry.png" },
    { url: "img/Unique/Rye.png" },
    { url: "img/Unique/TwizzlyGummy.png" },
    { url: "img/Epic/BlackRaisin.png" },
    { url: "img/Epic/DarkKakao.png" },
    { url: "img/Epic/GoldCheese.png" },
    { url: "img/Epic/HollyBerry.png" },
    { url: "img/Epic/Madeleine.png" },
    { url: "img/Epic/PureVanilla.png" },
    { url: "img/Epic/SaintLily.png" },
    { url: "img/Epic/TeaKnight.png" },
    { url: "img/Epic/Velvet.png" },
    { url: "img/Legendary/DarknessWitch.png" },
    { url: "img/Legendary/FireFairy.png" },
    { url: "img/Legendary/FrostQueen.png" },
    { url: "img/Legendary/MoonLight.png" },
    { url: "img/Legendary/SeaFairy.png" },
    { url: "img/Legendary/WindArcher.png" },
  ];

  const handleRandomCard1 =
    collection[Math.floor(Math.random() * collection.length)].url;
  const handleRandomCard2 =
    collection[Math.floor(Math.random() * collection.length)].url;
  const handleRandomCard3 =
    collection[Math.floor(Math.random() * collection.length)].url;
  const handleRandomCard4 =
    collection[Math.floor(Math.random() * collection.length)].url;
  const handleRandomCard5 =
    collection[Math.floor(Math.random() * collection.length)].url;
  const handleRandomCard6 =
    collection[Math.floor(Math.random() * collection.length)].url;
  const handleRandomCard7 =
    collection[Math.floor(Math.random() * collection.length)].url;
  const handleRandomCard8 =
    collection[Math.floor(Math.random() * collection.length)].url;
  const handleRandomCard9 =
    collection[Math.floor(Math.random() * collection.length)].url;
  const handleRandomCard10 =
    collection[Math.floor(Math.random() * collection.length)].url;
  const handleRandomCard11 =
    collection[Math.floor(Math.random() * collection.length)].url;

  const cardPickRef = useRef();
  const cardPick = () => {
    cardPickRef.current.cardPick();
    document.querySelector(".cardPickBtn").style.display = "none";
  };

  return (
    <div>
      <Header></Header>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper1"
      >
        <SwiperSlide>
          <img src={`img/intro1-cookie.png`} alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`img/intro2-adventure.png`} alt="2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`img/intro3-battle.png`} alt="3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`img/intro4-kingdom.png`} alt="4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={`img/intro5-guild.png`} alt="5" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={handleRandomCard1} alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={handleRandomCard2} alt="2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={handleRandomCard3} alt="3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={handleRandomCard4} alt="4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={handleRandomCard5} alt="5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={handleRandomCard6} alt="6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={handleRandomCard7} alt="7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={handleRandomCard8} alt="8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={handleRandomCard9} alt="9" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={handleRandomCard10} alt="10" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={handleRandomCard11} alt="11" />
        </SwiperSlide>
      </Swiper>
      <div className="cardPickMain">
        <img src={"img/Card_Front.png"} alt="card" width={"250px"} />
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "25%",
            top: "30%",
          }}
        >
          <button className="cardPickBtnMain" onClick={cardPick}>
            카드뽑기
          </button>
        </div>
      </div>
      <CardPick ref={cardPickRef} />
    </div>
  );
};

export default Main;
