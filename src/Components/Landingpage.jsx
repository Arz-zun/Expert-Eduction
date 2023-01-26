import React from "react";

import australia from "../assets/australia.jpg";
import canada from "../assets/canada.jpg";

// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay } from "swiper";

const Landingpage = () => {
  return (
    <section id="">
      <div className="">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        >
          <SwiperSlide>
            <div className="h-[30rem] relative">
              <div className="  top-[8rem] font z-20 left-[5rem] absolute">
                <div className="">
                  <div style={{textShadow:"2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}} className="text-3xl font-bold text-white">
                    Study Abroad
                  </div>
                  <hr className="w-80" />
                  <div style={{textShadow:"2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}} className="text-8xl font-bold text-white ">Study in</div>
                  <div style={{textShadow:"2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}} className="text-8xl font-bold text-white ">Australia</div>
                </div>
              </div>
              <img
                className="w-full opacity-90 h-[30rem] object-cover"
                src={australia}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-[30rem] relative">
              <div className="  top-[8rem] font-serif z-20 left-[5rem] absolute">
                <div className="">
                  <div className="text-3xl font-bold tra text-white" style={{textShadow:"2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}>
                    Study Abroad
                  </div>
                  <hr className="w-80" />
                  <div style={{textShadow:"2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}} className="text-8xl font-bold  text-white">Study in</div>
                  <div className="text-8xl font-bold tracking-wider text-white" style={{textShadow:"2px 7px 5px rgba(0,0,0,0.3), 0px -4px 10px rgba(255,255,255,0.3)"}}>Canada</div>
                </div>
              </div>
              <img
                className="w-full opacity-90 h-[30rem] object-cover"
                src={canada}
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Landingpage;
