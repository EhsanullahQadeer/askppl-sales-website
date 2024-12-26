"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../assets/images/askppl-logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MenuIcon from "@/assets/icons/MenuIcon";
import CancelIcon from "@/assets/icons/CancelIcon";

const menuItems = [
  { label: "Home", link: "" },
  { label: "Stories", link: "stories" },
  { label: "Blog", link: "blogs" },
  { label: "Win Prizes", link: "earn-money" },
  { label: "Contact", link: "contactus" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleResize = () => {
    if (window.innerWidth >= 640) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-dark">
      <div className="mx-5 sm:mx-[60px] lg:mx-[140px]">
        <div className="mx-auto max-w-screen-2xl flex justify-between items-center py-5 md:text-base text-sm">
          <Image
            className="md:w-[120px] w-[100px] object-cover"
            src={logo}
            alt="logo"
          />

          <div
            className={`fixed top-20 inset-0 bg-black bg-opacity-50 transition-all duration-500 ${
              menuOpen
                ? "opacity-100 scale-100 visible"
                : "opacity-0 scale-95 invisible"
            }`}
            onClick={() => setMenuOpen(false)}
          ></div>

          <nav
            className={`${
              menuOpen ? "max-h-[320px] pb-4" : "max-h-0 pb-0"
            } transition-all duration-500 ease-in-out flex sm:flex-row flex-col sm:relative absolute left-0 top-full w-full sm:w-auto z-50 bg-charcoal-mist-gradient sm:bg-transparent sm:backdrop-blur-0 backdrop-blur-[60px] overflow-hidden sm:overflow-visible sm:pb-0 sm:items-center sm:gap-4 md:gap-6 sm:px-0 px-5`}
          >
            {menuItems.map((item, idx) => {
              const { label, link } = item;
              const isLastItem = menuItems.length === idx + 1;
              return (
                <Link
                  key={label}
                  href={`/${link}`}
                  onClick={() => setMenuOpen(false)}
                  className={`sm:border-none border-froastedWhite sm:py-0 py-4 sm:px-0 px-2.5 max-sm:text-white hover:text-white transition ${
                    pathname === `/${link}` ? "text-white" : "text-softWhite"
                  } ${isLastItem ? "border-none" : "border-b"}`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button className="px-3 py-2.5 bg-grey rounded-xl text-white font-medium text-sm sm:text-base whitespace-nowrap">
              Join wait list
            </button>

            <button
              className="sm:hidden flex cursor-pointer w-6 h-6 relative text-white"
              onClick={toggleMenu}
            >
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <CancelIcon />
              </div>
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <MenuIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
