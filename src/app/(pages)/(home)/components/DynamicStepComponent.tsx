import React from "react";

import ShareStepIcon from "@/assets/icons/ShareStepIcon";
import QuestionStepIcon from "@/assets/icons/QuestionStepIcon";
import MoneyStepIcon from "@/assets/icons/MoneyStepIcon";
import ProfileStepIcon from "@/assets/icons/ProfileStepIcon";

interface Iprops {
  step: number;
}
const DynamicStepComponent = (props: Iprops) => {
  const { step } = props;

  const RoundedStepSquare = ({ count }: { count: number }) => {
    const className =
      step >= count ? "fill-oliveGray stroke-lightLime" : "fill-raisinBlack";
    return (
      <rect
        x="-12"
        y="-12"
        width="20"
        height="20"
        className={className}
        rx="7"
        ry="7"
        strokeWidth="0.5"
      />
    );
  };

  const iconOpacity = (count: number) => (step >= count ? "1" : "0.5");

  const textColor = (count: number) =>
    step >= count ? "text-white" : "text-white/50";
  return (
    <g fill="green">
      <g transform="translate(160, 100)">
        <foreignObject x="16" y="-10" width="98" height="48">
          <p
            className={`${textColor(
              1
            )} text-[7px] text-center inline-block max-w-24 leading-tight`}
          >
            Share your <br /> ASKPPL Link
          </p>
        </foreignObject>

        <RoundedStepSquare count={1} />
        <g transform="translate(-8, -8)">
          <ShareStepIcon className={iconOpacity(1)} />
        </g>
      </g>
      <g transform="translate(100, 160)">
        <foreignObject x="-27" y="16" width="98" height="48">
          <p
            className={`${textColor(
              2
            )} text-[7px] text-center inline-block max-w-24 leading-tight`}
          >
            Receive Questions <br /> and Engage
          </p>
        </foreignObject>

        <RoundedStepSquare count={2} />
        <g transform="translate(-8, -8)">
          <QuestionStepIcon strokeOpacity={iconOpacity(2)} />
        </g>
      </g>

      {/* Left Position */}

      <g transform="translate(40, 100)">
        <foreignObject x="-52" y="-9" width="98" height="48">
          <p
            className={`${textColor(
              3
            )} text-[7px] text-center inline-block max-w-24 leading-tight`}
          >
            Earn Money <br /> Seamlessly
          </p>
        </foreignObject>

        <RoundedStepSquare count={3} />
        <g transform="translate(-8, -8)">
          <MoneyStepIcon strokeOpacity={iconOpacity(3)} />
        </g>
      </g>
      <g transform="translate(100, 40)">
        <foreignObject x="-24" y="-34" width="98" height="48">
          <p
            className={`${textColor(
              4
            )} text-[7px] text-center inline-block max-w-24 leading-tight`}
          >
            Sign up and set <br /> up your profile
          </p>
        </foreignObject>

        <RoundedStepSquare count={4} />
        <g transform="translate(-8, -8)">
          <ProfileStepIcon strokeOpacity={iconOpacity(4)} />
        </g>
      </g>
    </g>
  );
};

export default DynamicStepComponent;
