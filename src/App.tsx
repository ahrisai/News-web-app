import './App.css'
import Main from './Pages/MainPage/Main'
import Article from './Pages/ArticlePage/Article'
import Header from './components/Header/Header'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { useEffect } from 'react'
import { useAppDispatch } from './redux'
import { fetchNews, fetchLatestNews } from './redux/newsSlice'

function App() {
const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchNews())
    dispatch(fetchLatestNews())
  }, [])
  return (
    <BrowserRouter>
     <Header/>
    <Routes>
      <Route  element={<Main/> }  path='main' />
      <Route element={<Article/> } path='news/:id/s' />
      <Route element={<Article/> } path='news/:id/:l' />

      <Route path='*' element={<Navigate to='/main'/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
