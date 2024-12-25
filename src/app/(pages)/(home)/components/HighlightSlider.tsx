import { IIncomeData } from "../types/types";
import whiteDots from "../../../../assets/images/white-dots.png";
import GraphIndicator from "@/assets/icons/GraphIndicator";
import { useCallback, useEffect, useState } from "react";
import { formatNumber } from "@/lib/formatNumbers";

interface Props {
  sliderValue: number;
  setSliderValue: (value: number) => void;
  currentData: IIncomeData;
  incomeData: IIncomeData[];
  activeIndex: number;
}

const HighlightSlider = (props: Props) => {
  const { sliderValue, setSliderValue, currentData, incomeData, activeIndex } =
    props;

  const minRange = 0.2;
  const maxRange = 99.8;
  const position = `${(sliderValue * (maxRange - minRange)) / 100 + minRange}%`;

  const calculateHeight = useCallback(() => {
    const isSmallScreen = window.innerWidth < 640;
    return isSmallScreen
      ? `calc(${(sliderValue / 100) * 100}% + 87px)`
      : `calc(${(sliderValue / 100) * 100}% + 107px)`;
  }, [sliderValue]);

  const [verticalLineHeight, setVerticalLineHeight] = useState(
    calculateHeight()
  );

  const handleResize = useCallback(() => {
    setVerticalLineHeight(calculateHeight());
  }, [calculateHeight]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize, calculateHeight]);

  useEffect(() => {
    handleResize();
  }, [handleResize, sliderValue]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSliderValue(Number(e.target.value));

  return (
    <div className="slider-section relative w-full h-[228px] sm:h-[437px] flex justify-center items-center">
      <div className="h-[106px] sm:h-[269px] w-full relative flex flex-col justify-end items-center z-10">
        <div className="diagonal-bg absolute right-0 left-0 top-0 bottom-5 -z-10 bg-cover clip flex">
          <div
            className={`bg-whispering-wind-gradient h-full overflow-hidden`}
            style={{
              width: `${sliderValue}%`,
            }}
          >
            <div
              style={{
                backgroundImage: `url(${whiteDots.src})`,
              }}
              className="h-full w-full bg-cover absolute"
            ></div>
          </div>
          <div
            className={`bg-dark h-full relative z-10`}
            style={{
              width: `${100 - sliderValue}%`,
            }}
          ></div>
        </div>
        <div
          className="text-white absolute bottom-5 -translate-x-1/2 z-10 flex items-center flex-col"
          style={{
            left: position,
            height: verticalLineHeight,
          }}
        >
          <span className="text-softWhite mb-1.5">Earning</span>
          <span className="bg-white rounded-2xl py-1.5 px-2.5 text-dark font-bold mb-4">
            ${formatNumber(currentData.income)}+
          </span>
          <GraphIndicator />
        </div>

        <div
          className={`absolute -bottom-20 -translate-x-1/2 text-center`}
          style={{
            left: position,
          }}
        >
          <span className="bg-grey rounded-2xl py-1.5 px-2.5 text-white font-bold">
            {formatNumber(currentData.followers)}
          </span>
          <p className="mt-1.5 text-softWhite">Followers</p>
        </div>

        <div className="mb-3 h-full w-full flex items-end justify-between relative">
          {incomeData.map((data, index) => {
            const heightPercentage = ((index + 1) / incomeData.length) * 100;
            return (
              <div
                className={`${
                  index <= activeIndex
                    ? "bg-translucentWhite"
                    : "bg-froastedWhite"
                } rounded-[100px] w-1 transition-all duration-300 ease-in`}
                key={data.followers}
                style={{
                  height: `${heightPercentage}%`,
                }}
              ></div>
            );
          })}
        </div>

        <input
          type="range"
          min="0"
          max="100"
          step={0.1}
          value={sliderValue}
          onChange={handleSliderChange}
          className="w-full h-2.5 appearance-none rounded-xl outline-none cursor-pointer relative bg-electric-dreamscape-gradient"
        />
      </div>
    </div>
  );
};

export default HighlightSlider;
