import DownloadIcon from '@/assets/icons/DownloadIcon'
import Image from 'next/image'
import React from 'react'
import logo from "../../../../assets/images/logo.png";


const InstallHeader = () => {
  return (
    <>
      <header className="flex mb-14 justify-between w-full gap-6 flex-wrap items-center">
        <div className="flex gap-[20px]">
          <div className="">
            <Image src={logo} alt="Logo" width={54} height={54} />
          </div>
          <div className="flex flex-col justify-between gap-1">
            <h3 className="text-[28px]">ASKPPL App</h3>
            <span>askppl.com</span>
          </div>
        </div>

        <button className="flex gap-2 w-[300px] rounded-2xl  justify-center items-center px-[16px] bg-white py-[15px] sm:py-[18px] ">
          <span>
            {" "}
            <DownloadIcon />
          </span>
          <span className="text-lg font-bold  text-black">Download app</span>
        </button>
      </header>
    </>
  )
}

export default InstallHeader
