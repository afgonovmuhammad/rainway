import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import main5 from '../Pages/Home/img/main5.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Sp_hm.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function Swire_home() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,

          slideShadows: true,
        }}
        
        pagination={true}
        breakpoints={{
            376: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
  
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
  
            1280: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={main5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={main5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={main5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={main5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={main5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={main5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={main5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={main5} />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
