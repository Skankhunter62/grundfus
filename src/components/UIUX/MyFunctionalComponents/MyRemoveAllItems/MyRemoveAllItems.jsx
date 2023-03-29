import React, { useState, useEffect } from "react";
import classes from "./MyRemoveAllItems.module.css";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const MyRemoveAllItems = ({
  stateName,
  checkSelected,
  stateObject,
  stateRemoveObject,
  stateMassObject,
  stateMassRemoveObject,
  stateMassAddItemsObject,
  stateMassRemoveAllObject,
}) => {
  const [checked, setChecked] = useState(false);
  const changeChecked = () => {
    setChecked(!checked);
  };
  const deleteSelectedElements = (productArray) => {
    productArray.map((singleProduct) => {
      stateRemoveObject(singleProduct);
      stateMassRemoveObject(singleProduct);
    });
    localStorage.removeItem(stateName);
  };

  useEffect(() => {
    if (stateMassObject.length === stateObject.length) {
      if (!checked) {
        checkSelected();
        changeChecked();
      }
    }
    if (stateMassObject.length === 0) {
      if (checked) {
        checkSelected();
        setChecked(false);
      }
    }
  }, [stateMassObject]);

  // console.log("stateMassObject.length", stateMassObject);
  // console.log("stateObject.length", stateObject);
  return (
    <div className={classes.removeAll}>
      <div className={classes.leftPart}>
        <div className={classes.checkboxBlock}>
          <Checkbox
            checked={checked}
            {...label}
            onClick={() => {
              changeChecked();
              checkSelected();
              if (stateMassObject.length !== 0) {
                if (stateMassObject.length === stateObject.length) {
                  stateMassRemoveAllObject();
                } else {
                  stateMassRemoveAllObject();
                  stateMassAddItemsObject(stateObject);
                }
              } else {
                stateMassAddItemsObject(stateObject);
              }
            }}
          />
          <div className={classes.checkAll}>Выбрать все</div>
        </div>
        <div className={classes.regularText}>
          Выбрано товаров: {stateMassObject.length}
        </div>
      </div>
      <div
        className={
          stateMassObject.length !== 0
            ? classes.regularText
            : classes.regularTextDisabled
        }
        onClick={() => {
          deleteSelectedElements(stateMassObject);
        }}
      >
        Удалить выбранное
      </div>
    </div>
  );
};

export default MyRemoveAllItems;
