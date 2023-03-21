import React from "react";
import classes from "./GridProductCardImgBlock.module.css";
import GridActionBlock from "./GridActionBlock/GridActionBlock";
import GridProductMainImg from "./GridProductMainImg/GridProductMainImg";
import SaleProductCardLabel from "../../../Products/SaleProductCardLabel/SaleProductCardLabel";

const GridProductCardImgBlock = ({ product, changePopupState }) => {
  return (
    <div className={classes.gridProductCartImgBlock}>
      <GridProductMainImg
        product={product}
        changePopupState={changePopupState}
      />
      {product?.sale_price === "" ? (
        ""
      ) : (
        <SaleProductCardLabel product={product} />
      )}
      <GridActionBlock product={product} />
    </div>
  );
};

export default GridProductCardImgBlock;
