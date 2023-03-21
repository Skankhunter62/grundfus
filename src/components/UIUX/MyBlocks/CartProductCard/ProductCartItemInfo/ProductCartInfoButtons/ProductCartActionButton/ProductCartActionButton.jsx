import React from 'react';
import classes from './ProductCartActionButton.module.css'
import {useActions} from "../../../../../../../store/hooks/useActions";

const ProductCartActionButton = ({product}) => {
    const {wishlistAddItem} = useActions()
    return (
        <div className={classes.addingBtn} onClick={() => wishlistAddItem(product)}>
            В избранное
        </div>
    );
};

export default ProductCartActionButton;