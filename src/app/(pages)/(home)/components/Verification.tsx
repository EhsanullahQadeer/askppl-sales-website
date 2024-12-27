import Image from "next/image";
import React from "react";
// import license from "../../../../assets/images/license.png";
import propertyLicense from "../../../../assets/images/property-license.png";
import identityCard from "../../../../assets/images/identity-card.png";

const Verification = () => {
  return (
    <>
      <div className="rounded-20 bg-vanishing-light-gradient flex flex-col justify-between">
        <div className="lg:px-[42px] px-5">
          <div className="lg:pb-9 pb-8 lg:pt-[42px] pt-6">
            <h4 className="text-lg sm:text-3xl font-medium tracking-[-0.36px]">
              Built-in trust and verification
            </h4>
            <p className="mt-2.5 sm:text-lg text-sm tracking-normal text-softWhite font-medium font-neueMontreal xl:w-2/3">
              In order to join the app as a person who can answer questions you
              must verify you are human!
            </p>
          </div>
        </div>

        <div className="lg:pl-[42px] pl-5 pb-6 lg:pb-[42px] flex gap-7">
          <div className="flex-[298_1_0%]">
            <Image
              className="rounded-[20px] w-full h-full object-cover"
              src={identityCard}
              alt="user"
            />
          </div>

          <div className="flex-[200_1_0%]">
            <Image
              className="w-full h-full object-cover"
              src={propertyLicense}
              alt="user"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Verification;
