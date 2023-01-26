import React from "react";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
const Contact = () => {
  return (
    <section id="contact" className="my-3">
      <div className="text-slate-700 my-8 text-4xl text-center font-bold font-serif">
        HAVE SOME QUESTION ?
      </div>
      <div className=" flex justify-center ">
        <div className="w-[80%] shadow-2xl rounded-2xl shadow-slate-600 bg-slate-50">
          <div className="grid grid-cols-2 ">
            <div className="  rounded-tl-2xl rounded-bl-2xl p-5">
              <div className="text-center text-3xl font-semibold font-serif text-slate-600">
                Expert Education{" "}
              </div>
              <div className="tracking-tight text-sm">
                Expert Education is a Leading Education and Migration Consulting
                Institution with a global presence in 16 countries. We provide
                honest, credible, and authentic counselling for studying in
                Australia, Canada, the US and the UK.
              </div>
              <div className="my-3">
                <div className="flex items-center gap-3">
                  <HiOutlineOfficeBuilding />
                  <div className="font-semibold">
                    Headquarter :Brisbane - EEVS Asia
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CiLocationOn />
                  <div className="font-semibold">
                  Level 1, 25 Peel Street Adelaide, SA 5000
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <AiOutlinePhone />
                  <div className="font-semibold">+67 568123458</div>
                </div>
                <div className="flex items-center gap-3">
                  <HiOutlineMailOpen />
                  <div className="font-semibold">qldasia@experteducation.com.au</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 p-5 ">
              <div className=" flex items-center">
                <div
                  htmlFor=""
                  className="text-base w-24 text-slate-900 font-bold"
                >
                  Full Name :
                </div>
                <input
                  type="text"
                  placeholder=""
                  className="p-1 outline-none border-2 w-64 border-slate-900 ml-3"
                />
              </div>
              <div className="flex items-center">
                <div
                  htmlFor=""
                  className="text-base w-24 text-slate-900 font-bold"
                >
                  Email :
                </div>
                <input
                  type="email"
                  placeholder=""
                  className="p-1 outline-none border-2 w-64 border-slate-900 ml-3"
                />
              </div>
              <div className="flex items-center">
                <label
                  htmlFor=""
                  className="text-base w-24 text-slate-900 font-bold"
                >
                  Subject :
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="p-1 outline-none border-2 w-64 border-slate-900 ml-3"
                />
              </div>
              <div className="flex items-center">
                <div
                  htmlFor=""
                  className="text-base w-24 text-slate-900 font-bold"
                >
                  Messege :
                </div>
                <textarea
                  className="pl-3 outline-none border-2 border-slate-900 ml-3"
                  name=""
                  id=""
                  cols="30"
                  rows="1"
                ></textarea>

                {/* <input type="text" placeholder="Name" /> */}
              </div>
              <button className="bg-slate-700 w-32 p-2 text-white hover:bg-slate-900 rounded-2xl">
                send messege
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
