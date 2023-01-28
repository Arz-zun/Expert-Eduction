import React from "react";
import Logo from "../assets/logo.png";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <section id="about" className="bg-[#14152d] mt-28 ">
      <div className="max-w-6xl mx-auto ">
        <div className="grid py-10 grid-cols-4">
          <div className=" flex justify-center items-center cursor-pointer">
            <div className="flex flex-col gap-3">
              <img className="object-contain w-56 " src={Logo} alt="" />
              <div className="text-slate-300  font-serif">
                <div className="text-xl font-semibold">About Us</div>
                <div className=" text-slate-200 text-sm my-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                  non amet error qui? Deleniti sed deserunt consequatur, illo
                  quod itaque distinctio perspiciatis impedit blanditiis tenetur
                  perferendis corrupti nihil assumenda recusandae!
                </div>
              </div>
              <form className="flex gap-3">
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email for News Subscription"
                  className="p-1 outline-none border-2 w-64 border-slate-900 "
                />
                <button
                  type="submit"
                  className="bg-[#1877f2] hover:bg-[#1562c7] p-2 text-white"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div>
            <div className="text-center text-2xl mb-5 font-serif font-serif text-slate-300">
              Branches
            </div>
            <div className="flex flex-col text-white text-center gap-3">
              <div>Kathmandu</div>
              <div>Chitwan</div>
              <div>Pokhara</div>
              <div>Dharan</div>
              <div>Nepalgunj</div>
            </div>
          </div>
          <div>
            <div className=" ">
              <div className="text-2xl pl-10 mb-5 font-serif  text-slate-300">
                Follow Us
              </div>
              <div className="text-white flex text-lg flex-col pl-10 gap-3">
                <a
                  href="https://www.facebook.com/"
                  className="flex gap-3 items-center"
                >
                  <BsFacebook />
                  <label className="cursor-pointer" htmlFor="">
                    Facebook
                  </label>
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="flex gap-3 items-center"
                >
                  <FaInstagram />
                  <label className="cursor-pointer" htmlFor="">
                    Instagram
                  </label>
                </a>
                <a
                  href="https://twitter.com/home"
                  className="flex gap-3 items-center"
                >
                  <BsTwitter />
                  <label className="cursor-pointer" htmlFor="">
                    Twiter
                  </label>
                </a>
                <a
                  href="https://www.tiktok.com/en/"
                  className="flex gap-3 items-center"
                >
                  <FaTiktok />
                  <label className="cursor-pointer" htmlFor="">
                    Tiktok
                  </label>
                </a>
              </div>
            </div>
          </div>
          <div>
            <iframe
              title="map"
              
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3533.010110726447!2d84.42854461453786!3d27.686082383034137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d27.6845213!2d84.4341089!4m5!1s0x3994fb3997287ef1%3A0xa313d521f5b466f1!2sExpert%20Education%20%26%20Visa%20Services%2C%20the%20Royal%20Century%20Hotel%2C%20Bharatpur%2010%2C%20Bharatpur!3m2!1d27.687579399999997!2d84.4268562!5e0!3m2!1sen!2snp!4v1674800862079!5m2!1sen!2snp"
              
              
              
              
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1549.7029821415717!2d84.42531468563945!3d27.68740054654889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb3997287ef1%3A0xa313d521f5b466f1!2sExpert%20Education%20%26%20Visa%20Services!5e0!3m2!1sen!2snp!4v1674640631088!5m2!1sen!2snp"
              width="260"
              height="240"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3533.010110726447!2d84.42854461453786!3d27.686082383034137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d27.6845213!2d84.4341089!4m5!1s0x3994fb3997287ef1%3A0xa313d521f5b466f1!2sExpert%20Education%20%26%20Visa%20Services%2C%20the%20Royal%20Century%20Hotel%2C%20Bharatpur%2010%2C%20Bharatpur!3m2!1d27.687579399999997!2d84.4268562!5e0!3m2!1sen!2snp!4v1674800862079!5m2!1sen!2snp"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
