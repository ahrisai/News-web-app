import React from "react";
import MainStyles from "./Main.module.css";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import { INewsItem } from "../../types/NewsTypes";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { fetchNews } from "../../redux/newsSlice";
import NewsBannersList from "../../components/NewsBannersList/NewsBannersList";
import Loader from "../../components/Loader/Loader";
const Main = () => {
  const news = useSelector((state: RootState) => state.userReducer.news);
  const status = useSelector((state: RootState) => state.userReducer.status);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, []);
  console.log(news);
  return (
    <main>
      <div className={MainStyles.container}>
        {status==='pending' ? <Loader /> : <NewsBannersList news={news} />}
      </div>
    </main>
  );
};

export default Main;
