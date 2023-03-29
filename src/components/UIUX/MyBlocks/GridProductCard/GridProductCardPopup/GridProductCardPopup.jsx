import React from "react";
import classes from "./GridProductCardPopup.module.css";
import GridProductCardInfoBlock from "../GridProductCardInfoBlock/GridProductCardInfoBlock";
import ProductAttributes from "../../../../../pages/ProductPage/ProductAttributes/ProductAttributes";
import SaleProductCardLabel from "../../../Products/SaleProductCardLabel/SaleProductCardLabel";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

const GridProductCardPopup = ({ product, changePopupState }) => {
  console.log(product);
  const description = parse(product.description);
  let parsed = "";
  if (description.length !== 0) {
    parsed = description[0].props.children;
  }
  const getParsed = () => {
    if (parsed.length > 700) {
      return parsed.substring(0, 700) + "...";
    } else {
      return parsed;
    }
  };
  const getClasses = () => {
    if (parsed.length < 20) {
      return classes.GridProductCardPopupMainInfoNoDesc;
    } else {
      return classes.GridProductCardPopupMainInfo;
    }
  };
  const prevent = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <>
      {/* <div className={classes.GridProductCardPopupModal} onClick={prevent}> */}
      <div
        className={classes.GridProductCardPopupModal}
        onClick={changePopupState}
      >
        <span className={classes.GridProductCardPopupClose}>&times;</span>
        <div
          className={classes.GridProductCardPopupMainInfoWrapper}
          onClick={prevent}
        >
          <div className={classes.GridProductCardPopupModalContent}>
            <div className={getClasses()}>
              <div className={classes.GridProductCardPopupImgWrapper}>
                <img
                  src={
                    product?.images?.length !== 0
                      ? product?.images[0]?.src
                      : null
                  }
                  alt=""
                  className={classes.GridProductCardPopupImage}
                />
              </div>
              {product?.sale_price === "" ? (
                ""
              ) : (
                <SaleProductCardLabel product={product} />
              )}
              <div className={classes.GridProductCardPopupInfoBlock}>
                <GridProductCardInfoBlock product={product} />
              </div>
            </div>
            {parsed.length > 20 ? (
              <div className={classes.GridProductCardPopupAdditionalInfo}>
                {getParsed()}
              </div>
            ) : null}
          </div>
          {product.attributes.length !== 0 ? (
            <>
              <ProductAttributes product={product} isPopup={true} />
              <Link
                to={`/catalog/${product.categories[0].slug}/${product.slug}`}
                state={{ product }}
                className={classes.GridProductCardPopupProductLink}
              >
                Все характеристики {">"}
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default GridProductCardPopup;
