import React from "react";
import female from "../../../../assets/images/female.png";
import Image from "next/image";
import VerifiedIcon from "@/assets/icons/VerifiedIcon";
import ProfileMaleIcon from "@/assets/icons/ProfileMaleIcon";

const StaticChat = () => {
  return (
    <>
      <div className="lg:p-[42px] lg:pb-[55px] p-5 rounded-20 bg-vanishing-light-gradient border border-ghostWhite">
        <h4 className="text-lg sm:text-3xl tracking-[-0.36px] font-medium xl:w-[55%]">
          Engage your audience like never before
        </h4>
        <p className="mt-2.5 sm:text-lg text-sm tracking-normal text-softWhite font-medium xl:w-2/3 font-neueMontreal">
          Share your expertise, experiences, or unique insights answers that can
          be kept private or made public for everyone to see.
        </p>
        <div className="lg:mt-14 mt-12 flex gap-5">
          <div>
            <div className="flex bg-amber md:w-[72px] md:h-[72px] w-[44px] h-[44px] justify-center items-center rounded-full px-2">
              <ProfileMaleIcon />
            </div>
          </div>

          <p className="md:py-5 text-softWhite md:px-[26px] p-3 border mr-2 border-mistWhite md:rounded-[28px] rounded-[18px] !rounded-tl-none bg-oblique-glow-overlay text-xs sm:text-xl font-neueMontreal">
            What was your toughest challenge building your business and how did
            you find strength to overcome it
          </p>
        </div>
        <div className="lg:mt-6 mt-4 flex gap-5">
          <p className="md:py-5 text-softWhite md:px-[26px] p-3 border ml-2 border-mistWhite md:rounded-[28px] rounded-[18px] !rounded-tr-none bg-oblique-glow-overlay text-xs sm:text-xl font-neueMontreal">
            Staying focused when things weren’t going as planned lol. I found
            strength by remembering why I started in the first place which was
            ...
          </p>
          <div>
            <div className="relative flex md:w-[72px] md:h-[72px] w-[44px] h-[44px] justify-center items-center rounded-full">
              <Image
                className="rounded-full w-full h-full object-contain"
                src={female}
                alt="user"
              />
              <div className="absolute top-0 right-0">
                <VerifiedIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaticChat;
