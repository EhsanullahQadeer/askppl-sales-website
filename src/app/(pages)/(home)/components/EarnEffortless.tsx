import Image from "next/image";
import gradient from "../../../../assets/images/earn-followers-gradient.png";

const EarnEffortless = () => {
  return (
    <div className="flex-1 lg:p-[42px] p-5 rounded-[20px] bg-vanishing-light-gradient flex flex-col justify-between">
      <div>
        <h4 className="text-lg sm:text-3xl font-medium tracking-[-0.36px]">
          Earn money effortlessly
        </h4>
        <p className="mt-2.5 sm:text-lg text-sm tracking-normal text-softWhite font-medium xl:w-2/3 font-neueMontreal">
          Set your own rates for Q&A packs, so every question asked supports
          your brand. You decide how much each question is worth and can create
          custom offers for your followers.
        </p>
      </div>

      <div className="mt-8 sm:mt-10">
        <Image
          className="w-full h-full object-cover"
          src={gradient}
          alt="user"
        />
      </div>
    </div>
  );
};

export default EarnEffortless;
