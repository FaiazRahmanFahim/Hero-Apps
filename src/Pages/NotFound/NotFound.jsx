import React from "react";
import err1Img from "../../assets/App-Error.png";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-2">
      <img src={err1Img} alt="" />
      <h1 className="text-5xl font-semibold mb-2">Oops, page not found!</h1>
      <p className="text-gray-600 text-2xl">
        The page you are looking for is not available.
      </p>
      <Link
        to="/Apps"
        className="btn bg-gradient-to-br from-[#6732e4] to-[#9f62f2] border-none
      px-8 mt-4"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default NotFound;
