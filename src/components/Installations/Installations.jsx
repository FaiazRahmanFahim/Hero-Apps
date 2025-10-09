import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import { checkDataFromLS, removeAppFromLS } from "../../utility/AddToLS";
import InstalledApp from "./InstalledApp/InstalledApp";

const Installations = () => {
  const [installedApp, setInstalledApp] = useState([]);
  const [isSort, setIsSort] = useState("");
  const [loading, setLoading] = useState(true);
  const getData = useLoaderData();
  //console.log(getData);

  useEffect(() => {
    setTimeout(() => {
      const checkAppIsInLS = checkDataFromLS();
      const convertID = checkAppIsInLS.map((id) => parseInt(id));
      const filterData = getData.filter((data) => convertID.includes(data.id));
      setInstalledApp(filterData);
      setLoading(false);
    }, 500);
  }, [getData]);

  const handleRemove = (appId) => {
    removeAppFromLS(appId);
    const filterData = installedApp.filter((data) => data.id !== appId);
    setInstalledApp(filterData);
  };

  const handleSort = (type) => {
    setIsSort(type);
    setLoading(true);

    setTimeout(() => {
      let sortedData = [];
      if (type === "lowToHigh") {
        sortedData = [...installedApp].sort(
          (a, b) => a.downloads - b.downloads
        );
      } else if (type === "highToLow") {
        sortedData = [...installedApp].sort(
          (a, b) => b.downloads - a.downloads
        );
      }
      setInstalledApp(sortedData);
      setLoading(false);
    }, 500);
  };

  return (
    <div>
      <div className="my-10 space-y-5">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Your Installed Apps
        </h2>
        <p className="text-base md:text-xl text-gray-400 text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="flex justify-between items-center gap-5 flex-col md:flex-row px-20">
          <h3 className="flex-1 text-lg md:text-2xl font-semibold">
            <span>({installedApp.length})</span> Apps Found
          </h3>
          <fieldset className="fieldset">
            <select
              onChange={(Event) => handleSort(Event.target.value)}
              className="select bg-gray-100 border-2 border-gray-200"
            >
              <option value="">Sort By Size {isSort ? isSort : ""}</option>
              <option value="lowToHigh">Low-High</option>
              <option value="highToLow">High-Low</option>
            </select>
          </fieldset>
        </div>
        {/* <div className="grid grid-flow-row md:px-10 xl:px-20 gap-5">
          {installedApp.map((D) => (
            <InstalledApp
              key={D.id}
              D={D}
              handleRemove={handleRemove}
            ></InstalledApp>
          ))}
        </div> */}
        {loading ? (
          <div className="text-center py-10">
            <span className="loading loading-infinity loading-xl text-primary"></span>
          </div>
        ) : (
          <div className="grid grid-flow-row md:px-10 xl:px-20 gap-5">
            {installedApp.map((D) => (
              <InstalledApp
                key={D.id}
                D={D}
                handleRemove={handleRemove}
              ></InstalledApp>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Installations;
