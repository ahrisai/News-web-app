import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import newsSlice from "./newsSlice";  
export const store = configureStore({
    reducer:{
        newsReducer:newsSlice
    }
})

export type AppDispatch= typeof store.dispatch
export const useAppDispatch:()=>AppDispatch = useDispatch
export type RootState=ReturnType <typeof store.getState>