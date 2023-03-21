import React from 'react';
import classes from './HorizontalProductCardInfoBlock.module.css'
import HorizontalProductCardTitleSku from "./HorizontalProductCardTitleSku/HorizontalProductCardTitleSku";
import HorizontalProductCardAttributes from "./HorizontalProductCardAttributes/HorizontalProductCardAttributes";
import HorizontalProductCardPriceButton from "./HorizontalProductCardPriceButton/HorizontalProductCardPriceButton";

const HorizontalProductCardInfoBlock = ({product}) => {
    const currentAttributes = product?.attributes.slice(0, 3);
    return (
        <div className={classes.horizontalProductCartInfoBlock}>
            <HorizontalProductCardTitleSku product={product} />
            <HorizontalProductCardAttributes attributes={currentAttributes}/>
            <HorizontalProductCardPriceButton product={product} />
        </div>
    );
};

export default HorizontalProductCardInfoBlock;