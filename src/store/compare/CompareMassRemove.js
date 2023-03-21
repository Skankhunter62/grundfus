import {createSlice} from "@reduxjs/toolkit";

const initialState = []

export const compareMassRemoveSlice = createSlice({
    name: 'compareMassRemove',
    initialState,
    reducers:{
        addMassCompare: (state, action) => {
            state.push(action.payload)
        },
        removeMassCompare: (state, action) => {
            return state.filter(p => p.id !== action.payload.id)
        },
        addManyMassCompare: (state, action) => {
            state.push(...action.payload)
        },
        massRemoveMassCompare: (state, action) => {
            return []
        }
    }
})

export const compareMassReducer = compareMassRemoveSlice.reducer
export const compareMassActions = compareMassRemoveSlice.actions