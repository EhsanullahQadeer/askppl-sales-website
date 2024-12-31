import React, { useEffect, useState } from "react";
import CircularDynamicSvg from "./CircularDynamicSvg";
import EarningPathData from "./EarningPathData";
import PathEarnCircularRing from "@/assets/icons/PathEarnCircularRing";
import DynamicStepComponent from "./DynamicStepComponent";

const LargeEarnPath = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [step, setStep] = useState<number>(1);
  const [stopTransition, setStopTransiton] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const isView = entries.some((entry) => entry.isIntersecting);
        if (isView) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 } // Trigger when 50% of the element is in view
    );

    const target = document.getElementById("earning-path-sec");
    if (target) {
      observer.observe(target); // Observe the element
    }

    return () => {
      if (target) observer.unobserve(target); // Cleanup observer
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const intervalId = setInterval(
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

      // Cleanup interval when component unmounts
      return () => clearInterval(intervalId);
    }
  }, [isInView, step]);

  const circleRadius = 60;
  const circleCircumference = 2 * Math.PI * circleRadius;

  const currentStep = Math.min(step, 4);
  return (
    <CircularDynamicSvg
      {...{
        circleRadius,
        circleCircumference,
        scrollProgress,
        stopTransition,
      }}
    >
      <g>
        <foreignObject x="34" y="33" width="102" height="102">
          <div className="relative h-full w-full">
            <div className="absolute inset-0 flex justify-center items-center flex-col">
              <EarningPathData {...{ step: currentStep }} />
            </div>
          </div>
        </foreignObject>
      </g>

      <foreignObject x="0" y="0" width="100%" height="100%">
        <div className="relative h-full w-full flex justify-center items-center">
          <PathEarnCircularRing />
        </div>
      </foreignObject>

      <DynamicStepComponent {...{ step: currentStep }} />
    </CircularDynamicSvg>
  );
};

export default LargeEarnPath;
