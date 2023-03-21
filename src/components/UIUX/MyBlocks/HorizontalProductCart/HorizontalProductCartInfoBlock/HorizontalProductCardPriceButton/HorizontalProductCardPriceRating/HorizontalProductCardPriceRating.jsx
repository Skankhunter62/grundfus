import React from 'react';
import classes from './HorizontalProductCardPriceRating.module.css'
import CardPrice from "../../../../../FontsButtons/Texts/Product/CardPrice/CardPrice";
import MaterialUiRating from "../../../../../MaterialUIRating/MaterialUIRating";

const HorizontalProductCardPriceRating = ({product}) => {
    return (
        <div className={classes.priceRatingBlock}>
            <CardPrice price={product.price}/>
            <MaterialUiRating product={product}/>
        </div>
    );
};

export default HorizontalProductCardPriceRating;