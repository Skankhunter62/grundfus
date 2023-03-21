import React from "react";
import classes from "./GridProductCardInfoBlock.module.css";
import GridProductCardTitleRatingSkuBlock from "./GridProductCardTitleRaingSkuBlock/GridProductCardTitleRatingSkuBlock";
import GridProductCardPriceAddCart from "./GridProductCardPriceAddCart/GridProductCardPriceAddCart";

const GridProductCardInfoBlock = ({ product }) => {
  return (
    <div className={classes.gridProductCardInfoBlock}>
      <GridProductCardTitleRatingSkuBlock product={product} />
      <GridProductCardPriceAddCart product={product} />
    </div>
  );
};

export default GridProductCardInfoBlock;
