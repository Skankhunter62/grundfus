import React from 'react';
import classes from './ProductCartItemPrice.module.css'

const ProductCartItemPrice = ({newPrice}) => {
    return (
        <div className={classes.productPriceBlock}>
            {Math.round(newPrice)} руб.
        </div>
    );
};

export default ProductCartItemPrice;