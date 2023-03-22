import React, { useState } from "react";
import classes from "./ProductLoopAside.module.css";
import ProductLoopAsideCategories from "./ProductLoopAsideCategories/ProductLoopAsideCategories";
import ProductLoopAsideRemoveFilters from "./ProductLoopAsideRemoveFilters/ProductLoopAsideRemoveFilters";
import ProductLoopAsideFilters from "./ProductLoopAsideFilters/ProductLoopAsideFilters";
import ProductLoopAsideFiltersPrice from "./ProductLoopAsideFiltersPrice/ProductLoopAsideFiltersPrice";

const ProductLoopAside = ({
  isCatalog = false,
  changeEmptyFlag,
  emptyProducts = false,
}) => {
  /*remove active attribute list*/
  const [removeFilters, setRemoveFilters] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const changeRemoveFilter = () => setRemoveFilters(!removeFilters);
  const changeNotFound = () => setNotFound(!notFound);
  return (
    <aside className={classes.ProductLoopAside}>
      {isCatalog ? (
        <ProductLoopAsideRemoveFilters
          changeRemoveFilter={changeRemoveFilter}
        />
      ) : (
        <></>
      )}
      <ProductLoopAsideCategories />
      {isCatalog ? <ProductLoopAsideFiltersPrice /> : <></>}
      {isCatalog ? (
        <ProductLoopAsideFilters
          removeFilters={removeFilters}
          changeEmptyFlag={changeEmptyFlag}
          changeNotFound={changeNotFound}
          emptyProducts={emptyProducts}
        />
      ) : (
        <></>
      )}
    </aside>
  );
};

export default ProductLoopAside;
