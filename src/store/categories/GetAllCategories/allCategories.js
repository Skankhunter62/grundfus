import {createSlice} from "@reduxjs/toolkit";

const categoriesLocalStorage = JSON.parse(localStorage.getItem('categories'))
const initialState = categoriesLocalStorage || []

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        categoryAddAllItems: (state, action) => {
            if(state.length === 0){
                state.push(...action.payload)
            }else if(!state.map(el => el.value).includes(action.payload.value)){
                state.push(action.payload)
            }
        }
    }
})

export const categoriesReducer = categoriesSlice.reducer
export const categoriesActions = categoriesSlice.actions