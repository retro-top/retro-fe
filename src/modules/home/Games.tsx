"use client";

import React, { useEffect, useState } from "react";
import games from "@/constants/games";
import GameCard from "@/components/GameCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useWindowWidth } from "@react-hook/window-size";

const Games = () => {
  const width = useWindowWidth();
  let [slidesPerView, setSlidesPerView] = useState<"auto" | number>(7);

  useEffect(() => {
    if (width < 600) {
      setSlidesPerView("auto");
    } else if (width < 900) {
      setSlidesPerView(3);
    } else if (width < 1200) {
      setSlidesPerView(2);
    }
  }, [width]);

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
