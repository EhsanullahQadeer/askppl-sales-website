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
  const [isInView, setIsInView] = useState(false);
  const [step, setStep] = useState<number>(1);
  const [stopTransition, setStopTransiton] = useState(false);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    if (isInView) {
      intervalId = setInterval(
        () => {
          setScrollProgress((prev) => {
            let value = prev + 25;

            if (value > 100) value = 0;
            if (value === 0) {
              setStopTransiton(true);
              setStep(1);
            } else {
              setStopTransiton(false);
              const stepValue = Math.ceil(value / 25) + 1;
              if (stepValue === 5) {
                setStep(stepValue);
              } else {
                setTimeout(() => {
                  setStep(stepValue);
                }, 2000);
              }
            }

            return value;
          });
        },
        step === 5 ? 2500 : 5500
      );
    } else {
      setScrollProgress(0);
      setStep(1);
    }

    // Cleanup interval when component unmounts
    return () => clearInterval(intervalId);
  }, [isInView, step]);

  const circleRadius = 60;
  const circleCircumference = 2 * Math.PI * circleRadius;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isView = entries.some((entry) => entry.isIntersecting);
        setIsInView(isView);
      },
      { threshold: 0.8 } // Trigger when 50% of the element is in view
    );

    const target = document.getElementById("earning-path-sec");
    if (target) {
      observer.observe(target); // Observe the element
    }

    return () => {
      if (target) observer.unobserve(target); // Cleanup observer
    };
  }, []);

  const curremtStep = Math.min(step, 4);
  return (
    <div className="sm:mx-6" id="earning-path-sec">
      <div className="max-w-screen-3xl mx-auto">
        <div className="sm:px-10 sm:bg-dim-horizon-gradient rounded-3xl">
          <div ref={containerRef} className="h-[100vh] relative">
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
                      {...{
                        circleRadius,
                        circleCircumference,
                        scrollProgress,
                        isInView,
                        stopTransition,
                      }}
                    >
                      <g>
                        <foreignObject x="34" y="33" width="102" height="102">
                          <div className="relative h-full w-full">
                            <div className="absolute inset-0 flex justify-center items-center flex-col">
                              <EarningPathData {...{ step: curremtStep }} />
                            </div>
                          </div>
                        </foreignObject>
                      </g>

                      <foreignObject x="0" y="0" width="100%" height="100%">
                        <div className="relative h-full w-full flex justify-center items-center">
                          <PathEarnCircularRing />
                        </div>
                      </foreignObject>

                      <DynamicStepComponent {...{ step: curremtStep }} />
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
