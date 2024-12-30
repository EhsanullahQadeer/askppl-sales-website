import React, { useEffect, useState } from "react";
import { earningPathStepsData } from "../lib/data/data";
import Image from "next/image";
import askppllogo from "@/assets/images/askppl-logo.svg";
import VerticalDots from "@/assets/icons/VerticalDots";
import creator from "@/assets/images/create-img.svg";
import logo from "@/assets/images/logo.svg";
import BagOutline from "@/assets/icons/BagOutline";

const SmallEarnPath = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStep((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const currentStepNumber = step % 8;

  const stepsData = [...earningPathStepsData, ...earningPathStepsData];

  const currentStepContent = stepsData.find(
    (_, index) => index === currentStepNumber
  );
  return (
    <div className="w-full relative ">
      <div className="h-14"></div>
      <div className="h-full translate-y-16  bg-center  bg-[url('/images/dotsLayer.svg')] relative left-1/2 -translate-x-1/2   aspect-[1] w-[170%] rounded-full border-t-2 pt-9  border-dashed border-white/30 flex justify-center items-center ">
        {/* icon */}
        {stepsData.map(({ icon: Icon, title }, index) => {
          const angle = 45 * index;
          const isSelcetedStep = currentStepNumber == index;
          return (
            <div
              key={index}
              style={{
                transform: `rotate(${-angle + step * 45}deg)`,
              }}
              className="absolute top-0 bottom-0 w-screen transition-all duration-[2s] ease-linear"
            >
              <div className="relative h-full w-ful rounded-full">
                <p
                  className={`${
                    isSelcetedStep ? "text-white" : "text-white/50"
                  } max-w-40 -top-[100px] absolute left-1/2 -translate-x-1/2    text-center text-[16px] font-medium mx-auto transition-all duration-500 ease-linear`}
                >
                  {title}
                </p>

                <div
                  className={`${
                    isSelcetedStep
                      ? " border-lightLime bg-oliveGray"
                      : "bg-raisinBlack border-transparent"
                  }  border-2  absolute  -top-7 left-1/2 -translate-x-1/2  z-50 rounded-2xl flex justify-center items-center bg-raisinBlack h-14 w-14 transition-all duration-500 ease-linear`}
                >
                  {Icon && (
                    <Icon
                      className={`${
                        isSelcetedStep ? "opacity-100" : " opacity-50"
                      } h-7 w-7 transition-all duration-500 ease-linear`}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })}

        <div className="pt-3 mt-10 rounded-full w-full aspect-[1] border-t-[10px] border-lightLime">
          <div className="ml-3 flex justify-center rounded-full w-full aspect-[1] border-t-[5px] border-lightLimeLight">
            <div className="w-[100vw]  pt-16 -ml-6 px-10 flex flex-col items-center">
              <p className="text-center max-w-[325px] text-lg font-medium transition-all duration-500 ease-linear">
                {currentStepContent?.title}
              </p>

              <div className="mt-5 px-[14px] bg-vantaBlack w-full max-w-[325px] rounded-2xl">
                <div className="border-b -mx-[14] px-[14px] py-[10px] border-white/10 flex justify-between">
                  <Image src={askppllogo} alt="logo" />
                  <VerticalDots />
                </div>

                <div className="py-4 flex gap-4">
                  <div>
                    <Image src={creator} alt="creator" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-bold">Olivia Reynolds</h2>
                    <div className="flex gap-1 items-center">
                      <span>
                        <BagOutline />
                      </span>
                      <span className="text-xs">Lifestyle Influencer</span>
                    </div>
                    <p className="text-xs">
                      Just your go-to bestie for all things fashion, wellness,
                      and travel
                    </p>
                    <div className="flex gap-1 items-center">
                      <Image src={logo} className="h-3 w-3" alt="logo" />
                      <span className="text-xs">Ask me question!</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="max-w-[325px] mt-4 font-neueMontreal font-medium text-softWhite text-sm leading-tight text-center transition-all duration-500 ease-linear">
                {currentStepContent?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallEarnPath;
