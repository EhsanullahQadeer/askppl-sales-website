import Image from "next/image";
import React from "react";
import female from "../../../../assets/images/female.png";
import VerticalDots from "@/assets/icons/VerticalDots";

const EffortlessEarns = () => {
  return (
    <>
      <div className="lg:p-[42px] p-5 flex flex-col gap-2 rounded-[20px] bg-glass-frosted-stripe">
        <h4 className="text-3xl font-medium sm:w-[55%]">
          Earn money effortlessly
        </h4>
        <p className="sm:text-lg text-sm text-hazyPearl font-medium sm:w-2/3 ">
          Set your own rates for Q&A packs, so every question asked supports
          your brand. You decide how much each question is worth and can create
          custom offers for your followers.
        </p>
      </div>
      <div className="lg:p-[42px] p-5 flex flex-col gap-2 rounded-[20px] bg-glass-frosted-stripe">
        <h4 className="text-3xl font-medium ">
          Effortless payouts and earnings{" "}
        </h4>
        <p className="sm:text-lg text-sm text-hazyPearl font-medium sm:w-2/3 ">
          Set your own rates for Q&A packs, so every question asked supports
          your brand.
        </p>
      </div>
      <div className="lg:px-[42px] lg:pt-[42px] px-5 pt-5 flex flex-col gap-2 rounded-[20px] bg-glass-frosted-stripe">
        <h4 className="text-3xl font-medium ">
          Dynamic content on your public feed{" "}
        </h4>
        <p className="sm:text-lg text-sm text-hazyPearl font-medium pr-2 ">
          Highlight your top public answers on your profile, giving new
          followers a taste of your personality and expertise. your brand.
        </p>
        <div
          style={{
            background:
              "linear-gradient(137deg, rgba(255, 255, 255, 0.05) -0.05%, rgba(255, 255, 255, 0.08) 101.78%)",
          }}
          className="sm:px-[19px] px-3 mx-4 mt-10 py-[11px] border border-ghostWhite rounded-t-3xl"
        >
            <div className="flex justify-between items-center">
                <div className="flex gap-1 items-center">
                <div className=" flex  w-[33px] h-[33px] justify-center items-center rounded-full">
                    <Image
                      className="rounded-full w-full h-full object-cover"
                      src={female}
                      alt="user"
                    />
                  </div>
                    <span className="ml-1 sm:text-sm text-[10px]">
                        Jada
                    </span>
                    <span className="sm:text-sm text-[10px] text-softWhite  ">•</span>
                <span className="sm:text-sm text-[10px] text-softWhite font-neueMontreal ">
                    17h Ago
                </span>
                </div>
                <VerticalDots />
            </div>
            <p className="text-[21px] mt-6 md:w-[370px]">
            What’s your trick for looking put- together on days you’re totally exhausted?
            </p>
        </div>
      </div>
    </>
  );
};

export default EffortlessEarns;
