import {FC} from 'react'
import searchStyles from './Search.module.css'

interface SearchProps{
  keywords:string,
  setKeywords:(keyword:string)=>void
}



const Search:FC<SearchProps> = ({keywords,setKeywords}) => {
  
  return (
    <div className={searchStyles.searchField}>
      <input className={searchStyles.searchInput} value={keywords} onChange={(e)=>setKeywords(e.target.value as string)} type="text" placeholder='search...'/>
      <button className={searchStyles.loop} type='submit'></button>
    </div>
  )
}

export default Search