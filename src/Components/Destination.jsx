import React from "react";
import australia from "../assets/aus.png";
import canada from "../assets/study_in_canada-1.jpg";
import uk from "../assets/study_in_uk.jpg";
import usa from "../assets/usa.jpg";
// import australia from "../assets/aus.png"
const Destination = () => {
  return (
    <section id="destination" className="">
      <div className="text-slate-700 my-8 text-4xl text-center font-bold font-serif">
        DESTINATIONS
      </div>
      <div className=" grid gap-3 grid-cols-4">
        <div className="group cursor-pointer hover:shadow-2xl hover:scale-105  duration-300">
          <img  className="h-48 object-cover" src={canada} alt="" />
          <div className="my-3">
            <div className="text-center group-hover:text-blue-900 text-slate-800 text-2xl">
              Study in Canada
            </div>
            <div className="text-center mt-3">
              CANADA is very well known for being one of the top choice for
              students who want to pursue their studies in a foreign country.
            </div>
          </div>
        </div>
        <div className="group hover:scale-105 cursor-pointer hover:shadow-2xl duration-300">
          <div>
            <img  className="h-48 object-cover" src={australia} alt="" />
              <div className="my-3">
            <div className="text-center group-hover:text-blue-900 text-slate-800 text-2xl">
              Study in Australia
            </div>
            <div className="text-center mt-3">
              Australia is very well known for being one of the top choice for
              students who want to pursue their studies in a foreign country.
            </div>
          </div>
          </div>
        </div>
        <div className="group hover:scale-105 cursor-pointer hover:shadow-2xl duration-300">
          <div className="">
            <img  className="h-48 object-cover" src={uk} alt="" />
            <div className="my-3">
            <div className="text-center group-hover:text-blue-900 text-slate-800 text-2xl">
              Study in Uk
            </div>
            <div className="text-center mt-3">
              UK is very well known for being one of the top choice for
              students who want to pursue their studies in a foreign country.
            </div>
          </div>
          </div>
        </div>
        <div className="group hover:scale-105 cursor-pointer hover:shadow-2xl duration-300">
          <div>
            <img className="h-48 object-cover" src={usa} alt="" />
            <div className="my-3">
            <div className="text-center group-hover:text-blue-900 text-slate-800 text-2xl">
              Study in Australia
            </div>
            <div className="text-center mt-3">
              USA is very well known for being one of the top choice for
              students who want to pursue their studies in a foreign country.
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
