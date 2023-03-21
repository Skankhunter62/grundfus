import React from "react";
import classes from "./HorizontalProductCard.module.css";
import HorizontalProductCardInfoBlock from "./HorizontalProductCartInfoBlock/HorizontalProductCardInfoBlock";
import HorizontalProductCardImgBlock from "./HorizontalProductCardImgBlock/HorizontalProductCardImgBlock";
import HorizontalProductCardCloseBlock from "./HorizontalProductCardCloseBlock/HorizontalProductCardCloseBlock";
import MyCheckboxRemove from "../../MyFunctionalComponents/MyCheckboxRemove/MyCheckboxRemove";
import { useActions } from "../../../../store/hooks/useActions";

const HorizontalProductCard = ({ product, isCatalog, selected = false }) => {
  const { addMassWishlist } = useActions();
  return (
    <div className={classes.horizontalProductCartWrapper}>
      {!isCatalog ? (
        <MyCheckboxRemove
          product={product}
          selected={selected}
          stateMassAddItemsObject={addMassWishlist}
        />
      ) : (
        ""
      )}
      <HorizontalProductCardImgBlock product={product} />
      <HorizontalProductCardInfoBlock product={product} />
      {!isCatalog ? (
        <HorizontalProductCardCloseBlock product={product} />
      ) : null}
    </div>
  );
};

export default HorizontalProductCard;
