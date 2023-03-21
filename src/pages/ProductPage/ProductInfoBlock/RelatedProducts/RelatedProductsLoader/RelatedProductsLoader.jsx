import React from 'react';
import classes from './RelatedProductsLoader.module.css'
import {ClimbingBoxLoader} from "react-spinners";

const RelatedProductsLoader = () => {
    return (
        <div className={classes.mainRelatedSmallLoaderBlock}>
            <ClimbingBoxLoader color="#003767" size={10} />
        </div>
    );
};

export default RelatedProductsLoader;