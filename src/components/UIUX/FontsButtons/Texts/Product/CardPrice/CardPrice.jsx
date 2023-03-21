
import React from 'react';
import classes from './CardPrice.module.css'

const CardPrice = ({price}) => {
    return (
        <span className={classes.myCardPrice}>
            {Math.round(price)} руб.
        </span>
    );
};

export default CardPrice;