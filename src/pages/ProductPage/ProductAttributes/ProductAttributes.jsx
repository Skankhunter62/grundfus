import React, { useEffect, useState } from "react";
import AttributeCart from "./AttributeCart/AttributeCart";
import classes from "./ProductAttributes.module.css";
import PostsPagesTitle from "../../../components/UIUX/FontsButtons/Titles/PostsPagesTitle/PostsPagesTitle";

const ProductAttributes = ({ product, isPopup }) => {
  const [attributePages, setAttributePages] = useState(0);
  const defaultCount = 4;
  const popupAttrBlockClasses = !isPopup
    ? classes.attributeBlock
    : classes.attributeBlockPopup;
  useEffect(() => {
    if (product.attributes) {
      let arrayLen = product.attributes.length || 4;
      setAttributePages(Math.round(arrayLen / defaultCount));
    }
  }, [product]);
  return (
    <div className={product.attributes.length === 0 ? classes.disabled : ""}>
      {!isPopup ? (
        <PostsPagesTitle>
          Технические характеристики {product.name}
        </PostsPagesTitle>
      ) : null}
      <div className={popupAttrBlockClasses}>
        {!isPopup ? (
          [...Array(attributePages)].map((elem, index) => (
            <AttributeCart
              defaultCount={defaultCount}
              index={index}
              attributes={product.attributes}
              key={index}
              isPopup={isPopup}
            />
          ))
        ) : (
          <AttributeCart
            defaultCount={4}
            index={[...Array(attributePages[0])]}
            attributes={product.attributes}
            key={Math.random()}
            isPopup={isPopup}
          />
        )}
      </div>
    </div>
  );
};

export default ProductAttributes;
