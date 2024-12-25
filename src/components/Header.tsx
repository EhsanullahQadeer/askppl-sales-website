import Image from "next/image";
import React from "react";
import logo from "../assets/images/askppl-logo.png";
import Link from "next/link";
import Menu from "@/assets/icons/Menu"; 
import Close from "@/assets/icons/Close";

const Header = () => {
  return (
    <header className="flex relative justify-between md:text-base text-sm items-center xl:px-[140px] mx-4 py-5">
      <div className="md:w-[120px] w-[100px] h-[20px] md:h-[24px]">
        <Image className="w-full h-full object-cover" src={logo} alt="logo" />
      </div>

      <input type="checkbox" id="menu-toggle" className="hidden peer" />

      <div
        id="menu"
        className="hidden sm:flex z-50 sm:pb-0 pb-4 bg-charcoal-mist-gradient  sm:bg-transparent sm:flex-row flex-col sm:relative absolute left-0 top-[100%] font-medium w-full sm:w-auto sm:items-center sm:gap-6 sm:backdrop-blur-0 backdrop-blur-[60px] text-white sm:text-softWhite peer-checked:flex"
      >
        <Link className="sm:border-none border-b border-froastedWhite sm:py-0 py-4 sm:px-0 px-2 sm:mx-0 mx-2" href="/">Home</Link>
        <Link className="sm:border-none border-b  border-froastedWhite sm:py-0 py-4 sm:px-0 px-2 sm:mx-0 mx-2" href="/stories">Stories</Link>
        <Link className="sm:border-none border-b border-froastedWhite sm:py-0 py-4 sm:px-0 px-2 sm:mx-0 mx-2" href="/blogs">Blog</Link>
        <Link className="sm:border-none border-b border-froastedWhite sm:py-0 py-4 sm:px-0 px-2 sm:mx-0 mx-2" href="/win-prizes">Win Prizes</Link>
        <Link className="sm:border-none  sm:py-0 py-4 sm:px-0 px-2 sm:mx-0 mx-2" href="/contactus">Contact</Link>
      </div>

      <div className="flex items-center gap-3">
        <button className="px-[12px] whitespace-nowrap py-[8px] bg-grey rounded-xl text-white">
          Join wait list
        </button>

        <label
          htmlFor="menu-toggle"
          className="sm:hidden flex cursor-pointer"
        >
          <span className="peer-checked:hidden">
            <Menu />
          </span>
          <span className="peer-checked:block hidden">
            <Close />
          </span>
        </label>
      </div>
    </header>
  );
};

export default Header;
