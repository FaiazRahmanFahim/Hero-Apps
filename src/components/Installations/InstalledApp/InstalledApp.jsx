import React from "react";
import { Download, Star } from "lucide-react";

const InstalledApp = ({ D, handleRemove }) => {
  //console.log(D);

  const handleRemoveApp = (ID) => {
    handleRemove(ID);
  };

  return (
    <div className="list w-full xl:w-[1364px] rounded-box shadow-md">
      <li className="list-row flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4">
        {/* Left: Image + Info */}
        <div className="flex gap-3 w-full sm:w-auto">
          <img
            className="w-16 h-16 rounded-box bg-gray-400 flex-shrink-0"
            src={D.image}
            alt=""
          />
          <div className="flex flex-col gap-2.5">
            <h2 className="font-semibold text-xl">{D.title}</h2>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
              <h2 className="text-green-500 font-semibold flex items-center gap-1">
                <Download size={16} />
                {(D.downloads / 1000000).toFixed(1)}M
              </h2>
              <h2 className="flex items-center font-semibold text-orange-500 gap-1">
                <Star size={16} />
                {D.ratingAvg}
              </h2>
              <h2 className="font-semibold text-gray-500">{D.size}M</h2>
            </div>
          </div>
        </div>
        <button
          onClick={() => handleRemoveApp(D.id)}
          className="btn bg-[#00d390] border-none w-full sm:w-auto"
        >
          Uninstall
        </button>
      </li>
    </div>
  );
};

export default InstalledApp;
