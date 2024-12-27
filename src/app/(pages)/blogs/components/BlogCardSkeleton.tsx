import LoadingSkeleton from "@/components/LoadingSkeleton";
import React from "react";

const BlogCardSkeleton = () => {
  return (
    <div className="rounded-20 h-full flex flex-col min-w-[335px]">
      <LoadingSkeleton
        {...{ height: "220px", classes: "!rounded-t-20" }}
      />

      <div className="px-5 py-6 h-full flex flex-col justify-between gap-6 border border-ghostWhite border-t-0 rounded-b-20">
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-2.5 items-center flex-wrap">
            <LoadingSkeleton
              {...{
                width: "80px",
                height: "24px",
              }}
            />
            <span className="w-[3px] h-[3px] bg-softWhite"></span>
            <LoadingSkeleton
              {...{
                width: "60px",
                height: "20px",
              }}
            />
          </div>

          <LoadingSkeleton {...{ height: "32px" }} />

          <LoadingSkeleton {...{ height: "20px", count: 2 }} />
        </div>

        <LoadingSkeleton
          {...{
            width: "100px",
            height: "36px",
          }}
        />
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
