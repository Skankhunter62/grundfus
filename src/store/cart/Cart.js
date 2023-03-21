import {createSlice} from "@reduxjs/toolkit";

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'))
const initialState = cartFromLocalStorage || [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            if(!state.some(element => element.id === action.payload.id)){
                state.push(action.payload)
            }else{
                let index = state.findIndex((i) => i.id === action.payload.id);
                if (index !== -1) {
                    state[index].quantity += action.payload.quantity
                }
            }

        },
        removeItem: (state, action) => {
            return state.filter(p => p.id !== action.payload.id)
        },
        masRemoveItems: (state, action) => {
            return state.filter(p => p.id !== action.payload.id)
        },
        updateItem: (state, action) => {
            let index = state.findIndex((i) => i.id === action.payload.id);
            if (index !== -1) {
                state[index].quantity = action.payload.quantity
            }
        }
    }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions