import SearchField from "@/components/SearchField";
import React from "react";

const occupations = [
  "Content creator",
  "Designer",
  "Developer",
  "Photographer",
  "Writer",
  "Editor",
  "Engineer",
  "Teacher",
  "Data Scientist",
];

const page = () => {
  return (
    <div className="pt-24">
      <div className="max-w-[610px] mx-auto">
        <h1 className="text-5xl text-center font-medium">
          Insights, Tips, and Stories to Empower Your Journey
        </h1>
      </div>

      <div className="mt-[60px] max-w-[376px] mx-auto">
        <SearchField
          {...{ placeholder: "Search by occupation", suggestions: occupations }}
        />
      </div>

      <div className="mt-[100px]"></div>
    </div>
  );
};

export default page;
