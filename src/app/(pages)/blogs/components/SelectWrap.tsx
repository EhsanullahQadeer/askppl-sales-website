"use client";
import SelectField from "@/components/SelectField";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import createQueryString from "@/lib/createQueryString";
interface Option {
  value: string;
  label: string;
}
interface Props {
  blogTypesArr: Option[];
  type?: string;
}

const SelectWrap = (props: Props) => {
  const { blogTypesArr, type = "" } = props;
  const searchParams = useSearchParams();
  const router = useRouter();

  const onChange = (value: string) => {
    const queryParams = createQueryString("type", value, searchParams);
    const href = value === "all" ? "/blogs" : `/blogs?${queryParams}`;
    router.push(href, { scroll: false });
  };
  return (
    <SelectField
      {...{
        options: blogTypesArr,
        value: type,
        onChange,
        placeholder: "Select an option",
      }}
    />
  );
};

export default SelectWrap;
