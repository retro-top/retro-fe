"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SizedImage from "@/components/basic/SizedImage";

const HomeSwiper = () => {
  return (
    <section>
      <Swiper slidesPerView={2} spaceBetween={15}>
        <SwiperSlide>
          <SizedImage
            src={"/banners/welcome.webp"}
            alt="Welcome Banner"
            className="h-full w-full min-h-96"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SizedImage
            src={"/banners/rank.webp"}
            alt="Welcome Banner"
            className="h-full w-full min-h-96"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default HomeSwiper;
