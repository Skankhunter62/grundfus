import React from "react";
import classes from "./TestProductLoopAsideFilterOption.module.css";
import FilterText from "../../../../../UIUX/FontsButtons/Texts/Filter/FilterText/FilterText";

const TestProductLoopAsideFilterOption = ({
  children,
  checkTest,
  active,
  attributeName,
}) => {
  return (
    <div className={classes.MyFilterOptionBlock}>
      <input
        checked={active}
        type="checkbox"
        value={children}
        className={classes.MyFilterOptionCheckBox}
        onChange={() => {
          checkTest(children, attributeName);
        }}
      />
      <FilterText>{children}</FilterText>
    </div>
  );
};

export default TestProductLoopAsideFilterOption;
