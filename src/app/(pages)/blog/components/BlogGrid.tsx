"use client";

import React, { useState } from "react";
import Pagination from "@/components/Pagination";
import { IBlog } from "./types";
import BlogCard from "./BlogCard";
import Link from "next/link";

interface Props {
  blogs: IBlog[];
  blogsPerPage: number;
}

const BlogGrid = (props: Props) => {
  const { blogs, blogsPerPage } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid grid-cols-1 gap-y-10">
        <div className="flex flex-wrap gap-y-10 gap-x-4">
          {currentBlogs.slice(0, 2).map((blog) => {
            return (
              <Link href={`/blog/${blog.id}`} key={blog.id} className="flex-1">
                <BlogCard {...{ blog }} />
              </Link>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-y-10 gap-x-4">
          {currentBlogs.slice(2).map((blog) => {
            return (
              <Link href={`/blog/${blog.id}`} key={blog.id} className="flex-[1_1_calc(33.333%-1rem)]">
                <BlogCard {...{ blog, titleLinesClamp: 2 }} />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-16 mb-28">
        <Pagination
          totalItems={blogs.length}
          itemsPerPage={blogsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BlogGrid;
