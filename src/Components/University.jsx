import React from "react";
import university from "../assets/usauniversity.jpg";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";

const University = () => {
  return (
    <section id="university" className="text-slate-700 my-5   ">
      <div className="text-slate-700 my-8 text-4xl text-center font-bold font-serif">
        UNIVERSITY
      </div>
      <Swiper
        slidesPerView={3}
        autoplay={{
          delay: 1400,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className=" p-3 shadow-2xl">
            <img className="object-cover" src={university} alt="" />
            <div className="my-3">
              <div className="text-2xl font-semibold font-serif">
                Harvad University
              </div>
              <div>Cambridge, MA, United States</div>
              <div className=" font-bold ">Courses</div>
              <ul className="list-disc pl-8">
                <li>Msc IT</li>
                <li>Biological and Biomedical Sciences</li>
                <li>Astronomy</li>
                <li>Health Policy (Management)</li>
              </ul>
              <button className="bg-slate-900 hover:bg-slate-600 text-white px-3 mt-3 py-1 rounded-lg">
                Explore more{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" p-3 shadow-2xl">
            <img className="object-cover" src={university} alt="" />
            <div className="my-3">
              <div className="text-2xl font-semibold font-serif">
                Harvad University
              </div>
              <div>Cambridge, MA, United States</div>
              <div className=" font-bold ">Courses</div>
              <ul className="list-disc pl-8">
                <li>Msc IT</li>
                <li>Biological and Biomedical Sciences</li>
                <li>Astronomy</li>
                <li>Health Policy (Management)</li>
              </ul>
              <button className="bg-slate-900 hover:bg-slate-600 text-white px-3 mt-3 py-1 rounded-lg">
                Explore more{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" p-3 shadow-2xl">
            <img className="object-cover" src={university} alt="" />
            <div className="my-3">
              <div className="text-2xl font-semibold font-serif">
                Harvad University
              </div>
              <div>Cambridge, MA, United States</div>
              <div className=" font-bold ">Courses</div>
              <ul className="list-disc pl-8">
                <li>Msc IT</li>
                <li>Biological and Biomedical Sciences</li>
                <li>Astronomy</li>
                <li>Health Policy (Management)</li>
              </ul>
              <button className="bg-slate-900 hover:bg-slate-600 text-white px-3 mt-3 py-1 rounded-lg">
                Explore more{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" p-3 shadow-2xl">
            <img className="object-cover" src={university} alt="" />
            <div className="my-3">
              <div className="text-2xl font-semibold font-serif">
                Harvad University
              </div>
              <div>Cambridge, MA, United States</div>
              <div className=" font-bold ">Courses</div>
              <ul className="list-disc pl-8">
                <li>Msc IT</li>
                <li>Biological and Biomedical Sciences</li>
                <li>Astronomy</li>
                <li>Health Policy (Management)</li>
              </ul>
              <button className="bg-slate-900 hover:bg-slate-600 text-white px-3 mt-3 py-1 rounded-lg">
                Explore more{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" p-3 shadow-2xl">
            <img className="object-cover" src={university} alt="" />
            <div className="my-3">
              <div className="text-2xl font-semibold font-serif">
                Harvad University
              </div>
              <div>Cambridge, MA, United States</div>
              <div className=" font-bold ">Courses</div>
              <ul className="list-disc pl-8">
                <li>Msc IT</li>
                <li>Biological and Biomedical Sciences</li>
                <li>Astronomy</li>
                <li>Health Policy (Management)</li>
              </ul>
              <button className="bg-slate-900 hover:bg-slate-600 text-white px-3 mt-3 py-1 rounded-lg">
                Explore more{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className=" p-3 shadow-2xl">
            <img className="object-cover" src={university} alt="" />
            <div className="my-3">
              <div className="text-2xl font-semibold font-serif">
                Harvad University
              </div>
              <div>Cambridge, MA, United States</div>
              <div className=" font-bold ">Courses</div>
              <ul className="list-disc pl-8">
                <li>Msc IT</li>
                <li>Biological and Biomedical Sciences</li>
                <li>Astronomy</li>
                <li>Health Policy (Management)</li>
              </ul>
              <button className="bg-slate-900 hover:bg-slate-600 text-white px-3 mt-3 py-1 rounded-lg">
                Explore more{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" p-3 shadow-2xl">
            <img className="object-cover" src={university} alt="" />
            <div className="my-3">
              <div className="text-2xl font-semibold font-serif">
                Harvad University
              </div>
              <div>Cambridge, MA, United States</div>
              <div className=" font-bold ">Courses</div>
              <ul className="list-disc pl-8">
                <li>Msc IT</li>
                <li>Biological and Biomedical Sciences</li>
                <li>Astronomy</li>
                <li>Health Policy (Management)</li>
              </ul>
              <button className="bg-slate-900 hover:bg-slate-600 text-white px-3 mt-3 py-1 rounded-lg">
                Explore more{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" p-3 shadow-2xl">
            <img className="object-cover" src={university} alt="" />
            <div className="my-3">
              <div className="text-2xl font-semibold font-serif">
                Harvad University
              </div>
              <div>Cambridge, MA, United States</div>
              <div className=" font-bold ">Courses</div>
              <ul className="list-disc pl-8">
                <li>Msc IT</li>
                <li>Biological and Biomedical Sciences</li>
                <li>Astronomy</li>
                <li>Health Policy (Management)</li>
              </ul>
              <button className="bg-slate-900 hover:bg-slate-600 text-white px-3 mt-3 py-1 rounded-lg">
                Explore more{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" p-3 shadow-2xl">
            <img className="object-cover" src={university} alt="" />
            <div className="my-3">
              <div className="text-2xl font-semibold font-serif">
                Harvad University
              </div>
              <div>Cambridge, MA, United States</div>
              <div className=" font-bold ">Courses</div>
              <ul className="list-disc pl-8">
                <li>Msc IT</li>
                <li>Biological and Biomedical Sciences</li>
                <li>Astronomy</li>
                <li>Health Policy (Management)</li>
              </ul>
              <button className="bg-slate-900 hover:bg-slate-600 text-white px-3 mt-3 py-1 rounded-lg">
                Explore more{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" p-3 shadow-2xl">
            <img className="object-cover" src={university} alt="" />
            <div className="my-3">
              <div className="text-2xl font-semibold font-serif">
                Harvad University
              </div>
              <div>Cambridge, MA, United States</div>
              <div className=" font-bold ">Courses</div>
              <ul className="list-disc pl-8">
                <li>Msc IT</li>
                <li>Biological and Biomedical Sciences</li>
                <li>Astronomy</li>
                <li>Health Policy (Management)</li>
              </ul>
              <button className="bg-slate-900 hover:bg-slate-600 text-white px-3 mt-3 py-1 rounded-lg">
                Explore more{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" p-3 shadow-2xl">
            <img className="object-cover" src={university} alt="" />
            <div className="my-3">
              <div className="text-2xl font-semibold font-serif">
                Harvad University
              </div>
              <div>Cambridge, MA, United States</div>
              <div className=" font-bold ">Courses</div>
              <ul className="list-disc pl-8">
                <li>Msc IT</li>
                <li>Biological and Biomedical Sciences</li>
                <li>Astronomy</li>
                <li>Health Policy (Management)</li>
              </ul>
              <button className="bg-slate-900 hover:bg-slate-600 text-white px-3 mt-3 py-1 rounded-lg">
                Explore more{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className=" p-3 shadow-2xl">
            <img className="object-cover" src={university} alt="" />
            <div className="my-3">
              <div className="text-2xl font-semibold font-serif">
                Harvad University
              </div>
              <div>Cambridge, MA, United States</div>
              <div className=" font-bold ">Courses</div>
              <ul className="list-disc pl-8">
                <li>Msc IT</li>
                <li>Biological and Biomedical Sciences</li>
                <li>Astronomy</li>
                <li>Health Policy (Management)</li>
              </ul>
              <button className="bg-slate-900 hover:bg-slate-600 text-white px-3 mt-3 py-1 rounded-lg">
                Explore more{" "}
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div className="grid grid-cols-3 gap-3">
        <div className=" p-3 shadow-2xl">
          <img className="object-cover" src={university} alt="" />
          <div className="my-3">
            <div className="text-2xl font-semibold font-serif">
              Harvad University
            </div>
            <div>Cambridge, MA, United States</div>
            <div className=" font-bold ">Courses</div>
            <ul className="list-disc pl-8">
              <li>Msc IT</li>
              <li>Biological and Biomedical Sciences</li>
              <li>Astronomy</li>
              <li>Health Policy (Management)</li>
            </ul>
            <button className="bg-slate-900 hover:bg-slate-600 text-white px-3 mt-3 py-1 rounded-lg">
              Explore more{" "}
            </button>
          </div>
        </div>
        <div className=" p-3 shadow-2xl">
          <img className="object-cover" src={university} alt="" />
          <div className="my-3">
            <div className="text-2xl font-semibold font-serif">
              Harvad University
            </div>
            <div>Cambridge, MA, United States</div>
            <div className=" font-bold ">Courses</div>
            <ul className="list-disc pl-8">
              <li>Msc IT</li>
              <li>Biological and Biomedical Sciences</li>
              <li>Astronomy</li>
              <li>Health Policy (Management)</li>
            </ul>
            <button className="bg-slate-900 hover:bg-slate-600 text-white px-3 mt-3 py-1 rounded-lg">
              Explore more{" "}
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default University;
