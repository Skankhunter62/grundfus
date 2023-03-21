import React from 'react';
import classes from './ProductCartInfoTitle.module.css'
import {Link} from "react-router-dom";

const ProductCartInfoTitle = ({product}) => {
    return (
        <Link to={`/catalog/${product.categories[0].slug}/${product.slug}`} state={{product}} className={classes.productTitle}>
            {product.name}
        </Link>
    );
};

export default ProductCartInfoTitle;