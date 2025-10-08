import React from "react";
import { Download, Star } from "lucide-react";
import { Link } from "react-router";

const AllApp = ({ AppData }) => {
  //console.log(AppData);

  return (
    <Link to={`/AllAppDetails/${AppData.id}`}>
      <div className="p-5 shadow-sm rounded-xl space-y-3">
        <div className="bg-[#13131310] py-10 flex items-center justify-center rounded-xl">
          <img
            className="w-32 h-48 contain-content"
            src={AppData.image}
            alt="Book Cover"
          />
        </div>
        <h3 className="font-semibold text-xl">{AppData.title}</h3>
        <div className="flex justify-between items-center text-base font-semibold">
          <h2 className="badge text-green-500 bg-gray-200 border-none flex items-center">
            <Download size={16} />
            {(AppData.downloads / 1000000).toFixed(1)} M
          </h2>
          <div className="badge flex items-center text-orange-500 bg-orange-200 border-none">
            <Star size={16} />
            <h2>{AppData.ratingAvg}</h2>
            <h2></h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllApp;
