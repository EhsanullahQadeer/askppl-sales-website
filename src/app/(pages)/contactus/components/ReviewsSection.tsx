import Image from "next/image";
import creator from "../../../../assets/images/installing.png";
import React from "react";
import LeftIcon from "@/assets/icons/LeftIcon";
import RightIcon from "@/assets/icons/RightIcon";

const ReviewsSection = () => {
  return (
    <div className="m-6 sm:m-8 flex flex-col justify-between gap-40 sm:gap-2">
      <div className="flex justify-between gap-4 items-center">
        <div className="flex items-start gap-2">
          <div className="w-fit">
            <div className=" flex bg-green p-0.5 w-[33px] h-[33px] justify-center items-center rounded-full">
              <Image
                className="rounded-full w-full h-full object-cover"
                src={creator}
                alt="review-maker"
              />
            </div>
          </div>

          <div className="flex flex-col whitespace-nowrap text-sm justify-between">
            <span>Thomas Clark</span>
            <span className="text-white50 font-medium font-neueMontreal text-smokeGray">
              Content Creator
            </span>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="p-1 rounded-full bg-subtle-frost-gradient ">
            <LeftIcon />
          </div>
          <div className="p-1 rounded-full bg-subtle-frost-gradient">
            <RightIcon />
          </div>
        </div>
      </div>
      <div className="text-2xl ">
        <span className="text-smokeGray">
          “Installing ASKPPL on my phone was a game changer.
        </span>{" "}
        <span>
          Now I can respond to questions and connect with my community
          effortlessly. It&apos;s fast, reliable, and feels like a native
          app!&quot;
        </span>
      </div>
    </div>
  );
};

export default ReviewsSection;
