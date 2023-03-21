import React from 'react';
import classes from './QuantityButtonBlock.module.css'
import MyQuantity from "../../../../components/regular_components/Products/ProductQuantity/MyQuantity";
import MyBuyNow from "../../../../components/UIUX/FontsButtons/Buttons/BuyNow/MyBuyNow";
import MyAddToCart from "../../../../components/UIUX/FontsButtons/Buttons/MyAddToCart/MyAddToCart";

const QuantityButtonBlock = ({product, countDecrease, countIncrease, counter, isExistsInCart}) => {
    return (
        <div className={classes.quantityButtonBlock}>
            <div className={classes.qntButtons}>
                <MyQuantity product={product} counter={counter} countDecrease={countDecrease} countIncrease={countIncrease} />
            </div>
            <div className={classes.cartButtons}>
                <MyAddToCart product={product} isCatalog={false} quantity={counter} isExistsInCart={isExistsInCart}/>
                <MyBuyNow product={product} quantity={counter}>Купить в 1 клик</MyBuyNow>
            </div>
        </div>
    );
};

export default QuantityButtonBlock;