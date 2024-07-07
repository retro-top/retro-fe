"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SizedImage from "@/components/basic/SizedImage";
import { useWindowWidth } from "@react-hook/window-size";

const HomeSwiper = () => {
  const width = useWindowWidth()
  return (
    <>
      <Swiper
        slidesPerView={width < 800 ? 1 : 2}
        spaceBetween={15}
        modules={[Pagination]}
        className="mySwiper"
        autoplay
      >
        <SwiperSlide>
          <SizedImage
            src={"https://unsplash.com/photos/Mf23RF8xArY/download?w=1920"}
            alt=""
            className="h-full w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SizedImage
            src={"https://unsplash.com/photos/Mf23RF8xArY/download?w=1920"}
            alt=""
            className="h-full w-full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSwiper;
