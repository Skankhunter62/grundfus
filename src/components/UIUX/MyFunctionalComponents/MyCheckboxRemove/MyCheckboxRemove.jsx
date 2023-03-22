import React, { useState } from "react";
import classes from "./MyCheckboxRemove.module.css";
import Checkbox from "@mui/material/Checkbox";

const MyCheckboxRemove = ({
  product,
  selected,
  stateMassAddItemsObject,
  stateRemoveMassWishlist,
}) => {
  const [localChecked, setLocalChecked] = useState(false);
  return (
    <div className={classes.checkboxBlock}>
      <Checkbox
        label="Label"
        onClick={() => {
          setLocalChecked(!localChecked);
          if (!localChecked) {
            stateMassAddItemsObject(product);
          } else {
            stateRemoveMassWishlist(product);
          }
        }}
        checked={selected || localChecked}
      />
    </div>
  );
};

export default MyCheckboxRemove;
