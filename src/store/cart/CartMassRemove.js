import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

export const cartMasRemoveSlice = createSlice({
    name: 'cartRemove',
    initialState,
    reducers:{
        addCartItem: (state, action) => {
            state.push(action.payload)
        },
        removeCartList: (state, action) => {
            return state.filter(p => p.id !== action.payload.id)
        },
        addCartItems: (state, action) => {
            state.push(...action.payload)
        },
        massRemoveCartItems: (state, action) => {
            return []
        }
    }
})

export const cartMasReducer = cartMasRemoveSlice.reducer
export const cartMasActions = cartMasRemoveSlice.actions