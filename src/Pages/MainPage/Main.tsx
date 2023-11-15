import MainStyles from "./Main.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import { useEffect,useState } from "react";
import { useAppDispatch } from "../../redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { fetchNews } from "../../redux/newsSlice";
import NewsList from "../../components/NewsBannersList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";
import { IPageQueryParams } from "../../types/QueryTypes";
const Main = () => {
  const news = useSelector((state: RootState) => state.userReducer.news);
  const status = useSelector((state: RootState) => state.userReducer.status);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const dispatch = useAppDispatch();
  const defaultQuearyParams={
    page_number:currentPage,
    page_size:10
  } as IPageQueryParams
  useEffect(() => {

    dispatch(fetchNews(defaultQuearyParams))
    
    
  }, [currentPage])
  const choosePage = (
    page_number: number,
    lastPage?:number,
    e?: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (e) {
      if (e.currentTarget.innerText === "<" && page_number > 1) {
        setCurrentPage(page_number - 1);
      }
      if(lastPage){
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
        {status==='pending' 
        ? <div>
          <Skeleton count={1} type="banner" />
          <Skeleton count={4} type="item" />
        </div>
         : <div>
         <NewsBanner newsItem={news[0]}/>
         <Pagination currentPage={currentPage} choosePage={choosePage} />

         <NewsList news={news.slice(1)} />
         <Pagination currentPage={currentPage} choosePage={choosePage} />
        
          </div>}
      </div>
    </main>
  );
};

export default Main;
