import {createSlice} from "@reduxjs/toolkit";

const initialState = []

export const compareAttributesListSlice = createSlice({
    name: 'compareAttributes',
    initialState,
    reducers: {
        compareAttributesListAddItem: (state, action) => {
            state.push(...action.payload)
        },
        compareAttributesListRemoveItem: (state, action) => {
            return state.filter(p => p.id !== action.payload.id)
        }
    }
})

export const compareAttributesListReducer = compareAttributesListSlice.reducer
export const compareAttributesListActions = compareAttributesListSlice.actions