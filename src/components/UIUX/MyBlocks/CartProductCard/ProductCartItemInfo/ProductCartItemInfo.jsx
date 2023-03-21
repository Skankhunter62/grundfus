import React from 'react';
import classes from './ProductCartItemInfo.module.css'
import ProductCartInfoTitle from "./ProductCartInfoTitle/ProductCartInfoTitle";
import ProductCartInfoSku from "./ProductCartInfoSku/ProductCartInfoSku";
import ProductCartInfoButtons from "./ProductCartInfoButtons/ProductCartInfoButtons";

const ProductCartItemInfo = ({product}) => {
    return (
        <div className={classes.productInfoBlock}>
            <ProductCartInfoTitle product={product} />
            <ProductCartInfoSku productSku={product.sku}/>
            <ProductCartInfoButtons product={product} />
        </div>
    );
};

export default ProductCartItemInfo;