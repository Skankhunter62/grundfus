import React from 'react';
import classes from './HorizontalProductCardTitleSku.module.css'
import ProductCardTitle from "../../../../FontsButtons/Titles/ProductCardTitle/ProductCardTitle";
import MyCardSkuText from "../../../../FontsButtons/Texts/Product/ProductSkuText/MyCardSkuText";

const HorizontalProductCardTitleSku = ({product}) => {
    return (
        <div className={classes.productCartTitleSku}>
            <ProductCardTitle product={product}/>
            <MyCardSkuText sku={product.sku}/>
        </div>
    );
};

export default HorizontalProductCardTitleSku;