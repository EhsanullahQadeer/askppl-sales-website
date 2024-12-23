/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image, { StaticImageData } from "next/image";

interface CustomCSSProperties extends CSSProperties {
  "--paginationBtnPosition"?: string;
  "--paginationBtnHeight"?: string;
}

type Props = {
  sliderItems: StaticImageData[] | string[];
  isBorderRequired?: boolean;
  paginationBtnPosition?: string;
  paginationBtnHeight?: string;
  backgroundGradient?: string;
  imageObjectFit?: string;
};

const ImagesSlider = (props: Props) => {
  const {
    sliderItems,
    isBorderRequired,
    paginationBtnPosition,
    paginationBtnHeight,
    backgroundGradient,
    imageObjectFit,
  } = props;
  let swiperInstance: any;
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000000,
        }}
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => (swiperInstance = swiper)}
        modules={[Autoplay, Pagination]}
        className="w-full h-full rounded-[20px]"
        style={
          {
            "--paginationBtnPosition": `${paginationBtnPosition}`,
            "--paginationBtnHeight": `${paginationBtnHeight}`,
          } as CustomCSSProperties
        }
      >
        {sliderItems.map((item: StaticImageData | string, idx: number) => {
          return (
            <SwiperSlide
              key={idx}
              className="rounded-[20px]"
              onMouseEnter={() => swiperInstance?.autoplay.stop()}
              onMouseLeave={() => swiperInstance?.autoplay.start()}
            >
              <Image
                src={item}
                alt="selected-item-image"
                className={`h-full w-full rounded-[20px] ${
                  isBorderRequired && "border border-ghostWhite"
                } ${imageObjectFit ? imageObjectFit : "object-cover"}`}
              />

              {backgroundGradient ? (
                <div
                  className={`absolute bottom-0 left-0 h-1/2 w-full rounded-20 z-10 ${backgroundGradient}`}
                ></div>
              ) : (
                <></>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ImagesSlider;
