import React, { useEffect, useState } from "react";
import classes from "./ProductLoopAsideFilters.module.css";
import { useTypedSelector } from "../../../../store/hooks/useTypedSelector";
import { useActions } from "../../../../store/hooks/useActions";
import { useLocation } from "react-router-dom";
import {
  getProductsByCalcOption,
  getAttributesToDefaultList,
  getProductsByFilterOption,
} from "../../../../custom_functions/FilterFunctions/FilterExportFunctions";
import { attributesDefaultList } from "../../../../WC_WP_API/local_db/local_db";
import ProductLoopAsideFilterAttribute from "./ProductLoopAsideFilterAttribute/ProductLoopAsideFilterAttribute";

const ProductLoopAsideFilters = ({
  removeFilters,
  changeEmptyFlag,
  emptyProducts = false,
}) => {
  /*get lists of products and product attributes from redux store*/
  const { productAttributes, productsList, singleCategory } = useTypedSelector(
    (state) => state
  );
  /*get function which add items to products filter list*/
  const { addProductsToFilterList } = useActions();
  /*list of active attribute names by which we start filtering*/
  const [activeAttributeList, setActiveAttributeList] = useState([]);
  /*calculator options*/
  const [calcAttributeList, setCalcAttributeList] = useState([
    { option: "5", attrName: "Максимальный напор" },
  ]);
  /*loader element to display filters (important)*/
  const [loading, setLoading] = useState(true);
  /*temporary array of products which created after product filtering*/
  const [temporaryArrayOfProducts, setTemporaryArrayOfProducts] = useState([]);
  /*push active attributes and options to array*/
  const locationState = useLocation();
  const checkTest = (option, attrName) => {
    let valueArray = { option, attrName };
    if (
      activeAttributeList.length === 0 ||
      !activeAttributeList.some((item) => item.option === valueArray.option)
    ) {
      if (
        activeAttributeList.some(
          (activeAttribute) => activeAttribute.attrName === valueArray.attrName
        ) ||
        activeAttributeList.length === 0
      ) {
        setActiveAttributeList((prevState) => [...prevState, valueArray]);
      } else {
        setActiveAttributeList((prevState) => [...prevState, valueArray]);
      }
    } else if (
      activeAttributeList.some((item) => item.option === valueArray.option)
    ) {
      setActiveAttributeList((current) =>
        current.filter((elem) => elem.option !== valueArray.option)
      );
    }
  };

  /*get attributes options of products by category*/
  useEffect(() => {
    getAttributesToDefaultList(productAttributes, setLoading);
  }, [productAttributes, singleCategory]);
  /*add products to filter list when we have not empty temporary array*/
  useEffect(() => {
    if (temporaryArrayOfProducts.length !== 0) {
      addProductsToFilterList(temporaryArrayOfProducts);
    }
  }, [temporaryArrayOfProducts]);
  //   /*check if we do not have active options we push array of default products*/
  useEffect(() => {
    if (locationState.state !== null && locationState.state.fromCalc) {
      getProductsByCalcOption(
        {
          option: locationState.state.pressure,
          attrName: "Максимальный напор",
        },
        productsList,
        temporaryArrayOfProducts,
        setTemporaryArrayOfProducts,
        changeEmptyFlag
      );
    }
  }, [productsList]);
  useEffect(() => {
    activeAttributeList.length !== 0
      ? getProductsByFilterOption(
          activeAttributeList,
          productsList,
          temporaryArrayOfProducts,
          setTemporaryArrayOfProducts,
          changeEmptyFlag
        )
      : addProductsToFilterList(productsList);
    if (emptyProducts) {
      changeEmptyFlag();
    }
  }, [activeAttributeList]);

  /*check is remove all clicked*/
  useEffect(() => {
    if (removeFilters === true) {
      locationState.state = null;
      setActiveAttributeList([]);
    }
  }, [removeFilters]);
  return (
    <div className={classes.ProductLoopAsideFilters}>
      {loading ? (
        <></>
      ) : (
        attributesDefaultList.map((productFilterAttributes) =>
          productFilterAttributes.options.length > 1 ? (
            <ProductLoopAsideFilterAttribute
              key={Math.random() + productFilterAttributes.id}
              productFilterAttributes={productFilterAttributes}
              checkTest={checkTest}
              activeAttributeList={activeAttributeList}
            />
          ) : (
            <React.Fragment key={Math.random()} />
          )
        )
      )}
    </div>
  );
};

export default ProductLoopAsideFilters;
