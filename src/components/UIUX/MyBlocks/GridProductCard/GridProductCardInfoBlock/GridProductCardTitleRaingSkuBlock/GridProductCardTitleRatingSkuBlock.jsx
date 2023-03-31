import React from "react";
import classes from "./GridProductCardTitleRatingSkuBlock.module.css";
import ProductCardTitle from "../../../../FontsButtons/Titles/ProductCardTitle/ProductCardTitle";
import MaterialUiRating from "../../../../MaterialUIRating/MaterialUIRating";
import MyCardSkuText from "../../../../FontsButtons/Texts/Product/ProductSkuText/MyCardSkuText";

const GridProductCardTitleRatingSkuBlock = ({ product, popup }) => {
  return (
    <div className={classes.gridProductCardTitleRatingSkuBlock}>
      <ProductCardTitle product={product} popup={popup} />
      <div className={classes.test}>
        <MaterialUiRating product={product} fromCatalog={true} />
      </div>
      <MyCardSkuText sku={product.sku} />
    </div>
  );
};

export default GridProductCardTitleRatingSkuBlock;
