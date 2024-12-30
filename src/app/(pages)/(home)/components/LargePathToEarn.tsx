import React from "react";
import CircularDynamicSvg from "./CircularDynamicSvg";
import EarningPathData from "./EarningPathData";
import PathEarnCircularRing from "@/assets/icons/PathEarnCircularRing";
import DynamicStepComponent from "./DynamicStepComponent";

interface ILargePathToEarnProps {
  circleRadius: number;
  circleCircumference: number;
  scrollProgress: number;
  step: number;
}

const LargePathToEarn: React.FC<ILargePathToEarnProps> = (props) => {
  const { circleRadius, circleCircumference, scrollProgress, step } = props;
  
  return (
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
  );
};

export default LargePathToEarn;
