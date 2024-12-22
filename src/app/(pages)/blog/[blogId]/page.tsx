import FacebooksIcon from "@/assets/icons/FacebooksIcon";
import InstaIcon from "@/assets/icons/InstaIcon";
import TwittersIcon from "@/assets/icons/TwittersIcon";
import React from "react";
import BlogCard from "../components/BlogCard";
import Link from "next/link";
import { blogsData } from "../data/data";

const Page = () => {
  return (
    <div>
      <div className=" w-full h-full py-24 ">
        <div className="flex justify-center  items-center">
          <div className="flex flex-col items-center justify-center  xl:w-3/5 px-5  ">
            <div className="flex  flex-col gap-4">
              <div className="text-hazyPearl gap-2 flex items-center font-medium ">
                <span className="py-[5px] px-1.5 rounded-md font-medium text-sm bg-grey ">
                  Community Building
                </span>
                <span className="text-sm text-softWhite ">•</span>
                <span className="text-sm text-softWhite font-neueMontreal ">
                  22 Nov 2024
                </span>{" "}
              </div>
              <h2 className="sm:text-6xl text-3xl font-medium font-aeonik">
                5 Proven Tips to Monetize Your Expertise with ASKPPL
              </h2>
            </div>
            <div className=" w-full">
              <div className="flex flex-wrap gap-4 justify-between w-full mt-12 items-center">
                <span className="text-sm text-softWhite font-medium font-neueMontreal ">
                  ASKPPL team
                </span>
                <div className="flex items-center  font-medium gap-5">
                  <span>Share:</span>
                  <div className="flex items-center gap-3">
                    <span className="p-1.5 rounded-full border border-mistWhite">
                      {" "}
                      <FacebooksIcon />
                    </span>
                    <span className="p-1.5 rounded-full border border-mistWhite">
                      {" "}
                      <InstaIcon />
                    </span>
                    <span className="p-1.5 rounded-full border border-mistWhite">
                      {" "}
                      <TwittersIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:px-[140px] px-5 py-[50px] flex flex-col md:gap-[50px] gap-[40px]">
        <h2 className='text-3xl'>Related Blog</h2>
        <div className="flex flex-wrap gap-y-10 gap-x-4">
          {blogsData.slice(0, 3).map((blog) => {
            return (
              <Link href={`/blog/${blog.id}`} key={blog.id} className="flex-1">
                <BlogCard {...{ blog }} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
