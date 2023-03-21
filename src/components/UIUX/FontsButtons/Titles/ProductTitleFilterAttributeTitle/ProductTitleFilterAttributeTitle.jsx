import React from 'react';
import classes from './ProductTitleFilterAttributeTitle.module.css'

const ProductTitleFilterAttributeTitle = ({children, isProduct = true}) => {
    return (
        <>
            {
                isProduct
                    ? <h2 className={classes.ProductTitleFilterAttributeTitle}>{children}</h2>
                    : <p className={classes.ProductTitleFilterAttributeTitleFilter}>{children}</p>
            }
        </>
    );
};

export default ProductTitleFilterAttributeTitle;