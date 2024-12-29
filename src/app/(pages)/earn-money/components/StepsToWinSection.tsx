import DollarCircleIcon from "@/assets/icons/DollarCircleIcon";
import UserFollowIcon from "@/assets/icons/UserFollowIcon";
import VerifyFilledIcon from "@/assets/icons/VerifyFilledIcon";
import React from "react";

const stepsArr = [
  {
    title: "Follow for updates",
    desc: "Follow our social accounts to receive updates each week when we post a new question",
    icon: <UserFollowIcon />,
  },
  {
    title: "Sign up & verify",
    desc: "Sign up for ASKPPL. You must verify you are a human in order to be able to enter giveaways",
    icon: <VerifyFilledIcon />,
  },
  {
    title: "Submit to win",
    desc: "Submit your answer for a chance to win incredible prizes.",
    icon: <DollarCircleIcon />,
  },
];

const StepsToWinSection = () => {
  return (
    <div>
      <div className="max-w-[560px] mx-auto max-sm:px-9">
        <h1 className="text-3xl sm:text-6xl text-center font-medium">
          How to win
        </h1>
      </div>

      <div className="mt-10 sm:mt-[60px] flex flex-wrap justify-center items-stretch gap-5">
        {stepsArr.map((step, idx) => {
          const { icon, title, desc } = step;

          return (
            <div
              key={title + idx}
              className="backdrop-60 p-5 sm:p-8 flex flex-col gap-8 sm:gap-[58px] rounded-20 border border-ghostWhite bg-transparent-white-haze flex-1 min-w-full sm:min-w-80"
            >
              <div className="w-[60px] h-[60] sm:w-20 sm:h-20 p-[18px] flex justify-center items-center rounded-full bg-linear-black-fade text-lightLime shadow-faint-greenish-shadow backdrop-16">
                {icon}
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-2xl sm:text-3xl font-medium">{title}</h3>
                <p className="text-base sm:text-lg text-softWhite font-neueMontreal font-medium">
                  {desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepsToWinSection;
