import React from "react";
import classes from "./TestProductLoopAsideRemoveFilters.module.css";
import MyFilterAttributeTitle from "../../../UIUX/FontsButtons/Texts/Filter/FilterTitle/MyFilterAttributeTitle";
import FilterText from "../../../UIUX/FontsButtons/Texts/Filter/FilterText/FilterText";
import { useTypedSelector } from "../../../../store/hooks/useTypedSelector";
import { useActions } from "../../../../store/hooks/useActions";

const TestProductLoopAsideRemoveFilters = ({ changeRemoveFilter }) => {
  /*get lists of products and product attributes from redux store*/
  const { productsList } = useTypedSelector((state) => state);
  /*get function which add items to products filter list*/
  const { addProductsToFilterList } = useActions();

  const clearFilters = () => {
    changeRemoveFilter();
    addProductsToFilterList(productsList);
  };
  return (
    <div className={classes.MyFilterRemoveAllBlock}>
      <MyFilterAttributeTitle>Фильтр</MyFilterAttributeTitle>
      <FilterText clearFilters={clearFilters}>Очистить все</FilterText>
    </div>
  );
};

export default TestProductLoopAsideRemoveFilters;
