import React from "react";
import logo from "../assets/images/askppl-logo.svg";
import Image from "next/image";
import DiscordOutline from "@/assets/icons/DiscordOutline";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import YoutubeIcon from "@/assets/icons/YoutubeIcon";
import LinkedinIcon from "@/assets/icons/LinkedinIcon";
import dotsBackground from "../assets/images/group.png";
import Link from "next/link";
import FacebookCircleIcon from "@/assets/icons/FacebookCircleIcon";

const InfluenceSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${dotsBackground.src})`,
      }}
      className="px-5 sm:px-[60px] lg:px-[140px] bg-cover bg-bottom"
    >
      <div className="py-[30px] sm:py-[100px] mx-auto max-w-screen-2xl">
        <div className="flex flex-col items-center">
          <div className="max-w-[734px] flex flex-col items-center sm:gap-8 gap-[66px]">
            <div className="px-6">
              <h2 className="text-3xl sm:text-5xl font-medium text-center">
                Unlock the power of your influence
              </h2>
              <div className="max-w-[658px]">
                <p className="mt-3 font-neueMontreal font-normal text-softWhite text-sm sm:text-lg text-center">
                  After setting up your profile, share your personalized ASKPPL
                  link with your followers across all platforms.
                </p>
              </div>
            </div>

            <div className="bg-white text-dark p-4 rounded-2xl text-lg font-bold cursor-pointer hover:bg-translucentWhite hover:text-black transition-all">
              Download app
            </div>
          </div>

          <div className="mt-[60px] sm:mt-28 w-full p-6 sm:p-8 flex max-md:flex-col justify-between items-center gap-6 rounded-2xl border border-ghostWhite bg-dark shadow-gray-box-shadow">
            <div className="flex max-sm:flex-col justify-center gap-3 sm:gap-6 items-center">
              <div>
                <Image src={logo} alt="logo" width={121} />
              </div>

              <div className="w-[1px] bg-etherealWhite h-[26.5px] max-sm:hidden"></div>

              <div className="text-sm sm:text-lg font-neueMontreal font-normal flex-1">
                For all the questions AI can’t answer
              </div>
            </div>

            <div className="flex items-center gap-8">
              <Link
                href=""
                className="text-milkyFog hover:text-translucentWhite transition-colors"
              >
                <DiscordOutline />
              </Link>

              <Link
                href=""
                className="text-milkyFog hover:text-translucentWhite transition-colors"
              >
                <TwitterIcon />
              </Link>
              <Link
                href=""
                className="text-milkyFog hover:text-translucentWhite transition-colors"
              >
                <FacebookCircleIcon />
              </Link>
              <Link
                href=""
                className="text-milkyFog hover:text-translucentWhite transition-colors"
              >
                <YoutubeIcon />
              </Link>
              <Link
                href=""
                className="text-milkyFog hover:text-translucentWhite transition-colors"
              >
                <LinkedinIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfluenceSection;
