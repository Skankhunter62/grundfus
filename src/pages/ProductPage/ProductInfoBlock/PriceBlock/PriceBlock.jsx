import React from "react";
import classes from "./PriceBlock.module.css";

const PriceBlock = ({ regularPrice, salePrice }) => {
  return (
    <div className={classes.priceBlock}>
      <div className={classes.regularPrice}>
        {salePrice ? (
          <del>{Math.round(regularPrice)} руб.</del>
        ) : (
          <div>{Math.round(regularPrice)} руб.</div>
        )}
      </div>
      {salePrice ? (
        <div className={classes.salePrice}>{Math.round(salePrice)} руб.</div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default PriceBlock;
