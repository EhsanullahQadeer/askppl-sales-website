import React from "react";
import BlogTypes from "./components/BlogTypes";
import { blogsData, blogsSearchData, blogTypesArr } from "./data/data";
import BlogGrid from "./components/BlogGrid";
import SelectWrap from "./components/SelectWrap";
import SearchField from "@/components/SearchField";
import { blogsPerPage } from "./lib/constants/constant";

interface PageProps {
  searchParams: Promise<{
    type?: string;
    page?: string;
    [key: string]: string | undefined;
  }>;
}

const Page = async ({ searchParams }: PageProps) => {
  const { type, page } = await searchParams;

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
                <BlogTypes {...{ blogTypesArr, type }} />
              </div>

              <div className="xl:hidden flex justify-start max-sm:justify-center">
                <SelectWrap {...{ blogTypesArr, type }} />
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
          <BlogGrid {...{ blogs: blogsData, blogsPerPage, page }} />
        </div>
      </div>
    </div>
  );
};

export default Page;
