import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ReactPlayer from "react-player";

const CardPick = forwardRef((props, ref) => {
  const [state, setState] = useState(undefined);
  useImperativeHandle(ref, () => ({
    cardPick: () => {
      if (state === undefined) {
        setState([...document.querySelector(".cardPickBack").children]);
      } else {
        document.querySelector(".cardPickBack").appendChild(state[0]);
        document.querySelector(".cardPickBack").appendChild(state[1]);
        document.querySelector(".cardPickBack").appendChild(state[2]);
      }
      document.querySelector(".cardPickBack").style.display = "block";
      document.querySelector(".skip").style.display = "block";
      setVideoUrl("video/CookiePick.mp4");
    },
  }));

  const endVideo = () => {
    setVideoUrl();
    document.querySelector(".skip").style.display = "none";
    document.querySelector(".cardPack").style.display = "block";
    document.querySelector(".cardPack").style.pointerEvents = "none";
    setTimeout(() => {
      document.querySelector(".cardEffect").style.animationName = "lightBoom";
    }, 500);
    setTimeout(() => {
      document.querySelector(".pickCard1").style.animationName = "upOut1";
    }, 3500);
    setTimeout(() => {
      document.querySelector(".pickCard2").style.animationName = "upOut2";
    }, 3600);
    setTimeout(() => {
      document.querySelector(".pickCard3").style.animationName = "upOut3";
    }, 3700);
    setTimeout(() => {
      document.querySelector(".pickCard4").style.animationName = "upOut4";
    }, 3800);
    setTimeout(() => {
      document.querySelector(".pickCard5").style.animationName = "upOut5";
    }, 3900);
    setTimeout(() => {
      document.querySelector(".pickCard6").style.animationName = "upOut6";
    }, 4000);
    setTimeout(() => {
      document.querySelector(".pickCard7").style.animationName = "upOut7";
    }, 4100);
    setTimeout(() => {
      document.querySelector(".pickCard8").style.animationName = "upOut8";
    }, 4200);
    setTimeout(() => {
      document.querySelector(".pickCard9").style.animationName = "upOut9";
    }, 4300);
    setTimeout(() => {
      document.querySelector(".pickCard10").style.animationName = "upOut10";
    }, 4400);
    setTimeout(() => {
      document.querySelector(".cardPack").style.pointerEvents = "auto";
    }, 5000);
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
    const frontList = document.querySelectorAll(".pickFront");
    const backList = document.querySelectorAll(".pickBack");
    for (let i = 0; i < 10; i++) {
      let className = "";
      const random = Math.floor(Math.random() * 100);
      if (random >= 0 && random < 50) {
        className = "common";
        randomCard.current.push(
          commonCard[Math.floor(Math.random() * commonCard.length)].url
        );
      } else if (random >= 50 && random < 80) {
        className = "magic";
        randomCard.current.push(
          magicCard[Math.floor(Math.random() * magicCard.length)].url
        );
      } else if (random >= 80 && random < 95) {
        className = "rare";
        randomCard.current.push(
          rareCard[Math.floor(Math.random() * rareCard.length)].url
        );
      } else if (random >= 95 && random < 100) {
        className = "unique";
        randomCard.current.push(
          uniqueCard[Math.floor(Math.random() * uniqueCard.length)].url
        );
      }
      setTimeout(() => {
        frontList[i].classList.add(className);
        backList[i].classList.add(className);
      }, 5000);
    }
    setVideoUrl(null);
  };

  const cardOpenAll = () => {
    const pickFront = document.querySelectorAll(".pickFront");
    const pickBack = document.querySelectorAll(".pickBack");
    for (let i = 0; i < 10; i++) {
      pickFront[i].classList.add("frontTurn");
      pickBack[i].classList.add("backTurn");
    }
    document.querySelector(".cardPickExit").style.display = "block";
  };

  const cardOpenOne = (e) => {
    const pickFront = document.querySelectorAll(".pickFront");
    const pickBack = document.querySelectorAll(".pickBack");
    pickFront[e].classList.add("frontTurn");
    pickBack[e].classList.add("backTurn");
    let isOnCount = 0;
    pickFront.forEach((e) => {
      if (e.classList.contains("frontTurn")) {
        isOnCount++;
      }
    });
    if (isOnCount === 10) {
      document.querySelector(".cardPickExit").style.display = "block";
    }
  };

  const cardPickExit = () => {
    //document.querySelector(".cardPickBack").remove();
    document.querySelector(".cardPickBack").style.display = "none";
  };

  return (
    <div>
      <div className="cardPickBack">
        <div className="background"></div>
        <div className="cardPickExit" onClick={cardPickExit}>
          X
        </div>
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
            <button
              onClick={() => {
                endVideo();
              }}
              className="skipBtn"
            ></button>
          </div>
          <div className="cardPack">
            <div className="cardEffect"></div>
            <div
              className="pickCard1"
              onClick={(e) => {
                cardOpenOne(0);
              }}
            >
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
            <div
              className="pickCard2"
              onClick={(e) => {
                cardOpenOne(1);
              }}
            >
              <div style={{ position: "relative" }}>
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
            </div>
            <div
              className="pickCard3"
              onClick={(e) => {
                cardOpenOne(2);
              }}
            >
              <div style={{ position: "relative" }}>
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
            </div>
            <div
              className="pickCard4"
              onClick={(e) => {
                cardOpenOne(3);
              }}
            >
              <div style={{ position: "relative" }}>
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
            </div>
            <div
              className="pickCard5"
              onClick={(e) => {
                cardOpenOne(4);
              }}
            >
              <div style={{ position: "relative" }}>
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
            </div>
            <div
              className="pickCard6"
              onClick={(e) => {
                cardOpenOne(5);
              }}
            >
              <div style={{ position: "relative" }}>
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
            </div>
            <div
              className="pickCard7"
              onClick={(e) => {
                cardOpenOne(6);
              }}
            >
              <div style={{ position: "relative" }}>
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
            </div>
            <div
              className="pickCard8"
              onClick={(e) => {
                cardOpenOne(7);
              }}
            >
              <div style={{ position: "relative" }}>
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
            </div>
            <div
              className="pickCard9"
              onClick={(e) => {
                cardOpenOne(8);
              }}
            >
              <div style={{ position: "relative" }}>
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
            </div>
            <div
              className="pickCard10"
              onClick={(e) => {
                cardOpenOne(9);
              }}
            >
              <div style={{ position: "relative" }}>
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
    </div>
  );
});

export default CardPick;
