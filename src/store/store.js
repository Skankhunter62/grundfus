import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "./cart/Cart";
import {cartMasReducer} from "./cart/CartMassRemove";
import {wishlistReducer} from "./wishlist/Wishlist";
import {wishlistMassReducer} from "./wishlist/WishlistMassRemove";
import {compareMassReducer} from "./compare/CompareMassRemove";
import {comparelistReducer} from "./compare/Compare";
import {productsAttributesReducer} from "./ProductsStore/products_filter_attributes/ProductsFilterAttributes";
import {productsListReducer} from "./ProductsStore/products/products";
import {filterProductsListReducer} from "./ProductsStore/productsListByFilters/productsListByFilters";
import {categoriesReducer} from "./categories/GetAllCategories/allCategories";
import {singleCategoryReducer} from "./categories/GetSingleCategory/singleCatgory";
import {goodsListReducer} from "./ProductsStore/all_products/allProducts";
import {compareAttributesListReducer} from "./compare/CompareAttributes";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        cartRemove: cartMasReducer,
        wishlist: wishlistReducer,
        wishlistMassRemove: wishlistMassReducer,
        compare: comparelistReducer,
        compareMassRemove: compareMassReducer,
        compareAttributes: compareAttributesListReducer,
        productsList: productsListReducer,
        productAttributes: productsAttributesReducer,
        filterProductsList: filterProductsListReducer,
        categories: categoriesReducer,
        singleCategory: singleCategoryReducer,
        goodsList: goodsListReducer
    },
})

