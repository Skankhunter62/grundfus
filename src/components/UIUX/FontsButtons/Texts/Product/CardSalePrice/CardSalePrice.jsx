import React from "react";
import classes from "./CardSalePrice.module.css";

const CardSalePrice = ({ salePrice }) => {
  return (
    <div className={classes.productCartSalePrice}>
      <span>{Math.round(salePrice)} руб.</span>
    </div>
  );
};

export default CardSalePrice;
