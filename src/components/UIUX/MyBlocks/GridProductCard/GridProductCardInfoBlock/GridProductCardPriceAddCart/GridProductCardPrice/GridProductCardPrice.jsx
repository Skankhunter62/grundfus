import React from "react";
import classes from "./GridProductCardPrice.module.css";
import CardPrice from "../../../../../FontsButtons/Texts/Product/CardPrice/CardPrice";
import CardOldPrice from "../../../../../FontsButtons/Texts/Product/CardOldPrice/CardOldPrice";
import CardSalePrice from "../../../../../FontsButtons/Texts/Product/CardSalePrice/CardSalePrice";

const GridProductCardPrice = ({ product }) => {
  return (
    <React.Fragment>
      {product.sale_price === "" ? (
        <CardPrice price={product.regular_price} />
      ) : (
        <div className={classes.productCartPriceBlock}>
          <CardOldPrice price={product.regular_price} />
          <CardSalePrice salePrice={product.sale_price} />
        </div>
      )}
    </React.Fragment>
  );
};

export default GridProductCardPrice;
