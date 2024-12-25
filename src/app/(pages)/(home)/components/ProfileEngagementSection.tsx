"use client";

import DotsVertical from "@/assets/icons/DotsVertical";
import { QAPurchasedData } from "../data/data";
import TextSquare from "@/assets/icons/TextSquare";
import Image from "next/image";
import jadaImg from "../../../../assets/images/jadaImg.png";
import mobileImg from "../../../../assets/images/mobile-card-img.png";
import PerpendicularImg from "@/assets/icons/PerpendicularImg";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function ProfileEngagementSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mx-5 sm:mx-[60px]">
      {/* <div className="mx-auto max-w-screen-2xl"></div> */}

      <div className="flex">
        <div>
          <div className="bg-ironGray px-4 py-5 rounded-[22px] w-[310px] ml-9 relative">
            <div className="flex justify-between items-center">
              <span className="text-lightLime text-sm -tracking-[0.42px] leading-[100%]">
                25 Remaining
              </span>

              <div className="text-white">
                <DotsVertical />
              </div>
            </div>

            <div className="mt-5 text-2xl text-white leading-[140%] font-semibold">
              5 Question
            </div>

            <div className="flex items-center gap-1.5 py-1 px-1.5 bg-eclipseGray rounded-lg text-lightPewter w-max mt-2.5 mb-6">
              <div className="text-white">
                <TextSquare />
              </div>
              <span className="text-[15px] font-normal -tracking-[0.15px] leading-[140%]">
                Text Answer
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-white text-xl font-semibold">$25</span>

              <div className="bg-lightLime rounded-xl text-black px-3 py-1.5">
                Pay
              </div>
            </div>

            <div className="absolute top-[75px] left-1/2 -z-10 text-lightLime">
              <PerpendicularImg />
            </div>
          </div>

          <div className="mt-11 bg-ironGray px-4 py-5 rounded-[22px] w-[378px]">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-doveGray ">
                <div>
                  <Image
                    src={jadaImg}
                    height={27}
                    width={27}
                    alt="jade"
                    className="rounded-full"
                  />
                </div>

                <div className="flex gap-1 items-center text-sm">
                  <span className="text-white">Jada</span>
                  <span>•</span>
                  <span>17h Ago</span>
                </div>
              </div>

              <div className="text-white">
                <DotsVertical />
              </div>
            </div>

            <div className="mt-5 text-xl text-white leading-[140%] font-medium">
              What’s your trick for looking put- together on days you’re totally
              exhausted?
            </div>

            <div className="mt-6 text-sm text-doveGray leading-[140%] font-normal">
              How do you manage your time between creating content and your
              personal life? , or how do you build a community or audience.
            </div>
          </div>
        </div>
       
        <div className="ml-[60px]">
          <Image src={mobileImg} alt="mobileImg" />
        </div>

        <div className="ml-3 px-8 w-[400px] h-[594px] overflow-hidden">
          <Swiper
            direction="vertical"
            slidesPerView={5}
            centeredSlides={true}
            centeredSlidesBounds={true}
            spaceBetween={24}
            autoplay={{
              delay: 2000,
            }}
            loop={true}
            modules={[Autoplay]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="h-full"
          >
            {QAPurchasedData.map((item, idx) => {
              const { image, price, description } = item;
              const isActiveIdx = idx === activeIndex;
              const isItemNextToActive =
                idx === (activeIndex + 1) % QAPurchasedData.length ||
                idx ===
                  (activeIndex - 1 + QAPurchasedData.length) %
                    QAPurchasedData.length;

              return (
                <SwiperSlide key={idx} className="!h-auto">
                  <div
                    className={`flex items-center gap-5 rounded-full p-3.5 mx-auto bg-deep-space-gray ${
                      isActiveIdx
                        ? "w-full bg-linear-green-fade"
                        : isItemNextToActive
                        ? "w-11/12"
                        : "w-10/12"
                    }`}
                  >
                    <div>
                      <Image
                        width={isActiveIdx ? 96 : isItemNextToActive ? 86 : 64}
                        src={image}
                        alt={`influencer`}
                        className="rounded-full"
                      />
                    </div>
                    <div
                      className={`${isActiveIdx ? "text-dark" : "text-white"}`}
                    >
                      <span
                        className={`font-bold ${
                          isActiveIdx
                            ? "text-[44px] leading-[46px]"
                            : isItemNextToActive
                            ? "text-[40px] leading-[41px]"
                            : "text-4xl leading-[31px]"
                        }`}
                      >
                        {price}
                      </span>
                      <div
                        className={`mt-2.5 font-medium ${
                          isActiveIdx
                            ? "text-base"
                            : isItemNextToActive
                            ? "text-sm"
                            : "text-xs"
                        }`}
                      >
                        {description}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
