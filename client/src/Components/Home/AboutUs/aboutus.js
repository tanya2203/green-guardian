import React from "react";

import service1 from "../../../assets/service1.png";
import service2 from "../../../assets/service2.png";
import service3 from "../../../assets/service3.png";
import service4 from "../../../assets/service4.png";
// import KeyWest from "../../../assets/service1.png";

const AboutUs = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1 className="text-green-500">
        "Leading the charge in electronic waste stewardship, we recycle,
        refurbish, and renew to protect our environment and conserve resources."
      </h1>
      <p className="py-4 text-green-500">
        "Your trusted partner in electronic waste solutions, we're committed to
        reducing the digital footprint for a greener tomorrow, one circuit at a
        time."
      </p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={service1}
          alt="/"
        />
        <img className="w-full h-full object-cover" src={service2} alt="/" />
        <img className="w-full h-full object-cover" src={service3} alt="/" />
        <img className="w-full h-full object-cover" src={service2} alt="/" />
        <img className="w-full h-full object-cover" src={service4} alt="/" />
      </div>
    </div>
  );
};

export default AboutUs;
