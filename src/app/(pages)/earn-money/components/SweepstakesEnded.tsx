import CoinIcon from "@/assets/icons/CoinIcon";
import DataRangeIcon from "@/assets/icons/DataRangeIcon";
import ProfileMale from "@/assets/icons/ProfileMale";
import QuestionAnswerIconSm from "@/assets/icons/QuestionAnswerIconSm";
import DiscordOutline from "@/assets/icons/DiscordOutline";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import YoutubeIcon from "@/assets/icons/YoutubeIcon";
import LinkedinIcon from "@/assets/icons/LinkedinIcon";
import logo from "../../../../assets/images/logo.png";
import Image from "next/image";

const SweepstakesEnded = () => {
  return (
    <div className="rounded-20 border border-ghostWhite bg-gunMetal mt-5">
      <div
        style={{
          background:
            "linear-gradient(to right, rgba(10, 60, 20, 0.3) , rgba(5, 50, 60, 0.3)",
        }}
        className="flex items-center justify-start gap-2.5 w-full text-white py-5 sm:py-6 px-6 sm:px-8 border-b border-ghostWhite rounded-t-20 bg-center"
      >
        <span>
          <DataRangeIcon />
        </span>

        <span className="text-base sm:text-xl font-medium">Sweepstakes Has Ended</span>
      </div>

      <div
        style={{
          background:
            "linear-gradient(to right, rgba(10, 60, 20, 0.3) , rgba(5, 50, 60, 0.3)",
        }}
        className="p-5 sm:p-8 flex flex-col gap-5 rounded-b-20"
      >
        <div>
          <div className="flex max-sm:flex-col flex-wrap gap-8 justify-between items-start sm:items-center">
            <div className="order-2 sm:order-1">
              <h2 className="text-xl sm:text-5xl">Winnings Answer</h2>
              <p className="font-neueMontreal font-medium text-offWhite text-sm sm:text-base">
                Here’s the winner with the best answer:
              </p>
            </div>

            <div className="order-1 sm:order-2 rounded-full bg-linear-green-fade py-2.5 px-4 flex items-center gap-2 text-dark">
              <CoinIcon />

              <div>
                <h4 className="text-lg sm:text-xl font-bold">$100 Cash Prize</h4>
                <p className="font-neueMontreal text-xs font-normal -mt-0.5">
                  is yours, congratulations!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex gap-3 items-center">
            <div
              className="backdrop-50 text-white rounded-full bg-dim-white-overlay w-10 h-10 flex justify-center items-center"
            >
              <ProfileMale />
            </div>

            <span className="text-lg sm:text-xl font-medium bg-dynamic-green-gradient bg-clip-text text-transparent">
              Patrick Castro
            </span>
          </div>
        </div>

        <div
          className="backdrop-50 p-4 sm:p-8 rounded-2xl rounded-tl-none bg-oblique-glow-overlay"
        >
          <div className="flex gap-2 items-center text-softWhite">
            <span className="w-[18px] h-[18px]">
              <QuestionAnswerIconSm />
            </span>

            <span className="font-neueMontreal text-sm font-normal">
              The Answers
            </span>
          </div>

          <p className="mt-4 sm:mt-5 font-neueMontreal text-lg sm:text-xl font-medium tracking-normal leading-[120%]">
            If I could travel anywhere for free, I’d choose Antarctica. Its
            untouched beauty, vast glaciers, and unique wildlife like penguins
            and seals are awe-inspiring. Experiencing the southern lights and
            the serene isolation would be a once in a lifetime adventure,
            deepening my appreciation for nature and our planet.
          </p>
        </div>

        <div className="flex max-sm:flex-col justify-between items-center gap-6 rounded-2xl bg-dimmedGray border border-ghostWhite p-5 sm:p-8">
          <div className="flex items-center gap-4">
            <div>
              <Image src={logo} alt="logo" width={32} height={32} />
            </div>

            <p className="font-neueMontreal text-xs sm:text-sm tracking-normal text-softWhite max-w-60 flex-1">
              Follow us on social media to stay updated with new questions each
              week!
            </p>
          </div>
          <div className="flex items-center gap-8">
            <div className="cursor-pointer">
              <DiscordOutline />
            </div>
            <div className="cursor-pointer">
              <TwitterIcon />
            </div>
            <div className="cursor-pointer">
              <FacebookIcon />
            </div>
            <div className="cursor-pointer">
              <YoutubeIcon />
            </div>
            <div className="cursor-pointer">
              <LinkedinIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SweepstakesEnded;
