import CoinIcon from "@/assets/icons/CoinIcon";
import dotsBackground from "../../../../assets/images/group.png";

const QuestionSection = () => {
  return (
    <div className="relative bg-gunMetal rounded-20">
      <div
        style={{
          backgroundImage: `url(${dotsBackground.src})`,
        }}
        className="p-8 border border-ghostWhite rounded-20 bg-bottom max-sm:pt-20"
      >
        <h4 className="text-lightLime text-base sm:text-xl font-medium">Question</h4>
        <p className="mt-2.5 text-2xl sm:text-5xl font-medium">
          If you could travel anywhere in the world for free, where would you go
          and why?
        </p>
      </div>

      <div className="absolute -top-[30px] max-sm:-top-[57px] right-8 max-sm:right-1/2 max-sm:translate-x-1/2 flex max-sm:flex-col justify-center items-center gap-2 bg-linear-green-fade rounded-2xl sm:rounded-full p-2.5 text-dark">
        <div className="flex gap-2">
          <div>
            <CoinIcon />
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold">$100 Cash Prize</h4>
            <p className="text-xs font-neueMontreal font-normal">
              Just with your asnswers
            </p>
          </div>
        </div>

        <div className="w-full sm:w-[1px] h-[1px] sm:h-10 bg-shadowMist"></div>

        <div className="flex justify-center items-center">
          <div className="w-[60px] flex flex-col justify-center items-center">
            <h3 className="font-bold text-lg sm:text-xl">05</h3>
            <span className="text-xs font-neueMontreal font-normal -mt-1">
              Days
            </span>
          </div>

          <span className="self-start font-normal text-lg sm:text-xl">:</span>

          <div className="w-[60px] flex flex-col justify-center items-center">
            <h3 className="font-bold text-lg sm:text-xl">20</h3>
            <span className="text-xs font-neueMontreal font-normal -mt-1">
              Hours
            </span>
          </div>

          <span className="self-start font-normal text-lg sm:text-xl">:</span>

          <div className="w-[60px] flex flex-col justify-center items-center">
            <h3 className="font-bold text-lg sm:text-xl">12</h3>
            <span className="text-xs font-neueMontreal font-normal -mt-1">
              Minutes
            </span>
          </div>

          <span className="self-start font-normal text-lg sm:text-xl">:</span>

          <div className="w-[60px] flex flex-col justify-center items-center">
            <h3 className="font-bold text-lg sm:text-xl">39</h3>
            <span className="text-xs font-neueMontreal font-normal -mt-1">
              Seconds
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
