import React from 'react';
import classes from './GridActionBlock.module.css'
import MyCompare from "../../../../../regular_components/Products/ProductActions/MyCompare/MyCompare";
import MyWishlist from "../../../../../regular_components/Products/ProductActions/MyWishlist/MyWishlist";

const GridActionBlock = ({product}) => {
    return (
        <div className={classes.gridActionBlock}>
            <MyCompare product={product}/>
            <MyWishlist product={product} headerIcon={false}/>
        </div>
    );
};

export default GridActionBlock;