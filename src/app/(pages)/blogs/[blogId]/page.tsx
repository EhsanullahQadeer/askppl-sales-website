import FacebooksIcon from "@/assets/icons/FacebooksIcon";
import InstaIcon from "@/assets/icons/InstaIcon";
import TwittersIcon from "@/assets/icons/TwittersIcon";
import React from "react";
import BlogCard from "../components/BlogCard";
import Link from "next/link";
import { blogsData } from "../data/data";
import Image from "next/image";
import blogImg from "../../../../assets/images/blog-img1.png";

const Page = () => {
  const blogData = {
    id: "1",
    title: "5 Proven Tips to Monetize Your Expertise with ASKPPL",
    date: "22 Nov 2024",
    author: "ASKPPL team",
    thumbnail: blogImg,
    tag: "Community Building",
    htmlContent: ` `,
  };

  return (
    <div className="mx-5 sm:mx-[60px] lg:mx-[140px]">
      <div className="mt-10 sm:mt-[96px] mx-auto max-w-screen-2xl">
        <div className="flex flex-col items-center justify-center max-w-3xl mx-auto">
          <div className="flex flex-col gap-4">
            <div className="gap-2 flex items-center text-softWhite text-sm font-neueMontreal">
              <span className="py-[5px] px-1.5 rounded-md font-medium bg-grey tracking-normal whitespace-nowrap">
                {blogData.tag}
              </span>
              <span className="w-[3px] h-[3px] bg-softWhite"></span>
              <span className="font-medium">{blogData.date}</span>
            </div>
            <h2 className="page-heading !text-left">{blogData.title}</h2>
          </div>

          <div className="w-full mt-14 mb-[60px]">
            <Image
              src={blogData.thumbnail}
              alt={blogData.title}
              className="w-full max-sm:h-[300px] max-h-[400px] rounded-20"
            />
          </div>

          <div
            className="prose prose-lg mb-10 text-softWhite"
            dangerouslySetInnerHTML={{ __html: blogData.htmlContent }}
          />
          <div className="flex max-sm:flex-col flex-wrap gap-4 justify-between w-full mt-10 sm:mt-20 sm:items-center">
            <span className="text-sm text-softWhite font-medium font-neueMontreal">
              ASKPPL team
            </span>
            <div className="flex items-center font-medium gap-5">
              <span>Share:</span>
              <div className="flex items-center gap-3">
                <span className="p-1.5 cursor-pointer rounded-full border border-mistWhite">
                  <FacebooksIcon />
                </span>
                <span className="p-1.5 cursor-pointer rounded-full border border-mistWhite">
                  <InstaIcon />
                </span>
                <span className="p-1.5 cursor-pointer rounded-full border border-mistWhite">
                  <TwittersIcon />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[50px] flex flex-col md:gap-[50px] gap-[40px]">
          <h2 className="text-3xl font-medium">Related Blog</h2>
          <div className="flex flex-wrap gap-y-10 gap-x-4">
            {blogsData.slice(0, 3).map((blog) => {
              return (
                <Link
                  href={`/blogs/${blog.id}`}
                  key={blog.id}
                  className="flex-1"
                >
                  <BlogCard {...{ blog }} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
