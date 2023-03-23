import React, { useState, useEffect } from "react";
import classes from "./MyCheckboxRemove.module.css";
import Checkbox from "@mui/material/Checkbox";

const MyCheckboxRemove = ({
  product,
  selected,
  stateMassAddItemsObject,
  stateMassRemoveItemsObject,
}) => {
  const [localChecked, setLocalChecked] = useState(false);
  useEffect(() => {
    setLocalChecked(selected);
  }, [selected]);
  return (
    <div className={classes.checkboxBlock}>
      <Checkbox
        label="Label"
        onClick={() => {
          setLocalChecked(!localChecked);
          if (!localChecked) {
            stateMassAddItemsObject(product);
          } else {
            stateMassRemoveItemsObject(product);
          }
        }}
        checked={localChecked}
      />
    </div>
  );
};

export default MyCheckboxRemove;
