import React from "react";
import classes from "./GridProductCardPriceAddCart.module.css";
import GridProductCardPrice from "./GridProductCardPrice/GridProductCardPrice";
import MyAddToCart from "../../../../FontsButtons/Buttons/MyAddToCart/MyAddToCart";

const GridProductCardPriceAddCart = ({ product }) => {
  const prevent = (e) => {
    e.preventDefault();
  };
  return (
    <div className={classes.gridProductCardPriceAddCart}>
      <GridProductCardPrice product={product} />
      <div onClick={prevent}>
        <MyAddToCart isCatalog={true} product={product} />
      </div>
    </div>
  );
};

export default GridProductCardPriceAddCart;
