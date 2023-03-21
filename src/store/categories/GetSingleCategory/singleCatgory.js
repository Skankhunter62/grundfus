import {createSlice} from "@reduxjs/toolkit";

const singleCategoryLocalStorage = JSON.parse(localStorage.getItem('singleCategory'));
const initialState = singleCategoryLocalStorage || []

export const singleCategorySlice = createSlice({
    name: 'singleCategory',
    initialState,
    reducers: {
        singleCategoryAddItem: (state, action) => {
            if(state.length === 0){
                state.push(action.payload)
            }else{
                state.splice(0, 1, action.payload)
            }
        }
    }
})

export const singleCategoryReducer = singleCategorySlice.reducer
export const singleCategoryActions = singleCategorySlice.actions