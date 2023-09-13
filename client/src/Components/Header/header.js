import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import "./header.css";
const Header = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div>
        <h1 onClick={handleNav} className={logo ? "hidden" : "block"}>
          GREEN GUARDIANS
        </h1>
      </div>
      <ul className="hidden md:flex">
        <li className="hover:green-text">Home</li>
        <li className="hover:green-text">About</li>
        <li className="hover:green-text">E-Dumpers</li>
        <li className="hover:green-text">Blog</li>
        <li className="hover:green-text">Services</li>
      </ul>
      <div className="hidden md:flex">
        <BiSearch className="text-green-400 " size={20} />
        <BsPerson className="text-green-400" size={20} />
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%]"
        }
      >
        <ul>
          <h1>GREEN GUARDIANS</h1>
          <li className="border-b hover:green-text">Home</li>
          <li className="border-b hover:green-text">About</li>
          <li className="border-b hover:green-text">E-Dumpers</li>
          <li className="border-b hover:green-text">Blog</li>
          <li className="border-b hover:green-text">Services</li>
          <div className="flex flex-col">
            <button className="my-6 text-green-400 ">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
