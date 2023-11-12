import {createSlice,createAsyncThunk,PayloadAction} from '@reduxjs/toolkit'
import { INewsItem } from '../types/NewsTypes'
import axios from 'axios'

const BASE_URL = 'https://api.currentsapi.services/v1/latest-news'
const apiKey='IQsBPaf0Gqodj9Q-2pY4YY5l13S2lu7t7v0j_yjss5zUHgUP'


export const fetchNews = createAsyncThunk(
    'newsReducer/fetchNews',
    async (_,{rejectWithValue}) => {
    const response= await axios.get(BASE_URL,{
            params:{
                apiKey:apiKey
            }
        })
        .then(res=>
            
            
            res.data.news
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