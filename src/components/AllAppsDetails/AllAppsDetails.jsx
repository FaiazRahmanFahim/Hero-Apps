import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import startIcon from "../../assets/icon-ratings.png";
import likedIcon from "../../assets/icon-review.png";
import { getDataFromLS, checkDataFromLS } from "../../utility/AddToLS";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const AllAppsDetails = () => {
  const { ID } = useParams();
  const AppID = parseInt(ID);
  //console.log(AppID);
  const AppsData = useLoaderData();
  //console.log(AppsData);
  const findApp = AppsData.find((data) => data.id === AppID);
  //console.log(findApp);
  const ratingsData = findApp.ratings;

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const checkAppIsInLS = checkDataFromLS();
    const convertID = checkAppIsInLS.map((id) => parseInt(id));
    if (convertID.includes(findApp.id)) {
      setIsInstalled(true);
    }
  }, [findApp.id]);

  const handleInstall = (ID) => {
    getDataFromLS(ID);
    setIsInstalled(true);
  };

  const renderBarChart = (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart width={300} height={300} data={ratingsData} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          type="number"
          domain={[0, 12000000]}
          tickCount={15}
          tickFormatter={(value) =>
            value >= 1000000 ? `${value / 1000000}M` : `${value / 1000}K`
          }
        />
        <YAxis dataKey="name" type="category" stroke="#555" />
        {/* Rating labels */}
        <Tooltip />
        <Bar dataKey="count" fill="#ff8811" barSize={25} />
      </BarChart>
    </ResponsiveContainer>
  );
  return (
    <div className="mx-auto my-10  md:px-10 xl:px-20 space-y-5">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="flex p-10 bg-white justify-center items-center rounded-xl shadow">
          <img
            className="w-60 h-60 contain-content"
            src={findApp.image}
            alt=""
          />
        </div>
        <div className="flex-1 space-y-5">
          <div>
            <h2 className="font-bold text-4xl">{findApp.title}</h2>
            <h3 className="text-lg font-bold">
              <span className="text-gray-600">Developed by: </span>
              <span className="text-[#6732e4]">{findApp.companyName}</span>
            </h3>
          </div>
          <hr className="border-t-2 border-solid border-gray-300" />
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 py-2">
            <div className="flex flex-col items-center">
              <img src={downloadIcon} className="w-5 h-5 md:w-10 md:h-10" />
              <h2 className="text-sm font-semibold text-gray-600">Downloads</h2>
              <h2 className="text-lg md:text-2xl font-bold">
                {(findApp.downloads / 1000000).toFixed(1)}M
              </h2>
            </div>
            <div className="flex flex-col items-center">
              <img src={startIcon} className="w-5 h-5 md:w-10 md:h-10" />
              <h2 className="text-sm font-semibold text-gray-600">
                Average Ratings
              </h2>
              <h2 className="text-lg md:text-2xl font-bold">
                {findApp.ratingAvg}
              </h2>
            </div>
            <div className="flex flex-col items-center">
              <img src={likedIcon} className="w-5 h-5 md:w-10 md:h-10" />
              <h2 className="text-sm font-semibold text-gray-600">
                Total Reviews
              </h2>
              <h2 className="text-lg md:text-2xl font-bold">
                {(findApp.reviews / 1000).toFixed(1)}K
              </h2>
            </div>
          </div>
          {/* Install Button */}
          <button
            onClick={() => handleInstall(findApp.id)}
            disabled={isInstalled}
            className="btn bg-[#00d390] border-none mt-3 w-full sm:w-auto"
          >
            {isInstalled === true
              ? "Installed"
              : `Install Now (${findApp.size} MB)`}
          </button>
        </div>
      </div>
      <hr className="border-t-2 border-solid border-gray-300" />
      <h3 className="flex flex-col gap-5">
        <span className="text-lg font-bold">Ratings</span>
        <span>{renderBarChart}</span>
      </h3>
      <hr className="border-t-2 border-solid border-gray-300" />
      <h3>
        <span className="text-lg font-bold">Description </span>
        <p className="text-base text-gray-500 text-justify mt-5">
          {findApp.description}
        </p>
      </h3>
    </div>
  );
};

export default AllAppsDetails;
