import {createSlice} from "@reduxjs/toolkit";

const wishlistLocalStorage = JSON.parse(localStorage.getItem('wishlist'))
const initialState = wishlistLocalStorage || []

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        wishlistAddItem: (state, action) => {
            state.push(action.payload)
        },
        wishlistRemoveItem: (state, action) => {
            return state.filter(p => p.id !== action.payload.id)
        }
    }
})

export const wishlistReducer = wishlistSlice.reducer
export const wishlistActions = wishlistSlice.actions