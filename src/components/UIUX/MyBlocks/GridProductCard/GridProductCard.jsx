import React from "react";
import classes from "./GridProductCard.module.css";
import GridProductCardImgBlock from "./GridProductCartImgBlock/GridProductCardImgBlock";
import GridProductCardInfoBlock from "./GridProductCardInfoBlock/GridProductCardInfoBlock";
import { Link } from "react-router-dom";

const GridProductCard = ({
  product,
  slider,
  sliderChangePopupState,
  catalogChangePopupState,
}) => {
  const changePopupState = () => {
    if (!slider) {
      catalogChangePopupState(product);
    } else {
      sliderChangePopupState(product);
    }
  };
  const prevent = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <>
      <Link
        to={`/catalog/${product.categories[0].slug}/${product.slug}`}
        state={{ product }}
        className={classes.linkFullWidth}
      >
        <div
          className={`${
            slider ? classes.gridProductCart : classes.gridProductCartDefault
          }`}
        >
          <div onClick={prevent}>
            <GridProductCardImgBlock
              product={product}
              changePopupState={changePopupState}
            />
          </div>
          <GridProductCardInfoBlock product={product} />
        </div>
      </Link>
    </>
  );
};

export default GridProductCard;
