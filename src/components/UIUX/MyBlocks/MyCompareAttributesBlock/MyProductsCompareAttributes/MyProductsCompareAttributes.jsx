import React from "react";
import classes from "./MyProductsCompareAttributes.module.css";
import MyCompareProductAttributes from "../../../../regular_components/Sliders/CompareSlider/MyCompareProductAttributes/MyCompareProductAttributes";
import { useTypedSelector } from "../../../../../store/hooks/useTypedSelector";
import DefaultText from "../../../FontsButtons/Texts/DefaultText/DefaultText";

const MyProductsCompareAttributes = ({ sliderCounter, subarray }) => {
  const { compareAttributes } = useTypedSelector((state) => state);
  return (
    <div className={classes.attributesBlock}>
      {compareAttributes?.map((attr) => (
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
