"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BlogCard from "../../blogs/components/BlogCard";
import { blogsData } from "../../blogs/data/data";
import RightIcon from "@/assets/icons/RightIcon";
import LeftIcon from "@/assets/icons/LeftIcon";
import "swiper/css";
import "swiper/css/navigation";

const CreatorsThrive = () => {
  return (
    <div className="mx-5 sm:mx-[60px] lg:mx-[140px] pt-9 sm:pt-[100px]">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex items-end justify-between gap-2 mb-[50px]">
          <div className="max-w-[592px] max-md:mx-auto">
            <h2 className="page-heading sm:!text-left">
              How creators & influencers <br /> thrive using ASKPPL
            </h2>
          </div>

          <div className="flex gap-5 items-center max-sm:hidden">
            <button
              className={`blogs-prev-btn backdrop-60 rounded-full flex items-center justify-center p-2.5 border border-ghostWhite text-white cursor-pointer bg-whisper-white-gradient`}
            >
              <LeftIcon />
            </button>

            <button
              className={`blogs-next-btn backdrop-60 rounded-full flex items-center justify-center p-2.5 border border-ghostWhite text-white cursor-pointer bg-whisper-white-gradient`}
            >
              <RightIcon />
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".blogs-prev-btn",
            nextEl: ".blogs-next-btn",
          }}
          loop={true}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            810: { slidesPerView: 2 },
            1320: { slidesPerView: 3 },
          }}
        >
          {blogsData.map((blog, index) => (
            <SwiperSlide key={index}>
              <Link href={`/blog/${blog.id}`} key={blog.id}>
                <BlogCard blog={blog} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex gap-5 items-center justify-center mt-8 sm:hidden">
          <button
            className={`blogs-prev-btn backdrop-60 rounded-full flex items-center justify-center p-2.5 border border-ghostWhite text-white cursor-pointer bg-whisper-white-gradient`}
          >
            <LeftIcon />
          </button>

          <button
            className={`blogs-next-btn backdrop-60 rounded-full flex items-center justify-center p-2.5 border border-ghostWhite text-white cursor-pointer bg-whisper-white-gradient`}
          >
            <RightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorsThrive;
