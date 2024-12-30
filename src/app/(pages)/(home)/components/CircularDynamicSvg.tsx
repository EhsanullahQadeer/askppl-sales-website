import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  circleRadius: number;
  circleCircumference: number;
  scrollProgress: number;
  isInView: boolean;
  stopTransition: boolean;
}

const CircularDynamicSvg = (props: IProps) => {
  const {
    children,
    circleRadius,
    circleCircumference,
    scrollProgress,
    isInView,
    stopTransition,
  } = props;
  return (
    <svg
      viewBox="0 0 170 170"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={`M 85,85
m ${circleRadius},0
a ${circleRadius},${circleRadius} 0 1,1 -${2 * circleRadius},0
a ${circleRadius},${circleRadius} 0 1,1 ${2 * circleRadius},0`}
        className="stroke-oliveGray"
        strokeWidth="0.5"
        fill="none"
        strokeDasharray="3 2"
        strokeLinecap="round"
      />
      {/* Progress Path */}
      {/* <path
      
        d={`M 85,85
m ${circleRadius},0
a ${circleRadius},${circleRadius} 0 1,1 -${2 * circleRadius},0
a ${circleRadius},${circleRadius} 0 1,1 ${2 * circleRadius},0`}
        className="stroke-lightLime"
        strokeWidth="0.5"
        fill="none"
        strokeDasharray={circleCircumference}
        strokeDashoffset={
          circleCircumference - (scrollProgress / 100) * circleCircumference
        }
        style={{
          transition: isInView ? "stroke-dashoffset 2.5s, stroke 2.5s" : "",
          
        }}
      /> */}
      <path
        d={`M 85,85
    m 0,${-circleRadius}
    a ${circleRadius},${circleRadius} 0 1,1 0,${2 * circleRadius}
    a ${circleRadius},${circleRadius} 0 1,1 0,-${2 * circleRadius}`}
        className="stroke-lightLime"
        strokeWidth="0.5"
        fill="none"
        strokeDasharray={circleCircumference}
        strokeDashoffset={
          circleCircumference - (scrollProgress / 100) * circleCircumference
        }
        style={{
          transition:
            isInView && !stopTransition
              ? "stroke-dashoffset 2.5s, stroke 2.5s"
              : "",
        }}
      />

      {children}
    </svg>
  );
};

export default CircularDynamicSvg;
