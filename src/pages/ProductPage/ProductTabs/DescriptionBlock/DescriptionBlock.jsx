import React, { useState } from "react";
import classes from "../../ProductPage.module.css";
import DescriptionTab from "./DescriptionTab/DescriptionTab";
import ProductPageTabsAndUpSallesButton from "../../../../components/UIUX/FontsButtons/Buttons/ProductPageTabsAndUpSallesButton/ProductPageTabsAndUpSallesButton";

const DescriptionBlock = ({ product_description }) => {
  const [shortDescription, setShortDescription] = useState(true);
  const [buttonDescription, setButtonDescription] = useState("Читать еще");
  const getShortDescription = () => {
    if (!shortDescription) {
      setButtonDescription("Читать ещё");
    } else {
      setButtonDescription("Свернуть");
    }
    setShortDescription(!shortDescription);
  };
  return (
    <div>
      <div className={shortDescription ? classes.descriptionHeight : ""}>
        <DescriptionTab description={product_description} />
      </div>
      <div className={classes.readMore}>
        <div
          className={
            product_description.length > 993
              ? classes.showMoreVisible
              : classes.showMoreDisabled
          }
        >
          <ProductPageTabsAndUpSallesButton
            isTabs={true}
            change={getShortDescription}
          >
            {buttonDescription}
          </ProductPageTabsAndUpSallesButton>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBlock;
