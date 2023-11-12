import React,{FC} from 'react'
import ListStyles from './NewsBannersList.module.css'
import { INewsItem } from '../../types/NewsTypes'
import NewsBanner from '../NewsBanner/NewsBanner'
interface NewsBannersListProps{
    news:INewsItem[]
}
const NewsBannersList:FC<NewsBannersListProps> = ({news}) => {
  return (
    <div>
        {
            news.map(item=><NewsBanner key={item.id} newsItem={item}/>)
        }
    </div>
  )
}

export default NewsBannersList