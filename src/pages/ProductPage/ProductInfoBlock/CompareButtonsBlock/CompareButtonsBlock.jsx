import React from 'react';
import classes from './CompareButtonsBlock.module.css'
import MyCompare from "../../../../components/regular_components/Products/ProductActions/MyCompare/MyCompare";
import MyWishlist from "../../../../components/regular_components/Products/ProductActions/MyWishlist/MyWishlist";

const CompareButtonsBlock = ({product}) => {
    return (
        <div className={classes.actionButtonsBlock}>
            <MyCompare product={product} extended={true} />
            <MyWishlist product={product} extended={true} />
        </div>
    );
};

export default CompareButtonsBlock;