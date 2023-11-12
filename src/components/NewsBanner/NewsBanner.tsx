import React,{FC} from 'react'
import { INewsItem } from '../../types/NewsTypes'
import { formatTimeAgo } from '../../utility/formatTimeAgo'
import NewsBannerStyles from './NewsBanner.module.css'
import ImageWrapper from '../ImageWrapper/ImageWrapper'
interface NewsBannerProps{
    newsItem:INewsItem
}
const NewsBanner:FC<NewsBannerProps> = ({newsItem}) => {
  return (
    <div className={NewsBannerStyles.newsBanner}>
        <ImageWrapper image={newsItem.image}/>
        <h3 className={NewsBannerStyles.title}>{newsItem.title}</h3>
        <p className={NewsBannerStyles.date}>
            {formatTimeAgo(newsItem.published)  } by {newsItem.author}
        </p>
    </div>
  )
}

export default NewsBanner