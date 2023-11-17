
import Search from '../Search/Search'
import FilterBar from '../FilterBar/FilterBar'
import { fetchNews } from '../../redux/newsSlice'
import { RootState, useAppDispatch } from '../../redux'
import formStyles from './SearchForm.module.css'
import React, { useState,useEffect,FC } from 'react'
import { IPageQueryParams } from '../../types/QueryTypes'
import { useSelector } from 'react-redux'

interface SearchFormProps {
    currentPage:number
}

const SearchForm:FC<SearchFormProps> = ({currentPage}) => {
  const [keywords, setKeywords] = useState<string>('')
const currentCategories=useSelector((state:RootState)=>state.newsReducer.currentCategories)
const dispatch= useAppDispatch()
const queryParams={
page_size:10,
categories:currentCategories,
page_number:currentPage,
keywords:keywords
} as IPageQueryParams
    const makeSearch = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
      dispatch(fetchNews(queryParams))
    }
useEffect(() => {
    dispatch(fetchNews(queryParams))
}, [currentPage])

  return (
    <form onSubmit={(e)=>makeSearch(e)} className={formStyles.newsFiltersForm}>
              <Search keywords={keywords} setKeywords={setKeywords}/>
              <FilterBar/>
    </form>
  )
}

export default SearchForm