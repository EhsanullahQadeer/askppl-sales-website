"use client";

import DotsVertical from "@/assets/icons/DotsVertical";
import { QAPurchasedData } from "../lib/data/data";
import TextSquare from "@/assets/icons/TextSquare";
import Image from "next/image";
import jadaImg from "../../../../assets/images/jadaImg.png";
import mobileImg from "../../../../assets/images/mobile-card-img.svg";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

export default function ProfileEngagementSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="mx-5 sm:mx-[60px] lg:mx-[140px] ">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-wrap">
          <div className="flex-1 max-lg:hidden pr-9">
            <div className="w-fit">
              <div className="bg-ironGray px-4 py-5 rounded-[22px] max-w-[310px] mx-auto relative">
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
              </div>

              <div className="flex justify-center items-center rotate-90 h-11">
                <hr className="w-11 border-t border-lightLime" />
              </div>

              <div className="flex relative">
                <div className="bg-ironGray px-4 py-5 rounded-[22px] max-w-[378px]">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2 text-doveGray">
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
                    What’s your trick for looking put- together on days you’re
                    totally exhausted?
                  </div>

                  <div className="mt-6 text-sm text-doveGray leading-[140%] font-normal">
                    How do you manage your time between creating content and
                    your personal life? , or how do you build a community or
                    audience.
                  </div>
                </div>

                <div className="absolute top-1/3 left-full -right-[60%] flex justify-center items-center -z-10">
                  <hr className="w-full border-t border-lightLime" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-[1.3] max-sm:max-h-[400px]">
            <Image
              className="mx-auto object-scale-down h-full w-full"
              src={mobileImg}
              alt="mobileImg"
            />
          </div>

          <div className="relative flex-1  max-sm:hidden  pl-9">
            <div className="absolute inset-0">
              <div className="overflow-x-hidden h-full pl-9">
                <div className="h-[1px] top-[calc(50%-20px)] lg:top-[calc(50%-8px)] -z-10 -left-2 w-1/4 bg-lightLime  absolute"></div>

                <Swiper
                  direction="vertical"
                  slidesPerView={5}
                  centeredSlides={true}
                  centeredSlidesBounds={true}
                  autoplay={{
                    delay: 4000,
                  }}
                  breakpoints={{
                    0: { slidesPerView: 3 },
                    810: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                  }}
                  speed={500}
                  loop={true}
                  modules={[Autoplay]}
                  onSlideChangeTransitionStart={(swiper) => {
                    setActiveIndex(swiper.realIndex);
                  }}
                  className="h-full relative"
                >
                  <div className="absolute inset-0 z-10 flex flex-col">
                    <div className="flex-[40%] bg-fade-dark-top"></div>
                    <div className="flex-[20%]"></div>
                    <div className="flex-[40%] bg-fade-dark-bottom"></div>
                  </div>

                  {QAPurchasedData.map((item, idx) => {
                    const { image, price, description } = item;
                    const isActiveIdx = idx === activeIndex;
                    const isItemNextToActive =
                      idx === (activeIndex + 1) % QAPurchasedData.length ||
                      idx ===
                        (activeIndex - 1 + QAPurchasedData.length) %
                          QAPurchasedData.length;

                    return (
                      <SwiperSlide
                        className={`${
                          !isItemNextToActive &&
                          !isActiveIdx &&
                          (idx > activeIndex
                            ? "-translate-y-[10%]"
                            : "translate-y-[10%]")
                        } `}
                        key={idx}
                      >
                        <div
                          className={`flex origin-center items-center gap-5 rounded-full p-3.5 mx-auto bg-deep-space-gray transition-all duration-500 max-w-[294px] max-h-[96px] ${
                            isActiveIdx
                              ? "scale-100"
                              : isItemNextToActive
                              ? "scale-[0.85]"
                              : `scale-[0.75]`
                          }
                    `}
                        >
                          <div
                            className={`absolute duration-1000 -z-10 inset-0 rounded-full ease-in bg-linear-green-fade ${
                              isActiveIdx
                                ? "opacity-100 transition-opacity"
                                : "opacity-0 transition-none"
                            }`}
                          ></div>
                          <div>
                            <Image
                              width={64}
                              src={image}
                              alt="influencer"
                              className="rounded-full"
                            />
                          </div>
                          <div
                            className={`${
                              isActiveIdx ? "text-dark" : "text-white"
                            }`}
                          >
                            <span className="font-bold text-4xl leading-[31px]">
                              {price}
                            </span>
                            <div className="mt-2.5 font-medium text-xs">
                              {description}
                            </div>
                          </div>

                          {/* <div className={`absolute top-1/2 right-full -left-40 flex justify-center items-center -z-10 ${isActiveIdx ? "opacity-100" : "opacity-0"}`}>
                            <hr className="w-full border-t border-lightLime" />
                          </div> */}
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
