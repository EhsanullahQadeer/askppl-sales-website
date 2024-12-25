"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../assets/images/askppl-logo.png";
import Link from "next/link";
import Menu from "@/assets/icons/Menu";
import Close from "@/assets/icons/Close";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [menuOpen]);

  return (
    <div className="flex sticky top-[-2px] z-50 bg-dark justify-between md:text-base text-sm items-center xl:px-[140px] px-4 py-5">
      <div className="md:w-[120px] w-[100px] h-[20px] md:h-[24px]">
        <Image className="w-full h-full object-cover" src={logo} alt="logo" />
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}

      <div
        id="menu"
        className={`overflow-hidden sm:overflow-visible sm:max-h-none flex sm:pb-0 pb-4 bg-charcoal-mist-gradient sm:bg-transparent sm:backdrop-blur-0 backdrop-blur-[60px] sm:flex-row flex-col sm:relative absolute left-0 top-[100%] font-medium w-full sm:w-auto sm:items-center sm:gap-4 md:gap-6 text-white sm:text-softWhite z-50 
          ${
            menuOpen
              ? "max-h-[320px]"
              : "max-h-0"
          } transition-all duration-400 ease-in-out sm:max-h-none sm:overflow-visible`}
      >
        <Link
          className="sm:border-none border-b border-froastedWhite sm:py-0 py-4 sm:px-0 px-2 sm:mx-0 mx-2"
          href="/"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          className="sm:border-none border-b border-froastedWhite sm:py-0 py-4 sm:px-0 px-2 sm:mx-0 mx-2"
          href="/stories"
          onClick={closeMenu}
        >
          Stories
        </Link>
        <Link
          className="sm:border-none border-b border-froastedWhite sm:py-0 py-4 sm:px-0 px-2 sm:mx-0 mx-2"
          href="/blogs"
          onClick={closeMenu}
        >
          Blog
        </Link>
        <Link
          className="sm:border-none border-b border-froastedWhite sm:py-0 py-4 sm:px-0 px-2 sm:mx-0 mx-2"
          href="/win-prizes"
          onClick={closeMenu}
        >
          Win Prizes
        </Link>
        <Link
          className="sm:border-none sm:py-0 py-4 sm:px-0 px-2 sm:mx-0 mx-2"
          href="/contactus"
          onClick={closeMenu}
        >
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <button className="px-[12px] whitespace-nowrap py-[8px] bg-grey rounded-xl text-white">
          Join wait list
        </button>

        <button
          className="sm:hidden flex cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <Close /> : <Menu />}
        </button>
      </div>
    </div>
  );
};

export default Header;
