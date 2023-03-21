import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {cartActions} from "../cart/Cart";
import {cartMasActions} from "../cart/CartMassRemove";
import {wishlistActions} from "../wishlist/Wishlist";
import {comparelistActions} from "../compare/Compare";
import {wishlistMassActions} from "../wishlist/WishlistMassRemove";
import {compareMassActions} from "../compare/CompareMassRemove";
import {productsListActions} from "../ProductsStore/products/products";
import {productsAttributesActions} from "../ProductsStore/products_filter_attributes/ProductsFilterAttributes";
import {filterProductsListActions} from "../ProductsStore/productsListByFilters/productsListByFilters";
import {categoriesActions} from "../categories/GetAllCategories/allCategories";
import {singleCategoryActions} from "../categories/GetSingleCategory/singleCatgory";
import {goodsListActions} from "../ProductsStore/all_products/allProducts";
import {compareAttributesListActions} from "../compare/CompareAttributes";

const allActions = {
    ...cartActions,
    ...cartMasActions,
    ...wishlistActions,
    ...comparelistActions,
    ...wishlistMassActions,
    ...compareMassActions,
    ...productsListActions,
    ...productsAttributesActions,
    ...filterProductsListActions,
    ...categoriesActions,
    ...singleCategoryActions,
    ...goodsListActions,
    ...compareAttributesListActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(allActions, dispatch)
}