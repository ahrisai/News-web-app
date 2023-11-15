import React, { FC } from "react";
import paginationStyles from "./Pagination.module.css";
interface PaginationProps {
  totalPages: number;
  currentPage:number;
  choosePage:(page_number: number,
    e?: React.MouseEvent<HTMLButtonElement>)=>void
}

const Pagination: FC<PaginationProps> = ({ totalPages,currentPage,choosePage }) => {

  return (
    <div className={paginationStyles.pagesList}>
      <button
        className={paginationStyles.pageButton}
        onClick={(e) => choosePage(currentPage, e)}
      >
        {"<"}
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          onClick={() => choosePage(index + 1)}
          className={
            index + 1 === currentPage
              ? [paginationStyles.pageButton, paginationStyles.active].join(" ")
              : paginationStyles.pageButton
          }
          key={index}
        >
          {index + 1}{" "}
        </button>
      ))}
      <button
        className={paginationStyles.pageButton}
        onClick={(e) => choosePage(currentPage, e)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
