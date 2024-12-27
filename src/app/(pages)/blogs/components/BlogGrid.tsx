import React from "react";
import { IBlog } from "./types";
import BlogCard from "./BlogCard";
import Link from "next/link";
import { wait } from "@/lib/wait";

interface Props {
  currentBlogs: IBlog[];
}

const BlogGrid = async (props: Props) => {
  const { currentBlogs } = props;
  await wait(2000)

  return (
    <div>
      <div className="grid grid-cols-1 gap-y-10">
        <div className="flex flex-wrap gap-y-10 gap-x-4">
          {currentBlogs.slice(0, 2).map((blog) => {
            return (
              <Link href={`/blogs/${blog.id}`} key={blog.id} className="flex-1">
                <BlogCard {...{ blog }} />
              </Link>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-y-10 gap-x-4">
          {currentBlogs.slice(2).map((blog) => {
            return (
              <Link
                href={`/blogs/${blog.id}`}
                key={blog.id}
                className="flex-[1_1_calc(33.333%-1rem)]"
              >
                <BlogCard {...{ blog, titleLinesClamp: 2 }} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogGrid;
