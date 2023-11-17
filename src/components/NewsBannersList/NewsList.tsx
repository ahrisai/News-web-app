import {FC} from 'react'
import ListStyles from './NewsBannersList.module.css'
import { INewsItem } from '../../types/NewsTypes'
import NewsItem from '../NewsItem/NewsItem'
interface NewsBannersListProps{
    news:INewsItem[]
}
const NewsList:FC<NewsBannersListProps> = ({news}) => {
  return (
    <div className={ListStyles.list}>
        {
          news.length
          ?
            news.map(item=><NewsItem key={item.id} newsItem={item}/>)
          :'Sorry! We did not find anything by your request =('
        }
    </div>
  )
}

export default NewsList