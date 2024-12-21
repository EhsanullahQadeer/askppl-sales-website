"use client";

import SearchField from "@/components/SearchField";
import React, { useState } from "react";
import BlogTypes from "./components/BlogTypes";
import { blogsData, blogsSearchData, blogTypesArr } from "./data/data";
import BlogGrid from "./components/BlogGrid";
import SelectField from "@/components/SelectField";

const Page = () => {
  const [blogTypeSelected, setBlogTypeSelected] = useState<string>("all");

  return (
    <div className="pt-[60px] sm:pt-24">
      <div className="max-w-[610px] mx-auto max-sm:px-9">
        <h1 className="page-heading">
          Discover How Others Are Monetizing Their Influence
        </h1>
      </div>

      <div className="mx-5 sm:mx-[60px] lg:mx-[140px]">
        <div className="mt-10 sm:mt-[80px] mx-auto max-w-screen-2xl">
          <div className="flex max-sm:flex-col flex-row gap-x-1 gap-y-5 justify-between max-sm:justify-center items-center">
            <div className="order-1 max-sm:order-2 flex-1 w-full">
              <div className="max-xl:hidden">
                <BlogTypes
                  {...{ blogTypesArr, blogTypeSelected, setBlogTypeSelected }}
                />
              </div>

              <div className="xl:hidden flex justify-start max-sm:justify-center">
                <SelectField
                  {...{
                    options: blogTypesArr,
                    value: blogTypeSelected,
                    onChange: setBlogTypeSelected,
                    placeholder: "Select an option",
                  }}
                />
              </div>
            </div>

            <div className="max-w-[335px] w-full sm:w-[260px] order-2 max-sm:order-1">
              <SearchField
                {...{
                  placeholder: "Search blog",
                  suggestions: blogsSearchData,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-5 sm:mx-[60px] lg:mx-[140px]">
        <div className="mt-12 mx-auto max-w-screen-2xl">
          <BlogGrid {...{ blogs: blogsData, blogsPerPage: 8 }} />
        </div>
      </div>
    </div>
  );
};

export default Page;
