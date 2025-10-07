import React from "react";
import errImg from "../../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-2">
      <img src={errImg} alt="" />
      <h1 className="text-5xl font-semibold mb-2">Oops, page not found!</h1>
      <p className="text-gray-600 text-2xl">
        The page you are looking for is not available.
      </p>
      <Link
        to="/"
        className="btn bg-gradient-to-br from-[#6732e4] to-[#9f62f2] border-none
      px-8 mt-4"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default ErrorPage;
