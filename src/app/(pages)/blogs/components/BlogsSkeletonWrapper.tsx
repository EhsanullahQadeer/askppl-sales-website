import React from "react";
import BlogCardSkeleton from "./BlogCardSkeleton";

const BlogsSkeletonWrapper = () => {
  return (
    <div className="grid grid-cols-1 gap-y-10">
      <div className="flex flex-wrap gap-y-10 gap-x-4">
        {[1, 2].map((item) => {
          return (
            <div key={item} className="flex-1">
              <BlogCardSkeleton />
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-y-10 gap-x-4">
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <div key={item} className="flex-[1_1_calc(33.333%-1rem)]">
              <BlogCardSkeleton />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsSkeletonWrapper;
