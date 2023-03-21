import React from 'react';
import classes from './ProductCardAddToCardButton.module.css'

const ProductCardAddToCardButton = ({children, isCatalog=false, oneClick=false}) => {
    return (
        <button className={
            isCatalog
                ? classes.ProductCardAddToCardButtonCatalog
                : classes.ProductCardAddToCardButton
        }>
            {children}
        </button>
    );
};

export default ProductCardAddToCardButton;