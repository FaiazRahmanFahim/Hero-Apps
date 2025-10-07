import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { House } from "lucide-react";
import { Apple } from "lucide-react";
import { HardDriveDownload } from "lucide-react";
import { Github } from "lucide-react";

const Navbar = () => {
  const list = (
    <>
      <li>
        <NavLink
          to="/"
          // "flex gap-0.5 items-center text-base font-medium"
          className={({ isActive }) =>
            `flex gap-0.5 items-center text-base font-medium 
            ${isActive ? "underline text-indigo-600" : ""}`
          }
        >
          <House size={18} />
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Apps"
          className={({ isActive }) =>
            `flex gap-0.5 items-center text-base font-medium 
            ${isActive ? "underline text-indigo-600" : ""}`
          }
        >
          <Apple size={18} />
          <span>Apps</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/Installation"
          className={({ isActive }) =>
            `flex gap-0.5 items-center text-base font-medium 
            ${isActive ? "underline text-indigo-600" : ""}`
          }
        >
          <HardDriveDownload size={18} />
          <span>Installation</span>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar mx-auto shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm bg-white dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {list}
          </ul>
        </div>
        <div className="items-center hidden md:flex">
          <Link to="/" className="flex gap-1 items-center">
            <img className="w-10 h-10" src={logo} alt="" />
            <span className="text-base font-bold text-[#9f62f2]">HERO.IO</span>
          </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu-horizontal px-1 space-x-6">{list}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/FaiazRahmanFahim?tab=repositories"
          className="btn bg-gradient-to-br from-[#6732e4] to-[#9f62f2] border-none"
        >
          <Github />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
