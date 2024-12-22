import React from "react";
import { IBlog } from "./types";
import BlogCard from "./BlogCard";
import Link from "next/link";
import PaginationWrap from "./PaginationWrap";

interface Props {
  blogs: IBlog[];
  page?: string;
  blogsPerPage: number;
}

const BlogGrid = (props: Props) => {
  const { blogs, page, blogsPerPage } = props;
  const currentPage = page ? parseInt(page) : 1;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

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

      <div className="mt-16 mb-28">
        <PaginationWrap
          {...{
            currentPage,
            itemsPerPage: blogsPerPage,
            totalItems: blogs.length,
          }}
        />
      </div>
    </div>
  );
};

export default BlogGrid;
