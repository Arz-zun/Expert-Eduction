import React from "react";
import Contact from "../Components/Contact";
import Destination from "../Components/Destination";
import Footer from "../Components/Footer";
import Landingpage from "../Components/Landingpage";
import Navbar from "../Components/Navbar";
import University from "../Components/University";

const Layout = () => {
  return (
    <section>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className=" m-auto">
        <Landingpage />
        <div className="max-w-6xl m-auto">
          <Destination />
          {/* <University /> */}
          <Contact/>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Layout;
