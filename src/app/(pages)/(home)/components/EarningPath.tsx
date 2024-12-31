"use client";
import React from "react";

import SmallEarnPath from "./SmallEarnPath";
import LargeEarnPath from "./LargeEarnPath";
import useWindowSize from "@/hooks/useWindowSize";

const EarningPath = () => {
  const { isSm } = useWindowSize();
  return (
    <div className="sm:mx-6" id="earning-path-sec">
      <div className="max-w-screen-3xl mx-auto">
        <div className="sm:px-10 sm:bg-dim-horizon-gradient rounded-3xl">
          <div className="h-[100vh] relative">
            <div className="sticky  top-0 z-20 h-screen flex justify-center items-center">
              <div className="absolute top-0 h-screen w-full">
                <div className="flex justify-center flex-col relative h-screen w-full overflow-hidden">
                  <h2 className="page-heading !text-[20px] sm:!text-4xl  mt-20  sm:mt-3">
                    Your path to earning <br /> with ASKPPL
                  </h2>
                  {isSm ? <SmallEarnPath /> : <LargeEarnPath />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningPath;
