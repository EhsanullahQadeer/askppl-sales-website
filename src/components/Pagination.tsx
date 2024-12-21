import React from "react";
import LeftIcon from "@/assets/icons/LeftIcon";
import RightIcon from "@/assets/icons/RightIcon";
import { usePagination, DOTS } from "@/hooks/usePagination";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
  const { totalItems, itemsPerPage, currentPage, onPageChange } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount: totalItems,
    siblingCount: 1,
    pageSize: itemsPerPage,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange?.[paginationRange?.length - 1];

  return (
    <div className="flex flex-wrap justify-center gap-5">
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        className={`rounded-full flex items-center justify-center p-2.5 border border-ghostWhite ${
          currentPage === 1
            ? "text-ghostWhite cursor-auto"
            : "text-white cursor-pointer"
        }`}
      >
        <LeftIcon />
      </button>

      {paginationRange?.map((pageNumber, idx) => {
        if (pageNumber === DOTS) {
          return (
            <button
              key={idx}
              className={`rounded-full flex items-center justify-center w-11 py-2.5 text-white text-base font-neueMontreal font-normal border border-ghostWhite bg-transparent cursor-auto`}
            >
              &#8230;
            </button>
          );
        }

        return (
          <button
            key={idx}
            onClick={() => onPageChange(Number(pageNumber))}
            className={`rounded-full flex items-center justify-center w-11 py-2.5 text-white text-base font-neueMontreal font-normal border ${
              pageNumber === currentPage
                ? "border-mistWhite bg-subtle-frost-gradient"
                : "border-ghostWhite bg-transparent"
            }`}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        onClick={onNext}
        disabled={currentPage === lastPage}
        className={`rounded-full flex items-center justify-center p-2.5 border border-ghostWhite ${
          currentPage === lastPage
            ? "text-ghostWhite cursor-auto"
            : "text-white cursor-pointer"
        }`}
      >
        <RightIcon />
      </button>
    </div>
  );
};

export default Pagination;
