import React,{FC} from 'react'
import ListStyles from './NewsBannersList.module.css'
import { INewsItem } from '../../types/NewsTypes'
import NewsBanner from '../NewsBanner/NewsBanner'
import NewsItem from '../NewsItem/NewsItem'
interface NewsBannersListProps{
    news:INewsItem[]
}
const NewsList:FC<NewsBannersListProps> = ({news}) => {
  return (
    <div className={ListStyles.list}>
        {
            news.map(item=><NewsItem key={item.title} newsItem={item}/>)
        }
    </div>
  )
}

export default NewsList