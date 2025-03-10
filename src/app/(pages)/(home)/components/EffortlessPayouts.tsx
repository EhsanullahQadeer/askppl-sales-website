import Image from "next/image";
import payout from "../../../../assets/images/effortless-payouts-img.svg";

const EffortlessPayouts = () => {
  return (
    <div className="flex-1 rounded-[20px] bg-vanishing-light-gradient flex flex-col justify-between overflow-hidden">
      <div className="px-5 lg:px-8 pt-6 lg:pt-8">
        <h4 className="text-lg sm:text-3xl font-medium tracking-[-0.36px]">
          Effortless payouts and earnings
        </h4>
        <p className="mt-2.5 sm:text-lg text-sm tracking-normal text-softWhite font-medium xl:w-2/3 font-neueMontreal">
          Set your own rates for Q&A packs, so every question asked supports
          your brand.
        </p>
      </div>
      <div className="mt-7 lg:mt-[75px]  relative">
        <Image className="w-full h-full object-cover" src={payout} alt="user" />
      </div>
    </div>
  );
};

export default EffortlessPayouts;
