import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ReactPlayer from "react-player";

const CardPick = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    cardPick: () => {
      document.querySelector(".cardPickBack").style.display = "block";
      document.querySelector(".skip").style.display = "block";
      setVideoUrl("video/CookiePick.mp4");
    },
  }));

  const endVideo = () => {
    setVideoUrl();
    document.querySelector(".skip").style.display = "none";
    document.querySelector(".cardPack").style.display = "block";
    setTimeout(() => {
      document.querySelector(".cardEffect").style.animationName = "lightBoom";
    }, 500);
    setTimeout(() => {
      document.querySelector(".pickCard1").style.animationName = "upOut1";
    }, 3500);
    setTimeout(() => {
      document.querySelector(".cardTwo.pickFront").style.animationName =
        "upOut2";
      document.querySelector(".cardTwo.pickBack").style.animationName =
        "upOut2";
    }, 3600);
    setTimeout(() => {
      document.querySelector(".cardThree.pickFront").style.animationName =
        "upOut3";
      document.querySelector(".cardThree.pickBack").style.animationName =
        "upOut3";
    }, 3700);
    setTimeout(() => {
      document.querySelector(".cardFour.pickFront").style.animationName =
        "upOut4";
      document.querySelector(".cardFour.pickBack").style.animationName =
        "upOut4";
    }, 3800);
    setTimeout(() => {
      document.querySelector(".cardFive.pickFront").style.animationName =
        "upOut5";
      document.querySelector(".cardFive.pickBack").style.animationName =
        "upOut5";
    }, 3900);
    setTimeout(() => {
      document.querySelector(".cardSix.pickFront").style.animationName =
        "upOut6";
      document.querySelector(".cardSix.pickBack").style.animationName =
        "upOut6";
    }, 4000);
    setTimeout(() => {
      document.querySelector(".cardSeven.pickFront").style.animationName =
        "upOut7";
      document.querySelector(".cardSeven.pickBack").style.animationName =
        "upOut7";
    }, 4100);
    setTimeout(() => {
      document.querySelector(".cardEight.pickFront").style.animationName =
        "upOut8";
      document.querySelector(".cardEight.pickBack").style.animationName =
        "upOut8";
    }, 4200);
    setTimeout(() => {
      document.querySelector(".cardNine.pickFront").style.animationName =
        "upOut9";
      document.querySelector(".cardNine.pickBack").style.animationName =
        "upOut9";
    }, 4300);
    setTimeout(() => {
      document.querySelector(".cardTen.pickFront").style.animationName =
        "upOut10";
      document.querySelector(".cardTen.pickBack").style.animationName =
        "upOut10";
    }, 4400);
    randomCardPick();
  };

  const videoPlayerStyle = { margin: 0, height: "1070px", overflow: "hidden" };

  const videoRef = useRef();
  const [videoUrl, setVideoUrl] = useState(null);

  const commonCard = [
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
  ];

  const magicCard = [
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
  ];

  const rareCard = [
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
  ];

  const uniqueCard = [
    { url: "img/Unique/Affogato.png" },
    { url: "img/Unique/CaramelArrow.png" },
    { url: "img/Unique/ClottedCream.png" },
    { url: "img/Unique/Clover.png" },
    { url: "img/Unique/Cotton.png" },
    { url: "img/Unique/DarkChoco.png" },
    { url: "img/Unique/Eclair.png" },
    { url: "img/Unique/Latte.png" },
    { url: "img/Unique/Lilac.png" },
    { url: "img/Unique/Pastry.png" },
    { url: "img/Unique/Raspberry.png" },
    { url: "img/Unique/Rye.png" },
    { url: "img/Unique/TwizzlyGummy.png" },
  ];

  let randomCard = useRef([]);

  const randomCardPick = () => {
    for (let i = 0; i < 10; i++) {
      const random = Math.floor(Math.random() * 100);
      if (random >= 0 && random < 50) {
        randomCard.current.push(
          commonCard[Math.floor(Math.random() * commonCard.length)].url
        );
      } else if (random >= 50 && random < 80) {
        randomCard.current.push(
          magicCard[Math.floor(Math.random() * magicCard.length)].url
        );
      } else if (random >= 80 && random < 95) {
        randomCard.current.push(
          rareCard[Math.floor(Math.random() * rareCard.length)].url
        );
      } else if (random >= 95 && random < 100) {
        randomCard.current.push(
          uniqueCard[Math.floor(Math.random() * uniqueCard.length)].url
        );
      }
      console.log(Math.floor(Math.random() * 100));
    }
    setVideoUrl(null);
    console.log(randomCard.current);
  };

  const cardOpen = () => {
    document.querySelector(".pickFront").classList.add("frontTurn");
    document.querySelector(".pickBack").classList.add("backTurn");
  };

  return (
    <div>
      <div className="cardPickBack">
        <div className="background"></div>
        <div className="cardPick">
          <ReactPlayer
            ref={videoRef}
            className="CookiePickPlayer"
            url={videoUrl}
            width="100%"
            height="100%"
            playing={true}
            muted={true}
            controls={false}
            onEnded={() => {
              endVideo();
            }}
            style={videoPlayerStyle}
          />
          <div className="skip">
            <button onClick={endVideo} className="skipBtn"></button>
          </div>
          <div className="cardPack">
            <div className="cardEffect"></div>
            <div className="pickCard1" onClick={cardOpen}>
              <div style={{ position: "relative" }}>
                <div className="cardOne pickFront">
                  <img
                    src={randomCard.current[0]}
                    alt="card"
                    width={"200px"}
                    height={"300px"}
                  />
                </div>
                <div className="cardOne pickBack">
                  <img
                    src="img/Card_Back.png"
                    alt="card"
                    width={"200px"}
                    height={"300px"}
                  />
                </div>
              </div>
            </div>
            <div className="pickCard2" onClick={cardOpen}>
              <div className="cardTwo pickFront">
                <img
                  src={randomCard.current[1]}
                  alt="card"
                  width={"200px"}
                  height={"300px"}
                />
              </div>
              <div className="cardTwo pickBack">
                <img
                  src="img/Card_Back.png"
                  alt="card"
                  width={"200px"}
                  height={"300px"}
                />
              </div>
            </div>
            <div className="card" onClick={cardOpen}>
              <div className="cardThree pickFront">
                <img
                  src={randomCard.current[2]}
                  alt="card"
                  width={"200px"}
                  height={"300px"}
                />
              </div>
              <div className="cardThree pickBack">
                <img
                  src="img/Card_Back.png"
                  alt="card"
                  width={"200px"}
                  height={"300px"}
                />
              </div>
            </div>
            <div className="card" onClick={cardOpen}>
              <div className="cardFour pickFront">
                <img
                  src={randomCard.current[3]}
                  alt="card"
                  width={"200px"}
                  height={"300px"}
                />
              </div>
              <div className="cardFour pickBack">
                <img
                  src="img/Card_Back.png"
                  alt="card"
                  width={"200px"}
                  height={"300px"}
                />
              </div>
            </div>
            <div className="card" onClick={cardOpen}>
              <div className="cardFive pickFront">
                <img
                  src={randomCard.current[4]}
                  alt="card"
                  width={"200px"}
                  height={"300px"}
                />
              </div>
              <div className="cardFive pickBack">
                <img
                  src="img/Card_Back.png"
                  alt="card"
                  width={"200px"}
                  height={"300px"}
                />
              </div>
            </div>
            <div className="card" onClick={cardOpen}>
              <div className="cardSix pickFront">
                <img
                  src={randomCard.current[5]}
                  alt="card"
                  width={"200px"}
                  height={"300px"}
                />
              </div>
              <div className="cardSix pickBack">
                <img
                  src="img/Card_Back.png"
                  alt="card"
                  width={"200px"}
                  height={"300px"}
                />
              </div>
            </div>
            <div className="card" onClick={cardOpen}>
              <div className="cardSeven pickFront">
                <img
                  src={randomCard.current[6]}
                  alt="card"
                  width={"200px"}
                  height={"300px"}
                />
              </div>
              <div className="cardSeven pickBack">
                <img
                  src="img/Card_Back.png"
                  alt="card"
                  width={"200px"}
                  height={"300px"}
                />
              </div>
            </div>
            <div className="card" onClick={cardOpen}>
              <div className="cardEight pickFront">
                <img
                  src={randomCard.current[7]}
                  alt="card"
                  width={"200px"}
                  height={"300px"}
                />
              </div>
              <div className="cardEight pickBack">
                <img
                  src="img/Card_Back.png"
                  alt="card"
                  width={"200px"}
                  height={"300px"}
                />
              </div>
            </div>
            <div className="card" onClick={cardOpen}>
              <div className="cardNine pickFront">
                <img
                  src={randomCard.current[8]}
                  alt="card"
                  width={"200px"}
                  height={"300px"}
                />
              </div>
              <div className="cardNine pickBack">
                <img
                  src="img/Card_Back.png"
                  alt="card"
                  width={"200px"}
                  height={"300px"}
                />
              </div>
            </div>
            <div className="card" onClick={cardOpen}>
              <div className="cardTen pickFront">
                <img
                  src={randomCard.current[9]}
                  alt="card"
                  width={"200px"}
                  height={"300px"}
                />
              </div>
              <div className="cardTen pickBack">
                <img
                  src="img/Card_Back.png"
                  alt="card"
                  width={"200px"}
                  height={"300px"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CardPick;
