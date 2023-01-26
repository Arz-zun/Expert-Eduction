import React from "react";
import visit from "../assets/visit.jpg";
import student from "../assets/student.jpg";
import partner from "../assets/partner.jpg";
import { SlPlane } from "react-icons/sl";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
const TestPreparation = () => {
  return (
    <section id="student_support">
      <div className="text-slate-700 my-8 text-4xl text-center font-bold font-serif">
        SERVICES PROVIDED
      </div>
      <div className=" grid gap-3 grid-cols-7">
        <div className="col-span-2">
          <div className="text-center text-2xl text-slate-500 font-semibold font-serif">
            {" "}
            Career Counseling
          </div>
        </div>
        <div className="col-span-3 cursor-pointer">
          <div>
            <div className="text-center text-2xl text-slate-500 font-semibold font-serif">
              {" "}
              Visa Counseling{" "}
            </div>
            <div className="">
              <div className="grid mt-5 gap-1 grid-cols-2">
                <div className="relative group h-44 overflow-hidden">
                  <div className=" absolute w-full bg-slate-900 -60 -bottom-24 duration-300 group-hover:bottom-0">
                    <div className="flex justify-center text-white   ">
                      <SlPlane className="h-14  -mt-5 w-14 rounded-full p-3 bg-blue-800 -100 " />
                    </div>
                    <div className="text-center text-white text-xl ">
                      Visit Visa
                    </div>
                  </div>
                  <img className=" object-cover h-44" src={visit} alt="" />
                </div>
                <div className="relative group h-44 overflow-hidden">
                  <div className=" absolute w-full bg-slate-900 -60 -bottom-24 duration-300 group-hover:bottom-0">
                    <div className="flex justify-center text-white   ">
                      <MdOutlineFamilyRestroom className="h-14  -mt-5 w-14 rounded-full p-3 bg-blue-800 -100 " />
                    </div>
                    <div className="text-center text-white text-xl ">
                      Partner Visa
                    </div>
                  </div>
                  <img className=" object-cover h-44" src={partner} alt="" />
                </div>
              </div>
              <div className="h-80 w-full group relative overflow-hidden ">
                <div className=" absolute w-full bg-slate-900 - -bottom-24 duration-300 group-hover:bottom-0">
                  <div className="flex justify-center text-white   ">
                    <FaUserGraduate className="h-14  -mt-5 w-14 rounded-full p-3 bg-blue-800 -100 " />
                  </div>
                  <div className="text-center text-white text-xl ">
                    Student Visa
                  </div>
                </div>

                <img
                  className="h-80 w-full object-fill "
                  src={student}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="text-center text-2xl text-slate-500 font-semibold font-serif">
            {" "}
            Classes
          </div>
          <div className="mt-5 pl-5">
            <div className="text-slate-700 text-xl underline">
              Various classes with peacefull environment
            </div>
            <ul className="list-disc pl-8">
              <li>IELTS</li>
              <li>TOEFL</li>
              <li>PTE</li>
              <li>SAT</li>
              <li>GRE</li>
            </ul>
            <div className="bg-slate-700 text-white m-auto text-xl my-2 text-center">Book Your Date</div>
            <div>

<form>
 
  <input name="name" className="outline-none pl-2 border-2  w-full mb-3 border-slate-500" type="text" required placeholder="Your Full Name "/>
  <input className="outline-none border-2 pl-2  w-full mb-3 border-slate-500" type="date"  placeholder="date"/>
<select required  className="outline-none border-2 pl-2  w-full mb-3 border-slate-500" name="" id="">
  <option value="">Select Class</option>
  <option value="">IELTS</option>
  <option value="">PTE</option>
  <option value="">TOEFL</option>
  <option value="">SAT</option>
  <option value="">GRE</option>
</select>
<select required  className="outline-none border-2 pl-2 w-full mb-3 border-slate-500" name="" id="">
  <option value="">Time</option>
  <option value="">8am - 10am</option>
  <option value="">10am - 12pm</option>
  <option value="">1pm - 3pm</option>
  <option value="">4pm - 6pm</option>
</select>
<button type="submit" className="float-right bg-slate-700 hover:bg-slate-900 text-white px-2 py-1 rounded-xl">Book</button>
</form>

            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </section>
  );
};

export default TestPreparation;
