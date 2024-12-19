"use client";

import SearchField from "@/components/SearchField";
import packagesFrame from "../../../assets/images/packages-frame.png";
import profileImagesFrame from "../../../assets/images/profile-images-frame.png";
import Image from "next/image";
import React, { useState } from "react";
import SliderWithSelection from "./components/SliderWithSelection";
import creatorImg1 from "../../../assets/images/creator-img1.png";
import "./styles/styles.css";
import { SlideItem } from "./components/types";
import ImagesSlider from "../../../components/ImagesSlider";

const occupations = [
  "Content creator",
  "Designer",
  "Developer",
  "Photographer",
  "Writer",
  "Editor",
  "Engineer",
  "Teacher",
  "Data Scientist",
];

const sliderItems = [
  { id: 1, title: "Beauty Influencer", images: [creatorImg1, creatorImg1] },
  { id: 2, title: "Business Consultant", images: [creatorImg1, creatorImg1] },
  { id: 3, title: "Educator", images: [creatorImg1, creatorImg1] },
  { id: 4, title: "Content Creator", images: [creatorImg1, creatorImg1] },
  { id: 5, title: "Professional Fitness", images: [creatorImg1, creatorImg1] },
  { id: 6, title: "Gamers", images: [creatorImg1, creatorImg1] },
  { id: 7, title: "Beauty Influencer", images: [creatorImg1, creatorImg1] },
  { id: 8, title: "Business Consultant", images: [creatorImg1, creatorImg1] },
  { id: 9, title: "Educator", images: [creatorImg1, creatorImg1] },
  { id: 10, title: "Content Creator", images: [creatorImg1, creatorImg1] },
  { id: 11, title: "Professional Fitness", images: [creatorImg1, creatorImg1] },
  { id: 12, title: "Gamers", images: [creatorImg1, creatorImg1] },
];

const page = () => {
  const [sliderItemSelected, setSliderItemSelected] =
    useState<SlideItem | null>(sliderItems[0]);

  return (
    <div className="pt-[60px] sm:pt-24">
      <div className="max-w-[610px] mx-auto max-sm:px-9">
        <h1 className="text-3xl sm:text-6xl text-center font-medium">
          Insights, Tips, and Stories to Empower Your Journey
        </h1>
      </div>

      <div className="mt-10 sm:mt-[60px] max-w-[376px] mx-auto max-sm:px-4">
        <SearchField
          {...{ placeholder: "Search by occupation", suggestions: occupations }}
        />
      </div>

      <div className="mt-[60px] sm:mt-[100px] mx-auto max-w-screen-2xl">
        <SliderWithSelection {...{ sliderItems, setSliderItemSelected }} />
      </div>

      <div className="px-5 sm:px-[60px] lg:px-[140px] mx-auto max-w-screen-2xl">
        <div className="my-10 md:my-20 h-[1px] w-full bg-glass-frosted-stripe"></div>
        <div className="flex flex-col md:flex-row gap-10 md:gap-[60px]">
          <div className="md:flex-[376_1_0%] max-md:w-full max-md:h-[412px] relative">
            <div className="w-full md:pb-[123.4%] max-md:h-full relative">
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="w-full h-full md:max-h-[464px] relative">
                  <ImagesSlider
                    {...{ sliderItems: sliderItemSelected?.images }}
                  />

                  <div className="absolute bottom-14 left-0 w-full text-lg sm:text-xl text-center z-10">
                    {sliderItemSelected?.title}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex-[724_1_0%] max-md:w-full flex flex-col gap-10 md:gap-[60px]">
            <div className="flex flex-col gap-4 sm:gap-6">
              <h3 className="text-xl sm:text-3xl font-medium">
                Introduction ({sliderItemSelected?.title})
              </h3>

              <p className="text-base sm:text-lg text-softWhite font-neueMontreal font-normal sm:font-medium">
                Meet Alexis, a passionate content creator who has transformed
                her online presence into a thriving business with ASKPPL. Known
                for her engaging vlogs and lifestyle tips, Alexis now uses
                ASKPPL to connect directly with her audience, answering their
                burning questions and sharing personalized advice. Here’s a look
                at her day, her unique perspective, and how she crafts engaging
                questions to keep her audience hooked.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6">
              <h3 className="text-xl sm:text-3xl font-medium">
                A Day in the Life of Alexis
              </h3>

              <p className="text-base sm:text-lg text-softWhite font-neueMontreal font-normal sm:font-medium">
                Meet Alexis, a passionate content creator who has transformed
                her online presence into a thriving business with ASKPPL. Known
                for her engaging vlogs and lifestyle tips, Alexis now uses
                ASKPPL to connect directly with her audience, answering their
                burning questions and sharing personalized advice. Here’s a look
                at her day, her unique perspective, and how she crafts engaging
                questions to keep her audience hooked.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6">
              <h3 className="text-xl sm:text-3xl font-medium">Introduction</h3>

              <p className="text-base sm:text-lg text-softWhite font-neueMontreal font-normal sm:font-medium">
                Meet Alexis, a passionate content creator who has transformed
                her online presence into a thriving business with ASKPPL. Known
                for her engaging vlogs and lifestyle tips, Alexis now uses
                ASKPPL to connect directly with her audience, answering their
                burning questions and sharing personalized advice. Here’s a look
                at her day, her unique perspective, and how she crafts engaging
                questions to keep her audience hooked.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{ backdropFilter: "blur(60px)" }}
          className="mt-10 sm:mt-[60px] mb-5 bg-forest rounded-[20px] border border-ghostWhite flex flex-col md:flex-row justify-between items-center gap-5 overflow-hidden"
        >
          <div className="relative max-xl:hidden xl:pl-14">
            <Image src={packagesFrame} alt="packagesFrame" className="h-full" />

            <div className="absolute -top-[34px] w-full h-[114px]  bg-green-fade-vertical-top"></div>

            <div className="absolute -bottom-8 w-full h-[94px] bg-green-fade-vertical-bottom"></div>
          </div>

          <div className="py-5 md:py-8 max-xl:px-5 flex flex-col gap-[18px] xl:items-center w-full md:w-[400px] mx-auto">
            <h3 className="text-xl sm:text-3xl font-medium">
              Start Your Journey Today!
            </h3>

            <p className="font-normal sm:font-medium text-[#FFFFFF99] xl:text-center">
              Join ASKPPL and discover how easy it is to monetize your expertise
              while connecting with a loyal audience.
            </p>

            <div className="p-4 w-max rounded-2xl bg-white text-dark text-lg font-bold cursor-pointer">
              Create Your Profile Now
            </div>
          </div>

          <div className="self-end">
            <Image src={profileImagesFrame} alt="profileImagesFrame" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
