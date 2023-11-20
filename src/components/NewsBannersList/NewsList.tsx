import {FC} from 'react'
import ListStyles from './NewsBannersList.module.css'
import NewsItem from '../NewsItem/NewsItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
import Skeleton from '../Skeleton/Skeleton'

const NewsList:FC = () => {
  const status = useSelector((state:RootState)=>state.newsReducer.newsStatus)
  const news = useSelector((state:RootState)=>state.newsReducer.news)
  
  return (
    <div className={ListStyles.list}>
      {status==='pending'
    ?<Skeleton count={4} type="item" />
    :news.length
    ?
      news.map(item=><NewsItem key={item.id} newsItem={item}/>)
    :<h3 style={{margin:'0 auto'}}>{'Sorry! We did not find anything by your request =('}</h3>
      }
       
    </div>
  )
}

export default NewsList