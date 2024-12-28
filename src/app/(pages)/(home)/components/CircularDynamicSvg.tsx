import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  circleRadius: number;
  circleCircumference: number;
  scrollProgress: number;
}

const CircularDynamicSvg = (props: IProps) => {
  const { children, circleRadius, circleCircumference, scrollProgress } = props;
  return (
    <svg
      className=""
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={`M 100,100
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
      <path
        d={`M 100,100
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
          transition: "stroke-dashoffset 0.3s, stroke 0.3s",
        }}
      />
      {children}
    </svg>
  );
};

export default CircularDynamicSvg;
