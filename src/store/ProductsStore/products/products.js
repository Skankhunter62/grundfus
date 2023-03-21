import {createSlice} from '@reduxjs/toolkit';

const initialState = []

export const productsSlice = createSlice({
    name: 'productsList',
    initialState,
    reducers: {
        addProducts: (state, action) => {
            state.length === 0 ? state.push(...action.payload) : state.splice(0, state.length, ...action.payload)
        },
        removeProducts: (state, action)=>{
            return state.filter(p => p.id !== action.payload.id)
        },
        updateProducts: (state, action) => {
            state.push(...action.payload)
        }
    }
})

export const productsListReducer = productsSlice.reducer
export const productsListActions = productsSlice.actions