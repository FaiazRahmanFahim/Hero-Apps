import React from "react";
import { Link } from "react-router";
import HomeApp from "./HomeApp/HomeApp";

const HomeApps = ({ homeData }) => {
  console.log(homeData);

  return (
    <div className="my-10 space-y-5">
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        Trending Apps
      </h2>
      <p className="text-base md:text-xl text-gray-400 text-center">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-10 xl:px-20 gap-5">
        {homeData.map((data) => (
          <HomeApp key={data.id} data={data}></HomeApp>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link
          to="/Apps"
          className="btn bg-gradient-to-br from-[#6732e4] to-[#9f62f2] border-none"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default HomeApps;
