import React, { useState, useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import classes from "./CalculatorInput.module.css";

const CalculatorInput = ({
  updateDepth,
  updateDistance,
  updatePressure,
  type,
}) => {
  const [pumpDepth, setPumpDepth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [value, setValue] = useState(() => {
    if (type === "pump") {
      return 20;
    } else if (type === "distance") {
      return 10;
    } else {
      return 80;
    }
  });
  const maxValue = 10000;
  const minValue = 0;

  const incrementValue = () => {
    const newValue = value + 1;
    if (newValue <= maxValue) {
      if (type === "pump") {
        setValue(newValue);
        setPumpDepth(newValue);
        updateDepth(newValue);
      } else if (type === "distance") {
        setValue(newValue);
        setDistance(newValue);
        updateDistance(newValue);
      } else if (type === "pressure") {
        setValue(newValue);
        updatePressure(newValue);
      }
    }
  };
  const decrementValue = () => {
    const newValue = value - 1;
    if (newValue >= minValue) {
      if (type === "pump") {
        setValue(newValue);
        setPumpDepth(newValue);
        updateDepth(newValue);
      } else if (type === "distance") {
        setValue(newValue);
        setDistance(newValue);
        updateDistance(newValue);
      } else if (type === "pressure") {
        setValue(newValue);
        updatePressure(newValue);
      }
    }
  };

  const inputValueChange = (event) => {
    const newValue = Number(event.target.value);
    if (!isNaN(newValue)) {
      if (type === "pump") {
        setValue(newValue);
        updateDepth(newValue);
        setPumpDepth(newValue);
      } else if (type === "distance") {
        setValue(newValue);
        updateDistance(newValue);
        setDistance(newValue);
      } else if (type === "pressure") {
        setValue(newValue);
        updatePressure(newValue);
      }

      // if (newValue > pumpDepthMaxValue) {
      //   setPumpDepth(pumpDepthMaxValue);
      // } else if (newValue < pumpDepthMinValue) {
      //   setPumpDepth(0);
      // } else {
      //   setPumpDepth(newValue);
      // }
    }
  };
  const inputProps = {
    maxlength: 7,
    max: 10000,
    min: 0,
  };
  return (
    <div className={classes.inputWrapper}>
      <OutlinedInput
        type="text"
        placeholder="0"
        inputProps={inputProps}
        inputComponent={classes.input}
        value={value}
        classes={classes.input}
        fullWidth={true}
        onChange={inputValueChange}
      ></OutlinedInput>
      <div className={classes.arrow_up} onClick={incrementValue}>
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.70842 4.70706C7.89523 4.51817 8 4.26322 8 3.99756C8 3.7319 7.89523 3.47695 7.70842 3.28806L4.76942 0.323059C4.55142 0.108059 4.26942 0.00105953 3.99042 0.00105953C3.71142 0.00105953 3.43442 0.108059 3.22142 0.323059L0.29142 3.27806C0.104854 3.46708 0.000244141 3.72197 0.000244141 3.98756C0.000244141 4.25314 0.104854 4.50804 0.29142 4.69706C0.383251 4.79024 0.492692 4.86424 0.613379 4.91475C0.734066 4.96526 0.86359 4.99127 0.99442 4.99127C1.12525 4.99127 1.25477 4.96526 1.37546 4.91475C1.49615 4.86424 1.60559 4.79024 1.69742 4.69706L3.99542 2.38006L6.30242 4.70706C6.39446 4.79988 6.50396 4.87356 6.62462 4.92383C6.74528 4.97411 6.8747 5 7.00542 5C7.13614 5 7.26556 4.97411 7.38622 4.92383C7.50688 4.87356 7.61638 4.79988 7.70842 4.70706Z"
            fill="#003767"
          />
        </svg>
      </div>
      <div className={classes.arrow_down} onClick={decrementValue}>
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.29158 0.292941C0.104773 0.481833 0 0.736777 0 1.00244C0 1.2681 0.104773 1.52305 0.29158 1.71194L3.23058 4.67694C3.44858 4.89194 3.73058 4.99894 4.00958 4.99894C4.28858 4.99894 4.56558 4.89194 4.77858 4.67694L7.70858 1.72194C7.89515 1.53292 7.99976 1.27803 7.99976 1.01244C7.99976 0.746856 7.89515 0.49196 7.70858 0.302941C7.61675 0.209757 7.50731 0.135759 7.38662 0.0852509C7.26593 0.0347429 7.13641 0.0087328 7.00558 0.0087328C6.87475 0.0087328 6.74523 0.0347429 6.62454 0.0852509C6.50385 0.135759 6.39441 0.209757 6.30258 0.302941L4.00458 2.61994L1.69758 0.292941C1.60554 0.20012 1.49604 0.126444 1.37538 0.0761652C1.25472 0.0258864 1.1253 0 0.99458 0C0.863865 0 0.734443 0.0258864 0.613784 0.0761652C0.493125 0.126444 0.383617 0.20012 0.29158 0.292941Z"
            fill="#003767"
          />
        </svg>
      </div>
    </div>
  );
};

export default CalculatorInput;
