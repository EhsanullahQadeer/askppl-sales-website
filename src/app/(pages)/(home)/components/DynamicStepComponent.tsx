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
        width="12"
        height="12"
        className={className}
        rx="4.5"
        ry="4.5"
        strokeWidth="0.5"
      />
    );
  };

  const iconOpacity = (count: number) => (step >= count ? "1" : "0.5");

  const textColor = (count: number) =>
    step >= count ? "text-white" : "text-white/50";
  return (
    <g fill="green">
      <g transform="translate(92, 30)">
        <foreignObject x="-19" y="-31" width="40" height="20">
          <p
            className={`${textColor(
              1
            )} text-[4px] text-center inline-block max-w-24 leading-tight`}
          >
            Sign up and set <br /> up your profile
          </p>
        </foreignObject>

        <RoundedStepSquare count={1} />
        <g transform="translate(-9, -9)">
          <ProfileStepIcon strokeOpacity={iconOpacity(1)} />
        </g>
      </g>

      <g transform="translate(151, 91)">
        <foreignObject x="2" y="-18" width="40" height="20">
          <p
            className={`${textColor(
              2
            )} text-[4px] text-center inline-block max-w-24 leading-tight`}
          >
            Share your <br /> ASKPPL Link
          </p>
        </foreignObject>

        <RoundedStepSquare count={2} />
        <g transform="translate(-9, -9)">
          <ShareStepIcon className={iconOpacity(2)} />
        </g>
      </g>
      <g transform="translate(92, 151)">
        <foreignObject x="-22" y="-5" width="40" height="20">
          <p
            className={`${textColor(
              3
            )} text-[4px] text-center inline-block max-w-24 leading-tight`}
          >
            Receive Questions <br /> and Engage
          </p>
        </foreignObject>

        <RoundedStepSquare count={3} />
        <g transform="translate(-9, -9)">
          <QuestionStepIcon strokeOpacity={iconOpacity(3)} />
        </g>
      </g>

      {/* Left Position */}

      <g transform="translate(31, 91)">
        <foreignObject x="-34" y="-18" width="40" height="20">
          <p
            className={`${textColor(
              4
            )} text-[4px] text-center inline-block max-w-24 leading-tight`}
          >
            Earn Money <br /> Seamlessly
          </p>
        </foreignObject>

        <RoundedStepSquare count={4} />
        <g transform="translate(-9, -9)">
          <MoneyStepIcon strokeOpacity={iconOpacity(4)} />
        </g>
      </g>
    </g>
  );
};

export default DynamicStepComponent;
