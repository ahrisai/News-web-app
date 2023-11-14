import { INewsItem } from './../types/NewsTypes';
import {createSlice,createAsyncThunk,PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'
import { IPageQueryParams} from '../types/QueryTypes';
const BASE_URL= import.meta.env.VITE_NEWS_BASE_API_URL
const apiKey= import.meta.env.VITE_NEWS_API_KEY

interface FetchedNews {
    news:INewsItem[]
}



export const fetchNews = createAsyncThunk(
    'newsReducer/fetchNews',
    async (pageParams:IPageQueryParams={page_number:1,page_size:10},{rejectWithValue}) => {
    
        

    const response= await axios.get<FetchedNews>(BASE_URL+'search',{
            params:{
                
                apiKey:apiKey,
                page_size:pageParams.page_size,
                page_number:pageParams.page_number
            },
           
            
        })
        .then(res=>{
            console.log(res.data)
            const news=res.data.news
            const newsWithoutArxiv=news.filter(item=>!item.url?.includes('arxiv'))
            return newsWithoutArxiv
           
        }
        )
        .catch(e=>{
           return  rejectWithValue(e.message)
        })
        return response
    }
)



interface INewsState{
    news:INewsItem[],
    status:'pending'|'rejected'|'fulfilled'|'idle'
    error:string|null
}

const initialState={
    news:[],
    status:'idle',
    error:null
} as INewsState

const NewsSlice=createSlice({
    name:'newsReducer',
    initialState,
    reducers:{

    },
    extraReducers:{
        [fetchNews.pending.type]:(state)=>{
            state.status='pending'
        },
        [fetchNews.fulfilled.type]:(state,action:PayloadAction<INewsItem[]>)=>{
            state.status='fulfilled'
            
            state.news=action.payload
        },
        [fetchNews.rejected.type]:(state,action:PayloadAction<string>)=>{
            state.status='rejected'
            state.error=action.payload
        },
    }
})

// export const { setTodos,changeCompleted } = todoSlice.actions;
export default NewsSlice.reducer;