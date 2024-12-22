import Image from "next/image";
import React from "react";
import { IBlog } from "./types";
import { formatDate } from "../data/data";

type Props = {
  blog: IBlog;
  titleLinesClamp?: number;
};

const BlogCard = (props: Props) => {
  const { blog, titleLinesClamp } = props;
  const { image, title, description, date, tag } = blog;

  return (
    <div
      className="backdrop-60 bg-whisper-white-gradient rounded-20 border border-ghostWhite h-full flex flex-col min-w-[335px]"
    >
      <Image
        src={image}
        alt={title}
        className="w-full h-[200px] sm:h-[220px] object-cover rounded-t-20"
      />

      <div className="mx-5 my-6 h-full flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-2.5 items-center text-softWhite text-sm font-neueMontreal flex-wrap">
            <div className="p-1.5 rounded-md bg-darkCharcoal font-medium tracking-normal whitespace-nowrap">
              {tag}
            </div>

            <span className="w-[3px] h-[3px] bg-softWhite"></span>

            <span className="font-medium">{formatDate(date)}</span>
          </div>

          <h3
            className={`text-lg sm:text-2xl font-medium ${
              titleLinesClamp && titleLinesClamp > 1
                ? "line-clamp-2"
                : "line-clamp-1"
            }`}
          >
            {title}
          </h3>

          <p className="text-softWhite text-sm sm:text-lg tracking-normal font-neueMontreal font-medium line-clamp-2">
            {description}
          </p>
        </div>

        <div className="py-2.5 px-3 cursor-pointer text-lightLime text-base font-medium tracking-normal w-max">
          Learn more
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
