import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router";
import AllApp from "./AllApp/AllApp";

const AllApps = () => {
  const allAppsData = useLoaderData();
  const navigate = useNavigate();
  const [searchApp, setSearchApp] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setFilteredApps(allAppsData);
  // }, [allAppsData]);
  useEffect(() => {
    setTimeout(() => {
      setFilteredApps(allAppsData);
      setLoading(false);
    }, 1000);
  }, [allAppsData]);

  const handleSearch = (text) => {
    setSearchApp(text);
    setLoading(true);
    // const filterApp = allAppsData.filter((app) =>
    //   app.title.toLowerCase().includes(text.toLowerCase())
    // );
    // if (filterApp.length === 0) {
    //   navigate("/Apps/notFound");
    // } else {
    //   setFilteredApps(filterApp);
    // }
    setTimeout(() => {
      const filterApp = allAppsData.filter((app) =>
        app.title.toLowerCase().includes(text.toLowerCase())
      );

      if (filterApp.length === 0) {
        navigate("/Apps/notFound");
      } else {
        setFilteredApps(filterApp);
      }

      setLoading(false);
    }, 500);
  };

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
            <span>({filteredApps.length})</span> Apps Found
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
            <input
              value={searchApp}
              onChange={(Event) => handleSearch(Event.target.value)}
              type="search"
              required
              placeholder="Search Apps"
            />
          </label>
        </div>
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-10 xl:px-20 gap-5">
          {filteredApps.map((AppData) => (
            <AllApp key={AppData.id} AppData={AppData}></AllApp>
          ))}
        </div> */}
        {/* App Loader Animation*/}
        {loading ? (
          <div className="text-center py-10">
            <span className="loading loading-infinity loading-xl text-primary"></span>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-10 xl:px-20 gap-5">
            {filteredApps.map((AppData) => (
              <AllApp key={AppData.id} AppData={AppData} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;
