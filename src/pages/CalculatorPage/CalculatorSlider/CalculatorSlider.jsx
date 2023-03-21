import React from "react";
import Slider from "@mui/material/Slider";
import classes from "./CalculatorSlider.module.css";
const CalculatorSlider = ({ ...props }) => {
  return (
    <div className={classes.slider}>
      <Slider {...props} />
    </div>
  );
};

export default CalculatorSlider;
