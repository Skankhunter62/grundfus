import React from 'react';
import classes from './RelatedProductsBlock.module.css';
import {Link} from "react-router-dom";

const RelatedProductsBlock = ({product}) => {
    return (
        <div className={classes.mainRelatedSmallBlock}>
            <div className={classes.relatedProductImg}>
                <img src={product.images[0].src} alt="" className={classes.singleRelatedImg}/>
            </div>
            <div className={classes.relatedProductInfo}>
                <Link to={`/catalog/product/${product.slug}`} state={{product}} className={classes.relatedProductTitle}>{product.name}</Link>
                <div className={classes.relatedProductPriceCart}>
                    <div className={classes.relatedProductPrice}>
                        {Math.round(product.price)} руб.
                    </div>
                    <div>
                        <button className={classes.relatedProductButton}>Купить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedProductsBlock;