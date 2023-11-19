import MainStyles from "./Main.module.css";
import { useState } from "react";
import NewsList from "../../components/NewsBannersList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import SearchForm from "../../components/SearchForm/SearchForm";
import SliderBanner from "../../components/Slider/Slider";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Main = () => {

  const [currentPage, setCurrentPage] = useState<number>(1);

  

  

  const choosePage = (
    page_number: number,
    lastPage?: number,
    e?: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (e) {
      if (e.currentTarget.innerText === "<" && page_number > 1) {
        setCurrentPage(page_number - 1);
      }
      if (lastPage) {
        if (e.currentTarget.innerText === ">" && page_number < lastPage) {
          setCurrentPage(page_number + 1);
        }
      }
    } else {
      setCurrentPage(page_number);
    }
  };


  return (
    <main>
      <div className={MainStyles.container}>
            <SliderBanner/>
            <SearchForm currentPage={currentPage} setCurrentPage={setCurrentPage}/>
            <Pagination currentPage={currentPage} choosePage={choosePage} />
            <NewsList />
            <Pagination currentPage={currentPage} choosePage={choosePage} />
      </div>
    </main>
  );
};

export default Main;
