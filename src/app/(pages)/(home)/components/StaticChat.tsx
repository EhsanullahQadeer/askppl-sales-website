import React from 'react'
import male from "../../../../assets/images/profile-male.png";
import female from "../../../../assets/images/female.png";

import Image from 'next/image';
import VerifiedIcon from '@/assets/icons/VerifiedIcon';

const StaticChat = () => {
  return (
    <>
         <div className="lg:p-[42px] p-5 flex flex-col gap-2 rounded-[20px] bg-influences-Color">
              <h4 className="text-3xl font-medium sm:w-[55%]">
                Engage your audience like never before
              </h4>
              <p className="sm:text-lg text-sm text-hazyPearl font-medium sm:w-2/3 ">
                Share your expertise, experiences, or unique insights answers
                that can be kept private or made public for everyone to see.
              </p>
              <div className="lg:mt-14  mt-7 flex gap-5">
                <div className="">
                  <div className=" flex bg-[#3f3f3f] px-[8px]  md:w-[72px] md:h-[72px] w-[44px] h-[44px] justify-center items-center rounded-full">
                    <Image
                      className="rounded-full w-full h-full object-contain"
                      src={male}
                      alt="user"
                    />
                  </div>
                </div>
                <p className="md:py-5 text-hazyPearl  md:px-[26px] p-3 border mr-2 border-mistWhite md:rounded-r-[28px]  md:rounded-es-[28px] rounded-r-[17px]  rounded-es-[17px] bg-oblique-glow-overlay text-xs sm:text-xl">
                  What was your toughest challenge building your business and
                  how did you find strength to overcome it
                </p>
              </div>
              <div className="lg:mt-14  mt-4 flex gap-5">
                <p className="md:py-5 text-hazyPearl md:px-[26px] p-3 border ml-2 border-mistWhite   md:rounded-b-[28px] md:rounded-es-[28px] md:rounded-ss-[28px] rounded-ss-[17px] rounded-b-[17px] rounded-es-[17px]  bg-oblique-glow-overlay text-xs sm:text-xl">
                  Staying focused when things weren’t going as planned lol. I
                  found strength by remembering why I started in the first place
                  which was ...{" "}
                </p>
                <div className="">
                  <div className="relative flex   md:w-[72px] md:h-[72px] w-[44px] h-[44px] justify-center items-center rounded-full">
                    <Image
                      className="rounded-full w-full h-full object-contain"
                      src={female}
                      alt="user"
                    />
                     <div className="absolute top-0 right-0 ">
                      <VerifiedIcon  />
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default StaticChat
