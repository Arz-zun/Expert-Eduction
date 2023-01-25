import React from "react";
import Destination from "../Components/Destination";
import Landingpage from "../Components/Landingpage";
import Navbar from "../Components/Navbar";
import University from "../Components/University";

const Layout = () => {
  return (
    <section>
      <div className="">
        <Navbar />
      </div>
      <div className=" m-auto">
        <Landingpage />
        <div className="max-w-6xl m-auto">
<Destination/>
<University/>

        </div>
      </div>
    </section>
  );
};

export default Layout;
