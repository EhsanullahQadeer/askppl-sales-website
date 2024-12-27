"use client";

import React, { useState } from "react";
import { formatNumber } from "@/lib/formatNumbers";
import { incomeData } from "../lib/data/data";
import IncomeSlider from "./IncomeSlider";

const FollowersGraph = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const activeIndex = Math.floor((sliderValue / 100) * (incomeData.length - 1));
  const currentData = incomeData[activeIndex];

  return (
    <>
      <div className="mx-5 sm:mx-[60px] lg:mx-[140px] pt-9 sm:pt-[100px] pb-[30px] sm:pb-[72px]">
        <div className="mx-auto max-w-screen-2xl">
          <div className="max-w-[500px] max-md:mx-auto">
            <h2 className="page-heading md:!text-left">
              Turn your influence into <br /> income with Askppl
            </h2>
          </div>

          <div className="mt-10 md:mt-2 flex flex-col md:flex-row justify-center md:justify-between items-center gap-14 sm:gap-9 md:gap-8">
            <div className="flex flex-row md:flex-col flex-wrap gap-6 md:w-[332px] justify-center">
              <div className="flex flex-col gap-2 w-max">
                <span className="text-[54px] sm:text-[80px] font-light -tracking-[4px] leading-[100%] w-fit pr-1">
                  {formatNumber(currentData.followers)}
                </span>
                <span className="sm:text-xl font-medium text-softWhite font-neueMontreal border-t border-softWhite">
                  Total followers
                </span>
              </div>

              <div className="flex flex-col gap-2 w-max">
                <span className="text-[54px] sm:text-[80px] font-light -tracking-[4px] leading-[100%] w-fit pr-1">
                  ${formatNumber(currentData.income)}+
                </span>
                <span className="sm:text-xl font-medium text-softWhite font-neueMontreal">
                  Your Earning
                </span>
              </div>
            </div>

            <div className="flex-1 max-w-[865px] w-full max-md:px-8">
              <IncomeSlider
                {...{
                  sliderValue,
                  setSliderValue,
                  currentData,
                  incomeData,
                  activeIndex,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FollowersGraph;
