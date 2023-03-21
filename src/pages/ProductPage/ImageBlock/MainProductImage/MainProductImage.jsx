import React, { useState } from "react";
import classes from "./MainProductImage.module.css";
import SaleProductCardLabel from "../../../../components/UIUX/Products/SaleProductCardLabel/SaleProductCardLabel";
import MainProductImagePopup from "./MainProductImagePopup/MainProductImagePopup";

const MainProductImage = ({ img, productSalePrice }) => {
  const [isShown, setIsShown] = useState(false);
  const changePopupState = (event) => {
    setIsShown((current) => !current);
  };
  return (
    <div className={classes.mainProductImageBlock}>
      {isShown ? (
        <>
          <MainProductImagePopup
            img={img}
            changePopupState={changePopupState}
          />
        </>
      ) : null}
      {productSalePrice.sale_price === "" ? (
        ""
      ) : (
        <SaleProductCardLabel product={productSalePrice} />
      )}
      <img
        src={img.src}
        alt={img.alt}
        className={classes.img}
        onClick={changePopupState}
      />
    </div>
  );
};

export default MainProductImage;
