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
    async (pageParams:IPageQueryParams|undefined={page_number:1,page_size:10},{rejectWithValue}) => {
    

        
        

    const response= await axios.get<FetchedNews>(BASE_URL+'search',{
            params:{
                
                apiKey:apiKey,
                page_size:pageParams.page_size,
                page_number:pageParams.page_number,
                category:pageParams?.categories?.join(','),
                keywords:pageParams?.keywords,
                domain_not:'arxiv.org'
            },
           
            
        })
        .then(res=>res.data.news
            
        )
        .catch(e=>{
           return  rejectWithValue(e.message)
        })
        
        return response
    }
)

export const fetchCategories = createAsyncThunk(
    'newsReducer/fetchCategories',
    async (_,{rejectWithValue}) => {
    
        

    const response= await axios.get(BASE_URL+'available/categories',{
            params:{
                apiKey:apiKey,
            },
           
            
        })
        .then(res=>{
            
            return res.data.categories
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
    categories:string[],
    currentCategories:string[],
    status:'pending'|'rejected'|'fulfilled'|'idle'
    error:string|null
}

const initialState={
    news:[],
    categories:[],
    currentCategories:['All'],
    status:'idle',
    error:null
} as INewsState

export interface ActionCategory{
    categories:string[],
    category?:string
}




const NewsSlice=createSlice({
    name:'newsReducer',
    initialState,
    reducers:{
      
        addCategory(state,action:PayloadAction<ActionCategory>){
            const lastAddedCategory=action.payload.categories[action.payload.categories.length-1]
            if(lastAddedCategory==='All'){
              state.currentCategories=['All']
            }
            else if(lastAddedCategory!=='All'){ 
                state.currentCategories=action.payload.categories?.filter(category=>category!=='All')
            }
            
        },
        removeCategory(state,action:PayloadAction<ActionCategory>){
            state.currentCategories=state.currentCategories.filter(category=>category!==action.payload.category)
            if(state.currentCategories.length===0){
              state.currentCategories=['All']
            }
        }
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
        [fetchCategories.pending.type]:(state)=>{
            state.status='pending'
        },
        [fetchCategories.fulfilled.type]:(state,action:PayloadAction<string[]>)=>{
            state.status='fulfilled'
            
            state.categories=action.payload
        },
        [fetchCategories.rejected.type]:(state,action:PayloadAction<string>)=>{
            state.status='rejected'
            state.error=action.payload
        },
    }
})

export const {addCategory, removeCategory} = NewsSlice.actions

export default NewsSlice.reducer;