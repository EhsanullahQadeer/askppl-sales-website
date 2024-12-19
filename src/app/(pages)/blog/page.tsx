import SearchField from "@/components/SearchField";
import React from "react";
import BlogTypes from "./components/BlogTypes";
import { blogsData } from "./data/data";

const page = () => {
  return (
    <div className="pt-[60px] sm:pt-24">
      <div className="max-w-[610px] mx-auto max-sm:px-9">
        <h1 className="page-heading">
          Discover How Others Are Monetizing Their Influence
        </h1>
      </div>

      <div className="mx-5 sm:mx-[60px] lg:mx-[140px]">
        <div className="mt-10 sm:mt-[80px] mx-auto max-w-screen-2xl">
          <div className="flex flex-wrap gap-x-[72px] gap-y-5 justify-between max-[1190px]:justify-center items-center">
            <div className="order-1 max-[1190px]:order-2">
              <BlogTypes />
            </div>

            <div className="w-[260px] order-2 max-[1190px]:order-1">
              <SearchField
                {...{ placeholder: "Search blog", suggestions: blogsData }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
