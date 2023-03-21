import {createSlice} from '@reduxjs/toolkit';

const initialState = []

export const productAttributesSlice = createSlice({
    name: 'productAttributes',
    initialState,
    reducers: {
        addProductsAttributes: (state, action) => {
            action.payload.map(item=>{
                state.push(...item.attributes)
            })
        },
        removeAllProductsAttributes: (state, action) => {
            return [];
        }
    }
})

export const productsAttributesReducer = productAttributesSlice.reducer
export const productsAttributesActions = productAttributesSlice.actions