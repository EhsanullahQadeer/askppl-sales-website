"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import BlogCard from "../../blogs/components/BlogCard";
import { blogsData } from "../../blogs/data/data";
import Back from "@/assets/icons/Back";
import Forward from "@/assets/icons/Forward";

const CreatorsThrive: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className="md:pt-[100px] py-14 md:pb-[72px] px-4 relative xl:px-[140px]">
      <div className="flex items-center mb-12 justify-between md:relative">
        <h2 className="sm:text-6xl text-4xl md:w-[560px] font-medium md:text-left text-center">
          How creators & influencers thrive using ASKPPL
        </h2>
        <div className="absolute md:right-0 md:left-[85%] md-mt-0 mt-6 left-[50%] md:top-5 justify-center right-[50%] bottom-0  flex items-center gap-4">
          <div
            ref={prevRef} 
            className="!static backdrop-blur-[60px] border rounded-full border-ghostWhite p-2 bg-whisper-white-gradient  "
          > <Back /></div>
          <div
            ref={nextRef}
            className=" !static backdrop-blur-[60px] border rounded-full border-ghostWhite p-2 bg-whisper-white-gradient "
          ><Forward /></div>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        onBeforeInit={(swiper) => {
          if (prevRef.current && nextRef.current && swiper.params.navigation) {
            const navigation = swiper.params.navigation as any;
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
          }
        }}
      >
        {blogsData.map((blog, index) => (
          <SwiperSlide key={index}>
            <Link href={`/blog/${blog.id}`} key={blog.id} >
              <BlogCard blog={blog} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CreatorsThrive;
