import React from "react";
import student from "../assets/councelor.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
const Testimonial = () => {
  return (
    <section className="mt-28">
      <div className="text-slate-700 my-8 text-4xl text-center font-bold font-serif">
        Testimonial
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div>
        <div className="flex justify-around mb-3 gap-3 items-center">
          <img className=" h-16 w-16 rounded-full" src={student} alt="" />
          <div className="font-semibold font-serif">Rajesh Hamal</div>
        </div>
        <div className="font-serif ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          voluptatibus delectus possimus! Ab, temporibus. Omnis, veritatis
          fugit? Sint quae, soluta provident laboriosam aperiam, officiis,
          perspiciatis accusamus fugit non rem ullam.
        </div>
      </div></SwiperSlide>
        <SwiperSlide><div>
        <div className="flex justify-around mb-3 gap-3 items-center">
          <img className=" h-16 w-16 rounded-full" src={student} alt="" />
          <div className="font-semibold font-serif">Rajesh Hamal</div>
        </div>
        <div className="font-serif ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          voluptatibus delectus possimus! Ab, temporibus. Omnis, veritatis
          fugit? Sint quae, soluta provident laboriosam aperiam, officiis,
          perspiciatis accusamus fugit non rem ullam.
        </div>
      </div></SwiperSlide>
        <SwiperSlide><div>
        <div className="flex justify-around mb-3 gap-3 items-center">
          <img className=" h-16 w-16 rounded-full" src={student} alt="" />
          <div className="font-semibold font-serif">Rajesh Hamal</div>
        </div>
        <div className="font-serif ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          voluptatibus delectus possimus! Ab, temporibus. Omnis, veritatis
          fugit? Sint quae, soluta provident laboriosam aperiam, officiis,
          perspiciatis accusamus fugit non rem ullam.
        </div>
      </div></SwiperSlide>
      <SwiperSlide><div>
        <div className="flex justify-around mb-3 gap-3 items-center">
          <img className=" h-16 w-16 rounded-full" src={student} alt="" />
          <div className="font-semibold font-serif">Rajesh Hamal</div>
        </div>
        <div className="font-serif ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          voluptatibus delectus possimus! Ab, temporibus. Omnis, veritatis
          fugit? Sint quae, soluta provident laboriosam aperiam, officiis,
          perspiciatis accusamus fugit non rem ullam.
        </div>
      </div></SwiperSlide>    <SwiperSlide><div>
        <div className="flex justify-around mb-3 gap-3 items-center">
          <img className=" h-16 w-16 rounded-full" src={student} alt="" />
          <div className="font-semibold font-serif">Rajesh Hamal</div>
        </div>
        <div className="font-serif ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          voluptatibus delectus possimus! Ab, temporibus. Omnis, veritatis
          fugit? Sint quae, soluta provident laboriosam aperiam, officiis,
          perspiciatis accusamus fugit non rem ullam.
        </div>
      </div></SwiperSlide>    <SwiperSlide><div>
        <div className="flex justify-around mb-3 gap-3 items-center">
          <img className=" h-16 w-16 rounded-full" src={student} alt="" />
          <div className="font-semibold font-serif">Rajesh Hamal</div>
        </div>
        <div className="font-serif ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
          voluptatibus delectus possimus! Ab, temporibus. Omnis, veritatis
          fugit? Sint quae, soluta provident laboriosam aperiam, officiis,
          perspiciatis accusamus fugit non rem ullam.
        </div>
      </div></SwiperSlide>
        </Swiper>

      
    </section>
  );
};

export default Testimonial;
