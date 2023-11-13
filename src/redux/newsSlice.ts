import {createSlice,createAsyncThunk,PayloadAction} from '@reduxjs/toolkit'
import { INewsItem } from '../types/NewsTypes'
import axios from 'axios'
const BASE_URL= import.meta.env.VITE_NEWS_BASE_API_URL
const apiKey= import.meta.env.VITE_NEWS_API_KEY

console.log(import.meta.env.VITE_NEWS_BASE_API_URL)


export const fetchNews = createAsyncThunk(
    'newsReducer/fetchNews',
    async (_,{rejectWithValue}) => {
    const response= await axios.get(BASE_URL,{
            params:{
                apiKey:apiKey,
                q:'anything',
                pageSize:30,
                from:'2023-30-12',
                to:'2023-30-10T00:00:00'
            },
            headers: {
                "Access-Control-Allow-Credentials": "true",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
                "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
              }
            
        })
        .then(res=>{
            console.log(res.data)
            
          return  res.data.articles}
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