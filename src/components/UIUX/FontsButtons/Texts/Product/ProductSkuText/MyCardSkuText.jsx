import React from 'react';
import classes from './MyCardSkuText.module.css'

const MyCardSkuText = ({sku}) => {
    return (
        <p className={classes.cartSkuText}>
            Артикул: {sku}
        </p>
    );
};

export default MyCardSkuText;