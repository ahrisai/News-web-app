import  { FC } from 'react'
import newsItemStyles from './NewsItem.module.css'
import { INewsItem } from '../../types/NewsTypes'
import { formatTimeAgo } from '../../utility/formatTimeAgo'
import ImageWrapper from '../ImageWrapper/ImageWrapper'
interface NewsItemProps{
    newsItem:INewsItem
}
const NewsItem:FC<NewsItemProps> = ({newsItem}) => {
    return (
        <div className={newsItemStyles.itemBorder}>
                 <div className={newsItemStyles.newsItem}>
          <ImageWrapper imgStyles={newsItemStyles.newsItemImg} image={newsItem.urlToImage}/>
          <div className={newsItemStyles.textContainer}>
          <h3 className={newsItemStyles.title}>{newsItem.title}</h3>
          <p className={newsItemStyles.date}>
              {formatTimeAgo(newsItem.publishedAt)  } by {newsItem.author}
          </p>
          </div>
          
      </div>
        </div>
 
    )
  }

export default NewsItem