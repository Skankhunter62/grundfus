import React from 'react';
import classes from './CardOldPrice.module.css'

const CardOldPrice = ({price}) => {
    return (
        <div className={classes.saleStyles}>
            <span className={classes.priceSaleStyling}>
                {Math.round(price)} руб.
            </span>
        </div>
    );
};

export default CardOldPrice;