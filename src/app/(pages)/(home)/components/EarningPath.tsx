"use client";
import React, { useEffect, useRef, useState } from "react";
import EarningPathData from "./EarningPathData";
import PathEarnCircularRing from "@/assets/icons/PathEarnCircularRing";
import CircularDynamicSvg from "./CircularDynamicSvg";
import DynamicStepComponent from "./DynamicStepComponent";
import useWindowSize from "@/hooks/useWindowSize";
import SmallEarnPath from "./SmallEarnPath";

const EarningPath = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { isSm } = useWindowSize();

  const handleScroll1 = () => {
    const container = containerRef.current;
    if (container) {
      const containerBounds = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (containerBounds.top <= windowHeight && containerBounds.bottom >= 0) {
        const scrollProgress =
          (Math.abs(containerBounds.top) / windowHeight) * 25;
        setScrollProgress(Math.max(0, Math.min(scrollProgress, 100)));
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll1);
    return () => window.removeEventListener("scroll", handleScroll1);
  }, []);

  const circleRadius = 60;
  const circleCircumference = 2 * Math.PI * circleRadius;

  const step = Math.ceil(scrollProgress / 25);
  return (
    <div className="sm:mx-6" id="earning-path-sec">
      <div className="max-w-screen-3xl mx-auto">
        <div className="sm:px-10 sm:bg-dim-horizon-gradient rounded-3xl">
          <div ref={containerRef} className="h-[500vh] relative">
            <div className="sticky  top-0 z-20 h-screen flex justify-center items-center">
              <div className="absolute top-0 h-screen w-full">
                <div className="flex justify-center flex-col relative h-screen w-full overflow-hidden">
                  <h2 className="page-heading !text-[20px] sm:!text-4xl  mt-20  sm:mt-3">
                    Your path to earning <br /> with ASKPPL
                  </h2>
                  {isSm ? (
                    <SmallEarnPath />
                  ) : (
                    <CircularDynamicSvg
                      {...{ circleRadius, circleCircumference, scrollProgress }}
                    >
                      <g>
                        <foreignObject x="34" y="33" width="102" height="102">
                          <div className="relative h-full w-full">
                            <div className="absolute inset-0 flex justify-center items-center flex-col">
                              <EarningPathData step={step} />
                            </div>
                          </div>
                        </foreignObject>
                      </g>

                      <foreignObject x="0" y="0" width="100%" height="100%">
                        <div className="relative h-full w-full flex justify-center items-center">
                          <PathEarnCircularRing />
                        </div>
                      </foreignObject>

                      <DynamicStepComponent {...{ step }} />
                    </CircularDynamicSvg>
                  )}
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
