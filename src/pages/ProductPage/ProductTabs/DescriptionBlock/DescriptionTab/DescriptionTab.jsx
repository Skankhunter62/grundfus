import React from "react";
import parse from "html-react-parser";
import classes from "./DescriptionTab.module.css";
import DefaultText from "../../../../../components/UIUX/FontsButtons/Texts/DefaultText/DefaultText";

const DescriptionTab = ({ description }) => {
  return (
    <DefaultText className={classes.descriptionHeight}>
      {parse(description)}
    </DefaultText>
  );
};

export default DescriptionTab;
