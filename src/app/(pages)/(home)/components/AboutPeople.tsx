import Image from "next/image";
import React from "react";
import network from "../../../../assets/images/About-people.svg";

const AboutPeople = () => {
  return (
    <>
      <div className="rounded-20 bg-forest flex flex-col justify-between">
        <div className="lg:px-[42px] px-5 lg:pb-12 pb-10 lg:pt-[42px] pt-6">
          <h4 className="text-lg sm:text-3xl font-medium tracking-[-0.36px]">
            We&apos;re all about people
          </h4>
          <p className="mt-2.5 sm:text-lg text-sm tracking-normal text-softWhite font-medium xl:w-2/3 font-neueMontreal">
            Whether it’s learning from others or gaining inspiration, ASKPPL is
            for people who want real answers from people.
          </p>
        </div>

        <div>
          <Image
            className="w-full h-full object-cover"
            src={network}
            alt="user"
          />
        </div>
      </div>
    </>
  );
};

export default AboutPeople;
