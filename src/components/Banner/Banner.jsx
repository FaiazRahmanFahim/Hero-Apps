import React from "react";
import playStore from "../../assets/Group.png";
import appleStore from "../../assets/Group (1).png";
import hero from "../../assets/hero.png";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-5">
        <h3 className="font-bold text-4xl md:text-5xl lg:text-7xl text-center">
          We Build <br />
          <span className="text-[#9f62f2]">Productive</span> Apps
        </h3>
        <p className="text-gray-400 text-center px-1.5 md:px-20 lg:px-28 xl:px-80">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10">
          <a
            href="https://play.google.com/store/games?hl=en"
            className="btn bg-white text-black border-2 border-gray-200 text-xl"
          >
            <img className="w-8 h-8" src={playStore} alt="" />
            Google Play
          </a>
          <a
            href="https://apps.apple.com/bj/developer/apple/id284417353?mt=12"
            className="btn bg-white text-black border-2 border-gray-200 text-xl"
          >
            <img className="w-8 h-8" src={appleStore} alt="" />
            App Store
          </a>
        </div>
        <img className="w-2xl" src={hero} alt="" />
      </div>
      <div className="bg-gradient-to-br from-[#642fe3] to-[#9f62f2] py-10 shadow-sm text-white space-y-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-center">
          Trusted by Millions, Built for You
        </h1>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center space-y-1 md:space-y-4">
            <h3 className="text-gray-200">Total Downloads</h3>
            <h3 className="font-extrabold text-4xl md:text-6xl">29.6M</h3>
            <h3 className="text-gray-200">21% more than last month</h3>
          </div>
          <div className="text-center space-y-1 md:space-y-4">
            <h3 className="text-gray-200">Total Reviews</h3>
            <h3 className="font-extrabold text-4xl md:text-6xl">906K</h3>
            <h3 className="text-gray-200">46% more than last month</h3>
          </div>
          <div className="text-center space-y-1 md:space-y-4">
            <h3 className="text-gray-200">Active Apps</h3>
            <h3 className="font-extrabold text-4xl md:text-6xl">132+</h3>
            <h3 className="text-gray-200">31 more will Launch</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
