import React from "react";
import classes from "./ProductPageTabsAndUpSallesButton.module.css";

const ProductPageTabsAndUpSallesButton = ({
  children,
  isTabs = false,
  isActive = false,
  change,
}) => {
  return (
    <button
      disabled={isActive}
      onClick={() => change()}
      className={
        isTabs
          ? isActive
            ? classes.ProductPageTabsButton
            : classes.ProductPageTabsButtonDisactive
          : isActive
          ? classes.ProductPageTabsAndUpSallesButton
          : classes.ProductPageTabsAndUpSallesButtonDisactive
      }
    >
      {children}
    </button>
  );
};

export default ProductPageTabsAndUpSallesButton;
