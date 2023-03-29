import React from "react";
import classes from "./MySmallProductCardSlider.module.css";
import ProductCardTitle from "../../FontsButtons/Titles/ProductCardTitle/ProductCardTitle";
import default_img from "../../../../assets/img/default_img.png";

const MySmallProductCardSlider = ({ product }) => {
  return (
    <div className={classes.mySmallProductCardSlider}>
      <div className={classes.mySmallProductCardSliderImg}>
        <img
          src={
            product.images.length !== 0 ? product.images[0].src : default_img
          }
          alt={
            product.images.alt === ""
              ? `Купить ${product.name} в Москве`
              : product.images.alt
          }
          className={classes.img}
        />
      </div>
      <ProductCardTitle product={product} />
    </div>
  );
};

export default MySmallProductCardSlider;
