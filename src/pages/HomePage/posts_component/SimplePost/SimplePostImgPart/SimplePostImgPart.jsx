import React, { useState } from "react";
import classes from "./SimplePostImgPart.module.css";
import CatalogOrderEmptyButton from "../../../../../components/UIUX/FontsButtons/Buttons/CatalogOrderEmptyButton/CatalogOrderEmptyButton";

const SimplePostImgPart = ({ postImg, acf }) => {
  return (
    <div className={classes.SimplePostImgPartBlock}>
      <img
        src={postImg}
        alt="Купить насосы Grundfos с доставкой по Москве и Московской области"
        width={750}
        height={500}
        className={classes.SimplePostImgPartImg}
      />
      <div className={classes.SimplePostImgPartTextPart}>
        <p className={classes.SimplePostImgPartTextPartTitle}>
          {acf?.sub_title_of_block}
        </p>
        <p className={classes.SimplePostImgPartTextPartText}>
          {acf?.sub_text_of_banner_block}
        </p>
        <CatalogOrderEmptyButton link={acf?.banner_post_link}>
          Перейти в каталог
        </CatalogOrderEmptyButton>
      </div>
    </div>
  );
};

export default SimplePostImgPart;
