import React, { useEffect, useState } from "react";
import classes from "./TestCatalogItemsLoop.module.css";
import MyPagination from "../../../components/UIUX/MyBlocks/MyPagination/MyPagination";
import { loaderContent } from "../../../dataArrays";
import { Skeleton } from "@mui/material";
import HorizontalProductCard from "../../../components/UIUX/MyBlocks/HorizontalProductCart/HorizontalProductCard";
import GridProductCard from "../../../components/UIUX/MyBlocks/GridProductCard/GridProductCard";
import MyEmptyComponent from "../../../components/UIUX/MyBlocks/MyEmptyComponent/MyEmptyComponent";
import { useTypedSelector } from "../../../store/hooks/useTypedSelector";
import GridProductCardPopup from "../../../components/UIUX/MyBlocks/GridProductCard/GridProductCardPopup/GridProductCardPopup";

const TestCatalogItemsLoop = (props) => {
  const [isShown, setIsShown] = useState(false);
  const [product, setProduct] = useState({});
  const catalogChangePopupState = (product) => {
    setProduct(product);
    setIsShown((current) => !current);
  };
  return (
    <React.Fragment>
      {isShown ? (
        <GridProductCardPopup
          product={product}
          changePopupState={catalogChangePopupState}
        />
      ) : null}
      <section
        className={
          props.grid
            ? classes.catalogMainSection
            : classes.catalogMainSectionHorizontal
        }
      >
        {props.loading || props.currentRecords.length === 0 ? (
          loaderContent.map((product, index) => (
            <Skeleton
              variant="rectangular"
              width={300}
              height={440}
              key={index}
            />
          ))
        ) : props.currentRecords.length !== 0 ? (
          props.grid ? (
            props.currentRecords.map((product) => (
              <GridProductCard
                key={Math.random()}
                product={product}
                catalogChangePopupState={catalogChangePopupState}
              />
            ))
          ) : (
            props.currentRecords.map((product) => (
              <HorizontalProductCard
                key={Math.random() + 2}
                product={product}
                isCatalog={true}
              />
            ))
          )
        ) : (
          <MyEmptyComponent pageTitle="Товары для данной категории отсутствуют" />
        )}
      </section>
      <div className={classes.paginationBlock}>
        {props.loading ? (
          ""
        ) : props.nPages > 1 ? (
          <MyPagination
            nPages={props.nPages}
            currentPage={props.currentPage}
            setCurrentPage={props.setCurrentPage}
          />
        ) : (
          ""
        )}
      </div>
    </React.Fragment>
  );
};

export default TestCatalogItemsLoop;
