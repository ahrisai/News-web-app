import {FC} from 'react'
import { INewsItem } from '../../types/NewsTypes'
import { formatTimeAgo } from '../../utility/formatTimeAgo'
import NewsBannerStyles from './NewsBanner.module.css'
import ImageWrapper from '../ImageWrapper/ImageWrapper'
import Skeleton from '../Skeleton/Skeleton'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
import {useNavigate} from 'react-router-dom'
interface NewsBannerProps{
    newsItem?:INewsItem,
    isCurrentSlide?:boolean
    
}
const NewsBanner:FC<NewsBannerProps> = ({newsItem,isCurrentSlide}) => {
  const status =useSelector((state:RootState)=>state.newsReducer.newsStatus)
  const navigate=useNavigate()
  return (
    status==='pending'
    ?<Skeleton count={1} type={'banner'}/>
    :
    newsItem
      ?<div className={isCurrentSlide? [NewsBannerStyles.newsBanner,NewsBannerStyles.active].join(' '):NewsBannerStyles.newsBanner} onClick={()=>{navigate(`/news/${newsItem.id}/l`)}}>
      <ImageWrapper imgStyles={NewsBannerStyles.bannerImage}  image={newsItem.image}/>
      <h3 className={NewsBannerStyles.title}>{newsItem.title}</h3>
      <p className={NewsBannerStyles.date}>
          {formatTimeAgo(newsItem.published)  } by {newsItem.author}
      </p>
    </div>
      :<div className={NewsBannerStyles.newsBanner}>
      <ImageWrapper  image={'../../../src/img/sadFace.jpg'}/>
      </div>

    
    
    
    
  )
}

export default NewsBanner