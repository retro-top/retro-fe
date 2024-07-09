"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import SwiperCore from "swiper/core";
import SizedImage from "@/components/basic/SizedImage";
import { useWindowWidth } from "@react-hook/window-size";

const HomeSwiper = () => {
  const width = useWindowWidth();
  SwiperCore.use([Autoplay, Pagination]);
  return (
    <section>
      <Swiper
        slidesPerView={width < 800 ? 1 : 2}
        spaceBetween={15}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
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
    </section>
  );
};

export default HomeSwiper;
