import React, { useState } from "react";
import classes from "./ProductImg.module.css";
import MainProductImage from "./MainProductImage/MainProductImage";
import ProductImgCarousel from "./ProductImgCarousel/ProductImgCarousel";

const ProductImg = ({ singleProduct, firstImg, productSalePrice }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const changeMainImg = (index) => setImgIndex(index);
  return (
    <div className={classes.productImgBlock}>
      <MainProductImage
        productSalePrice={productSalePrice}
        img={singleProduct[imgIndex] || { src: "" }}
      />

      <div className={classes.productCarousel}>
        {singleProduct.map((img, index) => (
          <ProductImgCarousel
            index={index}
            mainImg={imgIndex}
            img={img}
            key={img.id}
            changeMainImg={changeMainImg}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImg;
