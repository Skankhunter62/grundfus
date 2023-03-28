import React from "react";
import classes from "./TabsContent.module.css";
import DescriptionBlock from "../DescriptionBlock/DescriptionBlock";
import DocumentationTab from "../DocumentationTab/DocumentationTab";
import DefaultText from "../../../../components/UIUX/FontsButtons/Texts/DefaultText/DefaultText";
import ReviewsTab from "../ReviewsTab/ReviewsTab";

const TabsContent = ({ tabsFlag, product }) => {
  const getTabInfo = () => {
    if (tabsFlag[0]) {
      return product.description ? (
        <DescriptionBlock product_description={product.description} />
      ) : (
        <p>Описание отсутствует</p>
      );
    }

    if (tabsFlag[1]) {
      return product.acf.doc_file !== null ? (
        <DocumentationTab doc_file={product.acf.doc_file} />
      ) : (
        <DefaultText>Документации к данному товару не обнаружено!</DefaultText>
      );
    } else {
      return (
        <div className={classes.reviewsContainer}>
          <ReviewsTab product={product} />
        </div>
      );
    }
  };
  return <div className={classes.contentTabs}>{getTabInfo()}</div>;
};

export default TabsContent;
