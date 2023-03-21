import {createSlice} from "@reduxjs/toolkit";

const initialState = []

export const wishlistMassRemoveSlice = createSlice({
    name: 'wishlistMassRemove',
    initialState,
    reducers:{
        addMassWishlist: (state, action) => {
            state.push(action.payload)
        },
        removeMassWishlist: (state, action) => {
            return state.filter(p => p.id !== action.payload.id)
        },
        addManyMassWishlist: (state, action) => {
            state.push(...action.payload)
        },
        massRemoveMassWishlist: (state, action) => {
            return []
        }
    }
})

export const wishlistMassReducer = wishlistMassRemoveSlice.reducer
export const wishlistMassActions = wishlistMassRemoveSlice.actions