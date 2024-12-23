"use client";
import Pagination from "@/components/Pagination";
import createQueryString from "@/lib/createQueryString";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

interface IProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  remainingBlogs: number;
}
const PaginationWrap = (props: IProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onPageChange = (page: number) => {
    const queryParams = createQueryString(
      "page",
      page.toString(),
      searchParams
    );
    router.push(`/blogs?${queryParams}`);
    console.log("remainingBlogs", props.remainingBlogs);
  };
  return <Pagination {...{ onPageChange, ...props }} />;
};

export default PaginationWrap;
