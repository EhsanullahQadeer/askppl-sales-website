"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import LeftIcon from "@/assets/icons/LeftIcon";
import RightIcon from "@/assets/icons/RightIcon";
import VerifiedIcon from "@/assets/icons/VerifiedIcon";
import { SlideItem } from "./types";

interface Props {
  sliderItems: SlideItem[];
  setSliderItemSelected: (item: SlideItem) => void;
}

function SliderWithSelection(props: Props) {
  const { sliderItems, setSliderItemSelected } = props;
  const [selectedItem, setSelectedItem] = useState<SlideItem | null>(
    sliderItems[0]
  );
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      isDragging.current = true;
      startX.current = e.touches[0].pageX;
      scrollLeft.current = sliderRef.current.scrollLeft;
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging.current && sliderRef.current) {
      const touchX = e.touches[0].pageX;
      const walk = startX.current - touchX;
      sliderRef.current.scrollLeft = scrollLeft.current + walk;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const scrollLeftHandler = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 168;
    }
  };

  const scrollRightHandler = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 168;
    }
  };

  const itemSelected = (item: SlideItem) => {
    setSelectedItem(item);
    setSliderItemSelected(item);
  };

  return (
    <div className="w-full text-white">
      <div className="relative w-full">
        <button
          onClick={scrollLeftHandler}
          className="absolute left-7 lg:left-[90px] top-1/2 -translate-y-1/2 z-10 text-white rounded-full flex items-center justify-center max-sm:hidden"
        >
          <LeftIcon />
        </button>

        <div className="sm:mx-[60px] lg:mx-[140px] overflow-hidden">
          <div
            ref={sliderRef}
            className="flex space-x-2.5 sm:space-x-4 overflow-x-auto scrollbar-hide scroll-smooth max-sm:px-2.5"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {sliderItems.map((slide) => (
              <div
                key={slide.id}
                onClick={() => itemSelected(slide)}
                className={`flex-shrink-0 w-[105px] sm:w-[152px] h-36 sm:h-[186px] flex flex-col items-center justify-between gap-3 sm:gap-5 cursor-pointer rounded-[20px] px-3 py-4 sm:px-2 sm:py-6 transition-all duration-300 border ${
                  selectedItem?.id === slide.id
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
            ))}
          </div>
        </div>

        <button
          onClick={scrollRightHandler}
          className="absolute right-7 lg:right-[90px] top-1/2 -translate-y-1/2 z-10 text-white rounded-full flex items-center justify-center max-sm:hidden"
        >
          <RightIcon />
        </button>
      </div>
    </div>
  );
}

export default SliderWithSelection;
