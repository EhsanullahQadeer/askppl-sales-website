"use client";

import React, { useState } from "react";

const blogTypesArr = [
  { label: "All", value: "all" },
  { label: "Monetization Tips", value: "monetization" },
  { label: "Community Building", value: "community" },
  { label: "Platform Updates", value: "platform" },
];

const BlogTypes = () => {
  const [blogTypeSelected, setBlogTypeSelected] = useState<string>("all");

  const handleBlogTypeChange = (value: string) => {
    setBlogTypeSelected(value);
  };

  return (
    <div className="flex items-center justify-center gap-3.5">
      {blogTypesArr.map((blogType, idx) => {
        const { label, value } = blogType;
        return (
          <div
            key={value + idx}
            onClick={() => handleBlogTypeChange(value)}
            className={`rounded-xl py-3.5 px-4 cursor-pointer text-base text-white border ${
              blogTypeSelected === value
                ? "border-mistWhite bg-ethereal-glow-gradient"
                : "border-froastedWhite bg-transparent"
            }`}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
};

export default BlogTypes;
