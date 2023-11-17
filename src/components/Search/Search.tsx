import {FC} from 'react'
import searchStyles from './Search.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'

interface SearchProps{
  keywords:string,
  setKeywords:(keyword:string)=>void
}



const Search:FC<SearchProps> = ({keywords,setKeywords}) => {
  
const status=useSelector((state:RootState)=>state.newsReducer.newsStatus)

  return (
    <div className={searchStyles.searchField}>
      <input disabled={status==='pending'} className={searchStyles.searchInput} value={keywords} onChange={(e)=>setKeywords(e.target.value as string)} type="text" placeholder='search...'/>
      <button className={searchStyles.loop} type='submit'></button>
    </div>
  )
}

export default Search