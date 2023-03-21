import React from 'react';
import classes from './HeaderMiddleSectionAction.module.css'
import MyWishlist from "../../../../regular_components/Products/ProductActions/MyWishlist/MyWishlist";
import MyCompare from "../../../../regular_components/Products/ProductActions/MyCompare/MyCompare";

const HeaderMiddleSectionAction = () => {
    return (
        <div className={classes.HeaderMiddleSectionActionBlock}>
            <MyWishlist headerIcon={true}/>
            <MyCompare headerIcon={true}/>
        </div>
    );
};

export default HeaderMiddleSectionAction;