import React from "react";
import classes from "../MainProductImage.module.css";
const MainImagePopup = ({ img, changePopupState }) => {
  const prevent = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <>
      <div id="myModal" className={classes.modal} onClick={changePopupState}>
        <span className={classes.close}>&times;</span>
        <img
          src={img.src}
          alt={img.alt}
          className={classes.modal_content}
          onClick={prevent}
        />
      </div>
    </>
  );
};

export default MainImagePopup;
