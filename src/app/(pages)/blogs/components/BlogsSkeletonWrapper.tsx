import React from "react";
import BlogCardSkeleton from "./BlogCardSkeleton";
interface Props {
  currentPageCount: number;
}

const BlogsSkeletonWrapper = (props: Props) => {
  const { currentPageCount } = props;

  const firstRow = Array.from(
    { length: Math.min(currentPageCount, 2) },
    (_, i) => i + 1
  );

  const remainingCount = currentPageCount - firstRow.length;

  const otherRows = Array.from({ length: remainingCount }, (_, i) => i + 1);

  console.log("otherRows : " + otherRows);
  return (
    <div className="grid grid-cols-1 gap-y-10">
      <div className="flex flex-wrap gap-y-10 gap-x-4">
        {firstRow.map((item) => {
          return (
            <div key={item} className="flex-1">
              <BlogCardSkeleton />
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-y-10 gap-x-4">
        {otherRows.map((item) => {
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
