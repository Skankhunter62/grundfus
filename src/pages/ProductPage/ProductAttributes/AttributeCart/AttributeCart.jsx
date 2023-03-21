import React from "react";
import classes from "./AttributeCart.module.css";

const AttributeCart = ({ attributes, defaultCount, index, isPopup }) => {
  const indexOfLastAttribute = (index + 1) * defaultCount;
  const indexOfFirstAttribute = indexOfLastAttribute - defaultCount;
  const currentAttributes = attributes.slice(
    indexOfFirstAttribute,
    indexOfLastAttribute
  );
  return (
    <div
      className={!isPopup ? classes.attributeCart : classes.attributeCartpopup}
    >
      {currentAttributes.map((attr) => (
        <div className={classes.attributeString} key={attr.name}>
          <div className={classes.attributeText}>{attr.name}</div>
          <div className={classes.attributeText}>{attr.options[0]}</div>
        </div>
      ))}
    </div>
  );
};

export default AttributeCart;
