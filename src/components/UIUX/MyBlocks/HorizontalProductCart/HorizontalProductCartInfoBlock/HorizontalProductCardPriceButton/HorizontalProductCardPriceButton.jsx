import React from 'react';
import classes from './HorizontalProductCardPriceButton.module.css'
import HorizontalProductCardPriceRating from "./HorizontalProductCardPriceRating/HorizontalProductCardPriceRating";
import HorizontalProductCardBuyBtn from "./HorizontalProductCardBuyBtn/HorizontalProductCardBuyBtn";

const HorizontalProductCardPriceButton = ({product}) => {
    return (
        <div className={classes.horizontalProductCartPriceButton}>
            <HorizontalProductCardPriceRating product={product}/>
            <HorizontalProductCardBuyBtn product={product}/>
        </div>
    );
};

export default HorizontalProductCardPriceButton;