
import Search from '../Search/Search'
import FilterBar from '../FilterBar/FilterBar'
import { fetchNews } from '../../redux/newsSlice'
import { RootState, useAppDispatch } from '../../redux'
import formStyles from './SearchForm.module.css'
import React, { useState,useEffect,FC } from 'react'
import { IPageQueryParams } from '../../types/QueryTypes'
import { useSelector } from 'react-redux'

interface SearchFormProps {
    currentPage:number,
    setCurrentPage:(page:number)=>void
}

const SearchForm:FC<SearchFormProps> = ({currentPage, setCurrentPage}) => {
  const [keywords, setKeywords] = useState<string>('')
const currentCategories=useSelector((state:RootState)=>state.newsReducer.currentCategories)
const dispatch= useAppDispatch()

const queryParams={
    page_size:10,
    categories:currentCategories,
    page_number:currentPage,
    keywords:keywords,
    path:'search'
    } as IPageQueryParams

    const makeSearch = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(currentPage!==1){
            dispatch(fetchNews({...queryParams,page_number:1}))
            setCurrentPage(1)
        }
        else
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