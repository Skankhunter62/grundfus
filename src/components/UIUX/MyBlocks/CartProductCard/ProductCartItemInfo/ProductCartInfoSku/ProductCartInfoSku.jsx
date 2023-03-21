import React from 'react';
import classes from './ProductCartInfoSku.module.css'

const ProductCartInfoSku = ({productSku}) => {
    return (
        <div className={classes.skuText}>
            Артикул: {productSku}
        </div>
    );
};

export default ProductCartInfoSku;