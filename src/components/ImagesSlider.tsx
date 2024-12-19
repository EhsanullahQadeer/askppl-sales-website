import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";

type Props = {
  sliderItems: any;
};

const ImagesSlider = (props: Props) => {
  const { sliderItems } = props;
  let swiperInstance: any;
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => (swiperInstance = swiper)}
        modules={[Autoplay, Pagination]}
        className="w-full h-full"
      >
        {sliderItems.map((item: any, idx: number) => {
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
                className="h-full w-full rounded-[20px] border border-ghostWhite object-cover"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ImagesSlider;
