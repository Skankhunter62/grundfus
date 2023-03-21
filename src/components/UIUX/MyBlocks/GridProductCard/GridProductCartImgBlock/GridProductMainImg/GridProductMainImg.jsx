import React, { useState } from "react";
import classes from "./GridProductMainImg.module.css";
import default_img from "../../../../../../assets/img/default_img.png";
const GridProductMainImg = ({ product, changePopupState }) => {
  return (
    <React.Fragment>
      <img
        src={
          product?.images?.length !== 0 ? product?.images[0]?.src : default_img
        }
        alt={
          product?.images?.alt === undefined
            ? `Купить ${product?.name} в Москве`
            : product?.images?.alt
        }
        className={classes.gridProductCartImgItem}
        width={300}
        height={300}
        onClick={changePopupState}
      />
    </React.Fragment>
  );
};

export default GridProductMainImg;
