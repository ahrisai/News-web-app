import MainStyles from "./Main.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { fetchNews } from "../../redux/newsSlice";
import NewsList from "../../components/NewsBannersList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
const Main = () => {
  const news = useSelector((state: RootState) => state.userReducer.news);
  const status = useSelector((state: RootState) => state.userReducer.status);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);
  
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
         <NewsList news={news.slice(1)} />
          </div>}
      </div>
    </main>
  );
};

export default Main;
