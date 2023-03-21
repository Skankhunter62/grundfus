import React from "react";
import classes from "./HeaderBottomRightSection.module.css";
import { subMenu } from "../../../../../WC_WP_API/local_db/local_db";
import DefaultText from "../../../../UIUX/FontsButtons/Texts/DefaultText/DefaultText";

const HeaderBottomRightSection = () => {
  return (
    <ul className={classes.HeaderBottomRightSection}>
      {subMenu.map((item) => (
        <li key={item.id} className={classes.HeaderBottomRightSectionLnk}>
          <DefaultText isLink={true} link={item.link}>
            {item.title}
          </DefaultText>
        </li>
      ))}
    </ul>
  );
};

export default HeaderBottomRightSection;
