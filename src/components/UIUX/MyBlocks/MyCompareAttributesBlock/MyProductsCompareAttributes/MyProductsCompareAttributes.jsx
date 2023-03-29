import React from "react";
import classes from "./MyProductsCompareAttributes.module.css";
import MyCompareProductAttributes from "../../../../regular_components/Sliders/CompareSlider/MyCompareProductAttributes/MyCompareProductAttributes";
import { useTypedSelector } from "../../../../../store/hooks/useTypedSelector";
import DefaultText from "../../../FontsButtons/Texts/DefaultText/DefaultText";

const MyProductsCompareAttributes = ({ sliderCounter, subarray }) => {
  const { compareAttributes } = useTypedSelector((state) => state);
  let attrIndex = 0;
  if (sliderCounter === 0) {
    attrIndex = 0;
  } else {
    attrIndex = sliderCounter * 2 - 1;
  }
  let newArray = compareAttributes[attrIndex];
  console.log("newArray: ", newArray);
  return (
    <div className={classes.attributesBlock}>
      {newArray?.map((attr) => (
        <div
          key={Math.random()}
          className={classes.myProductsCompareAttributesBlock}
        >
          <div className={classes.attributeDefaultTitle}>
            <DefaultText>{attr.name}</DefaultText>
          </div>
          <div className={classes.MyProductsCompareAttributesBlock}>
            <MyCompareProductAttributes
              sliderCounter={sliderCounter}
              attributeName={attr.name}
              subarray={subarray}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyProductsCompareAttributes;
