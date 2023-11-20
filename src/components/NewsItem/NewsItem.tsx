import  { FC } from 'react'
import newsItemStyles from './NewsItem.module.css'
import { INewsItem } from '../../types/NewsTypes'
import { formatTimeAgo } from '../../utility/formatTimeAgo'
import ImageWrapper from '../ImageWrapper/ImageWrapper'
import {useNavigate} from 'react-router-dom'
interface NewsItemProps{
    newsItem:INewsItem
}
const NewsItem:FC<NewsItemProps> = ({newsItem}) => {
    const navigate=useNavigate()
    return (
        <div className={newsItemStyles.itemBorder} onClick={()=>navigate(`/news/${newsItem.id}/s`)}>
                 <div className={newsItemStyles.newsItem}>
          <ImageWrapper  image={newsItem.image}/>
          <div className={newsItemStyles.textContainer}>
          <h3 className={newsItemStyles.title}>{newsItem.title}</h3>
          <p className={newsItemStyles.date}>
              {formatTimeAgo(newsItem.published)  } by {newsItem.author}
          </p>
          </div>
          
      </div>
        </div>
 
    )
  }

export default NewsItem