import { createSlice } from "@reduxjs/toolkit";

const productListLocalStorage = JSON.parse(localStorage.getItem("goods"));
const initialState = productListLocalStorage || [];

export const goodsListSlice = createSlice({
  name: "goodsList",
  initialState,
  reducers: {
    addGoodsListProducts: (state, action) => {
      state.length === 0
        ? state.push(...action.payload)
        : state.splice(0, state.length, ...action.payload);
    },
    updateGoodsListProducts: (state, action) => {
      state.push(...action.payload);
    },
  },
});

export const goodsListReducer = goodsListSlice.reducer;
export const goodsListActions = goodsListSlice.actions;
