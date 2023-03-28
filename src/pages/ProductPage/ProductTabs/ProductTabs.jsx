import React, { useState } from "react";
import classes from "./ProductTabs.module.css";
import TubsButtons from "./TabsButtons/TubsButtons";
import TabsContent from "./TabsContent/TabsContent";

const ProductTabs = ({ product }) => {
  const [isActive, setIsActive] = useState([true, false, false]);
  const changeActiveTab = (currentTab) => {
    switch (currentTab) {
      case 1:
        setIsActive([true, false, false]);
        break;
      case 2:
        setIsActive([false, true, false]);
        break;
      case 3:
        setIsActive([false, false, true]);
        break;
      default:
        setIsActive([true, false, false]);
    }
  };

  return (
    <div className={classes.productTabsBlock}>
      <TubsButtons isActive={isActive} changeActiveTab={changeActiveTab} />
      <TabsContent tabsFlag={isActive} product={product} />
    </div>
  );
};

export default ProductTabs;
