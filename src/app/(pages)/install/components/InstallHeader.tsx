import DownloadIcon from "@/assets/icons/DownloadIcon";
import Image from "next/image";
import React from "react";
import logo from "../../../../assets/images/logo.svg";

const InstallHeader = () => {
  return (
    <>
      <header className="flex mb-8 sm:mb-14 justify-between w-full gap-10 flex-wrap items-center">
        <div className="flex gap-5">
          <div>
            <Image src={logo} alt="Logo" width={54} height={54} />
          </div>
          <div className="flex flex-col justify-between gap-1">
            <h3 className="text-[28px] font-medium">ASKPPL App</h3>
            <span className="text-hazyPearl font-neueMontreal">askppl.com</span>
          </div>
        </div>

        <button className="flex gap-2 w-full md:w-[300px] rounded-2xl justify-center items-center px-4 bg-white py-[15px] sm:py-[18px] text-dark">
          <span>
            <DownloadIcon />
          </span>
          <span className="text-lg font-bold">Download app</span>
        </button>
      </header>
    </>
  );
};

export default InstallHeader;
