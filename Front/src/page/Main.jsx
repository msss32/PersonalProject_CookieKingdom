import React from "react";
import "../css/main.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import {
  intro1_cookie,
  intro2_adventure,
  intro3_battle,
  intro4_kingdom,
  intro5_guild,
} from "../img";
import Header from "../component/Header";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper1"
      >
        <SwiperSlide>
          <img src={intro1_cookie} alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={intro2_adventure} alt="2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={intro3_battle} alt="3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={intro4_kingdom} alt="4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={intro5_guild} alt="5" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={intro1_cookie} alt="1" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
};

export default Main;
