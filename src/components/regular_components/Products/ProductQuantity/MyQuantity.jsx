import React from "react";
import classes from "./MyQuantity.module.css";
import { useTypedSelector } from "../../../../store/hooks/useTypedSelector";

const MyQuantity = ({ product, countDecrease, countIncrease, counter }) => {
  const { cart } = useTypedSelector((state) => state);
  const isExistsInCart = cart.find((p) => p.id === product.id || 0);
  return (
    <div className={classes.mainMyQuantityBlock}>
      <button
        className={
          counter > 1
            ? `${classes.myQuantitySingleBlock}`
            : `${classes.myQuantitySingleBlock} ${classes.disable}`
        }
        onClick={() => countDecrease()}
        disabled={counter <= 1}
      >
        -
      </button>
      <div className={`${classes.myQuantitySingleBlock}`}>{counter}</div>
      <button
        className={`${classes.myQuantitySingleBlock}`}
        onClick={() => {
          countIncrease();
        }}
      >
        +
      </button>
    </div>
  );
};

export default MyQuantity;
