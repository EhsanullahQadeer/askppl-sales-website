"use client";

import Image from "next/image";
import LeftIcon from "@/assets/icons/LeftIcon";
import RightIcon from "@/assets/icons/RightIcon";
import VerifiedIcon from "@/assets/icons/VerifiedIcon";
import { sliderItems } from "../data/data";
import Link from "next/link";
import { TstoryId } from "./types";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function StoryCardList() {
  const params = useParams();
  const storyId = params.storyId as TstoryId;

  return (
    <div className="w-full text-white">
      <div className="relative w-full">
        <Swiper
          modules={[Navigation]}
          slidesPerView="auto"
          spaceBetween={16}
          navigation={{
            prevEl: ".button-prev",
            nextEl: ".button-next",
          }}
          className="max-sm:!px-2.5"
        >
          {sliderItems.map((slide) => (
            <SwiperSlide
              key={slide.id}
              style={{ width: "auto" }}
              className="flex-shrink-0"
            >
              <Link href={`/stories/${slide.id}`} passHref>
                <div
                  className={`flex-shrink-0 w-[105px] sm:w-[152px] h-36 sm:h-[186px] flex flex-col items-center justify-between gap-3 sm:gap-5 cursor-pointer rounded-[20px] px-3 py-4 sm:px-2 sm:py-6 transition-all duration-300 border ${
                    (
                      storyId
                        ? storyId == slide.id
                        : sliderItems[0].id === slide.id
                    )
                      ? "bg-glass-white-gradient border-ghostWhite"
                      : "bg-transparent border-etherealWhite"
                  }`}
                >
                  <div className="relative">
                    <Image
                      src={slide.images[0]}
                      alt={slide.title}
                      className="rounded-full aspect-square object-cover w-16 sm:w-[100px] h-16 sm:h-[100px]"
                    />
                    <div className="absolute top-2 sm:top-3 right-0">
                      <VerifiedIcon />
                    </div>
                  </div>
                  <p className="text-center text-sm font-neueMontreal font-medium">
                    {slide.title}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="button-prev absolute -left-10 lg:-left-[50px] top-1/2 -translate-y-1/2 z-10 text-white rounded-full flex items-center justify-center max-sm:hidden">
          <LeftIcon />
        </button>
        <button className="button-next absolute -right-10 lg:-right-[50px] top-1/2 -translate-y-1/2 z-10 text-white rounded-full flex items-center justify-center max-sm:hidden">
          <RightIcon />
        </button>
      </div>
    </div>
  );
}

export default StoryCardList;
