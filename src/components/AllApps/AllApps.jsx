import React from "react";
import { useLoaderData } from "react-router";
import AllApp from "./AllApp/AllApp";

const AllApps = () => {
  const allAppsData = useLoaderData();
  return (
    <div>
      <div className="my-10 space-y-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Our All Applications
        </h2>
        <p className="text-base md:text-xl text-gray-400 text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex justify-between items-center gap-5 flex-col md:flex-row px-20">
          <h3 className="flex-1 text-lg md:text-2xl font-semibold">
            <span>({allAppsData.length})</span> Apps Found
          </h3>
          <label className="input bg-gray-100 border-2 border-gray-200">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-10 xl:px-20 gap-5">
          {allAppsData.map((AppData) => (
            <AllApp key={AppData.id} AppData={AppData}></AllApp>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllApps;
