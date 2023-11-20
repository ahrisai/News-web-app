import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import ArticleStyles from './Article.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
import { formatTimeAgo } from '../../utility/formatTimeAgo'
import { INewsItem } from '../../types/NewsTypes'

const Article = () => {
   const params=useParams()
   const [article, setArticle] = useState<INewsItem>()
   
   let art=params.l
   ?useSelector((state:RootState)=>state.newsReducer.latestNews).find(article=>article.id===params.id)
   :useSelector((state:RootState)=>state.newsReducer.news).find(article=>article.id===params.id)
    useEffect(() => {
      setArticle(art)
    }, [])
    
    

  return (
    <>
        <div className={ArticleStyles.articleTop}>
            <img src={article?.image} alt="" className={ArticleStyles.img}/>
            <div>
                <h1 className={ArticleStyles.title}>{article?.title}</h1>
                <p className={ArticleStyles.published}>{formatTimeAgo(article?.published)} by {article?.author}</p>
            </div>
            
        </div>
        <p className={ArticleStyles.description}>{article?.description} lore</p>
        <p className={ArticleStyles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Nisl purus in mollis nunc. Nulla porttitor massa id neque aliquam vestibulum. Hac habitasse platea dictumst vestibulum rhoncus est. Vitae semper quis lectus nulla at volutpat diam. Quisque egestas diam in arcu cursus euismod quis. Ultrices neque ornare aenean euismod elementum nisi. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Nibh ipsum consequat nisl vel pretium lectus quam id. Ullamcorper dignissim cras tincidunt lobortis feugiat. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Turpis massa tincidunt dui ut ornare lectus sit.</p>
    </>
  )
}

export default Article