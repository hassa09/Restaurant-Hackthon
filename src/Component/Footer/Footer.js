import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import logo from "../../assets/Images/ciao.png";


const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-full h-[6rem] px-1 sm:px-4 bg-slate-700 absolute inset-x-0 bottom-0">
      {/* Logo */}
      <div className="flex flex-row w-1/4 h-auto mt-8 sm:w-56">
        <div className="relative w-12 h-12 sm:h-16 sm:w-16">
          <img src={logo} alt="logo" />
        </div>
      </div>
      {/* Built by and copyright */}
      <div className="mt-2 text-center bg-white">
        <span className="text-xs bg-white sm:text-sm">Built by Ciao!</span>
        <p className="text-[.5rem] sm:text-xs bg-white">Copyright &copy;2022</p>
      </div>
      {/* Social Icons*/}
      <div className="flex flex-row justify-end w-1/4 h-auto mt-2 bg-white sm:w-56">
        <div className="w-6 h-6 bg-white item sm:w-10 sm:h-8 sm:m2">
          <a href="https://www.facebook.com" target="blank">
            <AiFillFacebook className="w-6 h-6 mr-4 bg-white rounded-md sm:h-8 sm:w-8 " />
          </a>
        </div>
        <div className="w-6 h-6 bg-white item sm:w-10 sm:h-8">
          <a href="https://www.instagram.com" target="blank">
            <AiFillInstagram className="w-6 h-6 mr-4 bg-white rounded-md sm:h-8 sm:w-8" />
          </a>
        </div>
        <div className="w-6 h-6 bg-white item sm:w-10 sm:h-8">
          <a href="https://www.twitter.com" target="blank">
            <AiOutlineTwitter className="w-6 h-6 mr-2 bg-white rounded-md sm:h-8 sm:w-8 " />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
