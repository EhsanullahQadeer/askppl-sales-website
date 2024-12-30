"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import logo from "../assets/images/askppl-logo.svg";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import MenuIcon from "@/assets/icons/MenuIcon";
import CancelIcon from "@/assets/icons/CancelIcon";

const menuItems = [
  { label: "Home", link: "/" },
  { label: "Stories", link: "stories" },
  { label: "Blog", link: "blogs" },
  { label: "Win Prizes", link: "earn-money" },
  { label: "Contact", link: "contactus" },
];

const sectionIdsToHide: string[] = ["earning-path-sec"];
const hiddenRoutes = ["/install"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shadowOpacity, setShadowOpacity] = useState(0);
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDisableSection, setIsDisableSection] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();

  const fullPath = `${pathname}${queryString ? "?" : ""}${queryString}`;

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleResize = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 640) {
        setMenuOpen(false);
      }
    }
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollUpThreshold = 50; // Threshold to consider scroll as "up"

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setHideHeader(true); // Scroll down: hide header
    } else if (
      currentScrollY < lastScrollY &&
      currentScrollY > scrollUpThreshold &&
      !isDisableSection
    ) {
      setHideHeader(false); // Scroll up: show header
    }

    // Update the last scroll position
    setLastScrollY(currentScrollY);

    const opacity = Math.min(window.scrollY / 2000, 0.6);
    setShadowOpacity(opacity);
  }, [isDisableSection, lastScrollY]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setTimeout(() => {
      window.addEventListener("scroll", handleScroll);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, lastScrollY, pathname]);

  useEffect(() => {
    setHideHeader(false);
    setLastScrollY(0);
    setShadowOpacity(0)
    setIsDisableSection(false)
    const observer = new IntersectionObserver(
      (entries) => {
        const isVisible = entries.some((entry) => entry.isIntersecting);
        setIsDisableSection(isVisible);
        setHideHeader(isVisible);
      },
      {
        root: null, // The root is the viewport (default)
        rootMargin: "0px 0px 200px 0px", // Trigger 200px before entering the viewport
        threshold: 0, // Trigger both before and after intersection (before entering and after leaving the view)
      }
    );

    // Observe specified sections
    sectionIdsToHide.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  if (hiddenRoutes.includes(pathname)) {
    return null;
  }

  return (
    <header
      style={{
        boxShadow: `0 8px 16px rgba(0, 0, 0, ${shadowOpacity})`,
      }}
      className={`sticky top-0 z-50 bg-dark transition-all duration-500 ${
        hideHeader ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-5 sm:mx-[60px] lg:mx-[140px]">
        <div className="mx-auto max-w-screen-2xl flex justify-between items-center py-5 md:text-base text-sm">
          <Link href="/">
            <Image
              className="md:w-[120px] w-[100px] object-cover"
              src={logo}
              alt="logo"
            />
          </Link>

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
                    (fullPath.includes(`/${link}`) && link) || link === pathname
                      ? "text-white"
                      : "text-softWhite"
                  } ${isLastItem ? "border-none" : "border-b"}`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button className="px-3 py-2.5 bg-grey rounded-xl text-white font-medium text-sm sm:text-base whitespace-nowrap hover:bg-gunMetal hover:text-translucentWhite transition-colors">
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
