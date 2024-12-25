"use client";

import React, { useState } from "react";
import HighlightSlider from "./HighlightSlider";
import { formatNumber } from "@/lib/formatNumbers";

const incomeData = [
  { followers: 0, income: 0 },
  { followers: 10000, income: 100 },
  { followers: 20000, income: 150 },
  { followers: 30000, income: 200 },
  { followers: 40000, income: 250 },
  { followers: 50000, income: 300 },
  { followers: 75000, income: 750 },
  { followers: 100000, income: 1000 },
  { followers: 150000, income: 2000 },
  { followers: 250000, income: 3500 },
  { followers: 500000, income: 6000 },
  { followers: 750000, income: 10000 },
  { followers: 1000000, income: 15000 },
  { followers: 5000000, income: 100000 },
];

const FollowersGraph = () => {
  const [sliderValue, setSliderValue] = useState(0);

  // Calculate the active index and current data based on the slider value
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
              <HighlightSlider
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
