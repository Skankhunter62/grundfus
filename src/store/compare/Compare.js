import {createSlice} from "@reduxjs/toolkit";

const compareLocalStorage = JSON.parse(localStorage.getItem('compare'))
const initialState = compareLocalStorage || []

export const comparelistSlice = createSlice({
    name: 'compare',
    initialState,
    reducers: {
        comparelistAddItem: (state, action) => {
            state.push(action.payload)
        },
        comparelistRemoveItem: (state, action) => {
            return state.filter(p => p.id !== action.payload.id)
        }
    }
})

export const comparelistReducer = comparelistSlice.reducer
export const comparelistActions = comparelistSlice.actions