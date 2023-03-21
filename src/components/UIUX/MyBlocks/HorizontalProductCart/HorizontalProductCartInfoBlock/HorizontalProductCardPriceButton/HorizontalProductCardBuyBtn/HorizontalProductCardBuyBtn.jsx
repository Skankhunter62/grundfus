import React from 'react';
import classes from './HorizontalProductCardBuyBtn.module.css'
import MyWishlist from "../../../../../../regular_components/Products/ProductActions/MyWishlist/MyWishlist";
import MyCompare from "../../../../../../regular_components/Products/ProductActions/MyCompare/MyCompare";
import MyAddToCart from "../../../../../FontsButtons/Buttons/MyAddToCart/MyAddToCart";

const HorizontalProductCardBuyBtn = ({product}) => {
    return (
        <div className={classes.horizontalProductCardBuyBtn}>
            <MyCompare product={product}/>
            <MyWishlist product={product}/>
            <MyAddToCart product={product} isCatalog={true}/>
        </div>
    );
};

export default HorizontalProductCardBuyBtn;