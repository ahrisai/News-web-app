import {useState} from 'react'
import searchStyles from './Search.module.css'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'

const Search = () => {
  const categories = useSelector((state:RootState)=>state.newsReducer.categories)
  const [keywords, setKeywords] = useState<string>('')
  return (
    <>
      <input className={searchStyles.searchField} value={keywords} onChange={(e)=>setKeywords(e.target.value as string)} type="text" placeholder='search...'/>
    </>
  )
}

export default Search