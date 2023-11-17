import React, { FC,useEffect } from "react";
import paginationStyles from "./Pagination.module.css";
import { pages } from "../../utility/pagesArray";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
interface PaginationProps {
  currentPage:number;
  choosePage:(page_number: number,
    lastPage?:number,
    e?: React.MouseEvent<HTMLButtonElement>)=>void
}

const Pagination: FC<PaginationProps> = ({currentPage,choosePage }) => {
 
  const status=useSelector((state:RootState)=>state.newsReducer.newsStatus)

  useEffect(() => {
    if(currentPage===pages[pages.length-1]){
      pages.push(pages[pages.length-1]+1)
      pages.shift()

    }
    if(currentPage===pages[0]&&currentPage>1){
      pages.pop()
      pages.unshift(pages[0]-1)
    }
  }, [currentPage])
  

  return (
    <div className={paginationStyles.pagesList}>
      <button disabled={status==='pending'}
        className={paginationStyles.pageButton}
        onClick={(e) => choosePage(currentPage,undefined,e)}
      >
        {"<"} 
      </button>

      {pages.map((pageNumber) => (
        <button 
          onClick={() => choosePage(pageNumber)}
          className={
            pageNumber=== currentPage
              ? [paginationStyles.pageButton, paginationStyles.active].join(" ")
              : paginationStyles.pageButton
          }
          key={pageNumber} disabled={pageNumber=== currentPage||status==='pending'}
        >
          {pageNumber}
        </button>
      ))}
      <button disabled={status==='pending'}
        className={paginationStyles.pageButton}
        onClick={(e) => choosePage(currentPage,pages[pages.length-1], e)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
