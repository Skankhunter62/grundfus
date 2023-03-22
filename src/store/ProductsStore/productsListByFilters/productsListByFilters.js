import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const filterProductsSlice = createSlice({
  name: "filterProductsList",
  initialState,
  reducers: {
    addProductsToFilterList: (state, action) => {
      state.length === 0
        ? state.push(...action.payload)
        : state.splice(0, state.length, ...action.payload);
    },
  },
});

export const filterProductsListReducer = filterProductsSlice.reducer;
export const filterProductsListActions = filterProductsSlice.actions;
