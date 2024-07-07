"use client";

import React from "react";
import games from "@/constants/games";
import GameCard from "@/components/GameCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useWindowWidth } from "@react-hook/window-size";

const Games = () => {
  const width = useWindowWidth();
  let slidesPerView: "auto" | number = 7;

  if (width < 600) {
    slidesPerView = "auto";
  } else if (width < 900) {
    slidesPerView = 3;
  } else if (width < 1200) {
    slidesPerView = 4;
  }

  return (
    <>
    <h4>Our Games</h4>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={12}
        modules={[Pagination]}
        className="mySwiper"
      >
        {games.map((item, index) => (
          <SwiperSlide key={index}>
            <GameCard game={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Games;
