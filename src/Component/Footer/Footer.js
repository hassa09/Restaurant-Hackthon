import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import logo from "../../assets/ciao.png";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-full h-[6rem] px-1 sm:px-4 bg-slate-700">
      {/* Logo */}
      <div className="flex flex-row h-auto w-1/4 sm:w-56 mt-8">
        <div className="h-12 w-12 sm:h-16 sm:w-16 relative">
          <img src={logo} alt="logo" />
        </div>
      </div>
      {/* Built by and copyright */}
      <div className="mt-2 text-center">
        <span className="text-xs sm:text-sm">Built by Ciao!</span>
        <p className="text-[.5rem] sm:text-xs">Copyright &copy;2022</p>
      </div>
      {/* Social Icons*/}
      <div className="flex flex-row h-auto w-1/4 sm:w-56 justify-end mt-2">
        <div className="item w-6 h-6 sm:w-10 sm:h-8 sm:m2">
          <a href="https://www.facebook.com" target="blank">
            <AiFillFacebook className="h-6 w-6 sm:h-8 sm:w-8 rounded-md mr-4 " />
          </a>
        </div>
        <div className="item w-6 h-6 sm:w-10 sm:h-8">
          <a href="https://www.instagram.com" target="blank">
            <AiFillInstagram className="h-6 w-6 sm:h-8 sm:w-8 rounded-md mr-4 " />
          </a>
        </div>
        <div className="item w-6 h-6 sm:w-10 sm:h-8">
          <a href="https://www.twitter.com" target="blank">
            <AiOutlineTwitter className="h-6 w-6 sm:h-8 sm:w-8 mr-2 rounded-md " />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
