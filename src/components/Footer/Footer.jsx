import React from "react";
import logo from "../../assets/logo.png";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-base-200 text-white p-10 space-y-5">
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <img className="w-10 h-10" src={logo} alt="" />
          <a className="text-base font-bold text-[#9f62f2]">HERO.IO</a>
        </div>
        <div className="space-y-2.5">
          <h3 className="text-gray-500 font-bold uppercase">Social</h3>
          <ul className="grid grid-flow-col gap-2 text-[#9f62f2]">
            <li>
              <a>
                <Facebook size={32} />
              </a>
            </li>
            <li>
              <a>
                <Youtube size={32} />
              </a>
            </li>
            <li>
              <a>
                <Github size={32} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
      <aside className="text-center">
        <p className="font-medium">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
    </div>
  );
};

export default Footer;
