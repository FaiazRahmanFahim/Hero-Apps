import React from "react";
import logo from "../../assets/logo.png";
import { Facebook } from "lucide-react";
import { Youtube } from "lucide-react";
import { Github } from "lucide-react";
import { Star } from "lucide-react";

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-600 justify-items-center">
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-[#9f62f2]">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-[#9f62f2] transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#9f62f2] transition-colors">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#9f62f2] transition-colors">
                Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#9f62f2] transition-colors">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-[#9f62f2]">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-[#9f62f2] transition-colors">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#9f62f2] transition-colors">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#9f62f2] transition-colors">
                Developer Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#9f62f2] transition-colors">
                System Status
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-[#9f62f2]">Legal</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-[#9f62f2] transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#9f62f2] transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#9f62f2] transition-colors">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#9f62f2] transition-colors">
                DMCA
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* App Stats */}
      <div className="bg-gray-800 rounded-lg p-6 mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <h4 className="text-2xl font-bold text-[#9f62f2]">50M+</h4>
            <p className="text-gray-400">Total Downloads</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-[#9f62f2]">1000+</h4>
            <p className="text-gray-400">Apps Available</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-[#9f62f2] flex items-center justify-center gap-1">
              4.8 <Star size={20} fill="currentColor" />
            </h4>
            <p className="text-gray-400">Average Rating</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold text-[#9f62f2]">24/7</h4>
            <p className="text-gray-400">Support Available</p>
          </div>
        </div>
      </div>
      <aside className="text-center pt-6 border-t border-gray-600">
        <p className="font-medium text-gray-400">
          Copyright © {new Date().getFullYear()} HERO.IO - All rights reserved
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Trusted by millions of users worldwide | Secure • Fast • Reliable
        </p>
      </aside>
    </div>
  );
};

export default Footer;
