import React from 'react';
import classes from './ProductTitle.module.css'
import PostsPagesTitle from "../../../../components/UIUX/FontsButtons/Titles/PostsPagesTitle/PostsPagesTitle";

const ProductTitle = ({title}) => {
    return (
        <div className={classes.titleBlock}>
            <PostsPagesTitle isPageTitle={true}>{title}</PostsPagesTitle>
        </div>
    );
};

export default ProductTitle;